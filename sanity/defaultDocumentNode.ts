import {Iframe} from 'sanity-plugin-iframe-pane'
import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import type {SanityDocument} from 'sanity'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType !== 'blogPost') {
    return S.document().views([S.view.form()])
  }

  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: {
          origin: 'https://her-name-is-han.vercel.app',
          preview: (doc: SanityDocument | undefined) => {
            const slug = (doc?.slug as {current?: string} | undefined)?.current

            return slug ? `/stories/${encodeURIComponent(slug)}` : '/stories'
          },
          draftMode: '/preview/enable',
        },
        reload: {button: true},
      })
      .title('Preview'),
  ])
}
