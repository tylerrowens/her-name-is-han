import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {muxInput} from 'sanity-plugin-mux-input'
import {defaultDocumentNode} from './defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Her Name Is Han',

  projectId: 'ihj0t38y',
  dataset: 'production',

  plugins: [structureTool({defaultDocumentNode}), visionTool(), muxInput()],

  schema: {
    types: schemaTypes,
  },

  document: {
    singletons: ['newsletterCard', 'storiesPage', 'aboutPage'],
  },
})
