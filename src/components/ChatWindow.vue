<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="docs">
      <div v-for="doc in formattedDocs" :key="doc.id">
        <span>{{ doc.createdAt }}</span>
        <span>{{ doc.name }}</span>
        <span>{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/GetCollection";
import { formatDistanceToNow } from 'date-fns'
import {computed} from "vue";
export default {
  name: "ChatWindow",
  setup() {
    const {error, docs} = getCollection('messages')

    // eslint-disable-next-line vue/return-in-computed-property
    const formattedDocs = computed(() => {
      if (docs.value) {
        return docs.value.map(doc => {
          doc.createdAt = formatDistanceToNow(doc.createdAt.toDate())
          return doc
        })
      }
    })

    return { error, docs, formattedDocs }
  }
}
</script>
