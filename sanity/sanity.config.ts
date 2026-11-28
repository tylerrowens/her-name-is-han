import {defineConfig} from 'sanity'
import {structureTool, type StructureResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {schemaTypes} from './schemaTypes'
import {muxInput} from 'sanity-plugin-mux-input'
import {defaultDocumentNode} from './defaultDocumentNode'

const structure: StructureResolver = (S) => {
  const singletonWithPreview = (id: string, path: string) =>
    S.listItem()
      .singleton(id)
      .child(
        S.document()
          .singleton(id)
          .views([
            S.view.form(),
            S.view
              .component(Iframe)
              .options({
                url: {
                  origin: 'https://her-name-is-han.vercel.app',
                  preview: () => path,
                  draftMode: '/preview/enable',
                },
                reload: {button: true},
              })
              .title('Preview'),
          ]),
      )

  return S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems(),
      singletonWithPreview('newsletterCard', '/'),
      singletonWithPreview('locationsPage', '/locations'),
      singletonWithPreview('aboutPage', '/about'),
      singletonWithPreview('storiesPage', '/stories'),
    ])
}

export default defineConfig({
  name: 'default',
  title: 'Her Name Is Han',

  projectId: 'ihj0t38y',
  dataset: 'production',

  plugins: [structureTool({structure, defaultDocumentNode}), visionTool(), muxInput()],

  schema: {
    types: schemaTypes,
  },

  document: {
    singletons: ['newsletterCard', 'storiesPage', 'aboutPage', 'locationsPage'],
  },
})
