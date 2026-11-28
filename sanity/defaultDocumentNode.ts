import {Iframe, type UrlResolver} from 'sanity-plugin-iframe-pane'
import type {DefaultDocumentNodeResolver} from 'sanity/structure'

const getPreviewUrl: UrlResolver = (doc) => {
  const slug = (doc?.slug as {current?: string} | undefined)?.current

  return slug
    ? `https://her-name-is-han.vercel.app/stories/${encodeURIComponent(slug)}`
    : 'https://her-name-is-han.vercel.app/stories'
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType !== 'blogPost') {
    return S.document().views([S.view.form()])
  }

  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({url: getPreviewUrl, reload: {button: true}})
      .title('Preview'),
  ])
}
