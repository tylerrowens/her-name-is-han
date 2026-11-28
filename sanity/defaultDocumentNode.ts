import {Iframe} from 'sanity-plugin-iframe-pane'
import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import type {SanityDocument} from 'sanity'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType, getClient}) => {
  console.log('Document schema type:', schemaType)
  if (!['blogPost', 'menu', 'locationsPage', 'location'].includes(schemaType)) {
    return S.document().views([S.view.form()])
  }

  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: {
          origin: 'https://her-name-is-han.vercel.app',
          preview: async (doc: SanityDocument | undefined) => {
            if (schemaType === 'locationsPage' || schemaType === 'location') {
              return '/locations'
            }

            const slug = (doc?.slug as {current?: string} | undefined)?.current

            if (!slug) {
              return new Error('Generate a slug before previewing.')
            }

            if (schemaType === 'blogPost') {
              return `/stories/${encodeURIComponent(slug)}`
            }

            const menuId = doc?._id?.replace(/^drafts\./, '')

            if (!menuId) {
              return new Error('Save this menu before previewing.')
            }

            const locationSlug = await getClient({apiVersion: '2025-02-19'})
              .withConfig({perspective: 'drafts', useCdn: false})
              .fetch<string | null>(
                `*[_type == "location" && $menuId in menus[]._ref][0].slug.current`,
                {menuId},
              )

            if (!locationSlug) {
              return new Error('Add this menu to a location before previewing.')
            }

            return `/menu/${encodeURIComponent(locationSlug)}/${encodeURIComponent(slug)}`
          },
          draftMode: '/preview/enable',
        },
        reload: {button: true},
      })
      .title('Preview'),
  ])
}
