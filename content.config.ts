import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    test: defineCollection({
      type: 'page',
      source: 'test/*.md'
    })
  }
})
