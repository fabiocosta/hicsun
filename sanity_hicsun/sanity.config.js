import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {languageFilter} from '@sanity/language-filter'
import {schemaTypes} from './schemas'

const supportedLanguages = [
  { id: 'pt', title: 'Portuguese', isDefault: true },
  { id: 'en', title: 'English' }
]

const baseLanguage = supportedLanguages.find(l => l.isDefault)

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}

const article = {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`
    }
  }
}

export default defineConfig({

  name: 'default',
  title: 'hicsun',

  projectId: 'csd0yn0e',
  dataset: 'production',

  plugins: [
    deskTool(), 
    visionTool(),
    languageFilter({
      supportedLanguages: [{
          id: 'pt', title: 'Portuguese', isDefault: true,
          id: 'en', title: 'English'
      }] 
    })
  ],

  schema: {
    types: schemaTypes,
    localeString,
    article
  },
})
