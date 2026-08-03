import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ihj0t38y',
    dataset: 'production'
  },

  schemaExtraction: {
    enabled: true,
    path: 'schema.json'
  },

  typegen: {
    enabled: true,
    path: '../svelte/src/**/*.{ts,svelte}',
    schema: 'schema.json',
    generates: '../svelte/src/lib/sanity/sanity.types.ts',
    overloadClientMethods: true
  },

  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
