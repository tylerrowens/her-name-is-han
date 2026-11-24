import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ihj0t38y',
    dataset: 'production',
  },

  schemaExtraction: {
    enabled: true,
    path: 'schema.json',
  },

  typegen: {
    enabled: true,
    path: '../svelte/src/**/*.{ts,svelte}',
    schema: 'schema.json',
    generates: '../svelte/src/lib/sanity/sanity.types.ts',
    overloadClientMethods: true,
  },

  deployment: {
    appId: 'rbdqnwa6jv3ojrkljpaczmb9',
    autoUpdates: true,
  },
})
