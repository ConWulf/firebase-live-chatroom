<template>
  <div ref="chatWindow" class="w-5/6 px-4 py-2 bg-gray-50 mx-auto max-h-96 overflow-y-auto text-center shadow-md flex">
    <div v-if="error">{{ error }}</div>
    <div v-if="docs" class="space-y-1.5">
      <div v-for="doc in formattedDocs" :key="doc.id" class="p-1 text-md text-left">
        <span class="block text-sm">{{ doc.createdAt }}</span>
        <span class="font-bold mr-2">{{ doc.name }}</span>
        <span>{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/GetCollection"
import { formatDistanceToNow } from 'date-fns'
import {computed, onUpdated} from "vue"
import { ref } from 'vue'
export default {
  name: "ChatWindow",
  setup() {
    const {error, docs} = getCollection('messages')
    //auto scroll to bottom of messages
    const chatWindow = ref(null)
    onUpdated(() => {
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight
    })
    //format time
    // eslint-disable-next-line vue/return-in-computed-property
    const formattedDocs = computed(() => {
      if (docs.value) {
        return docs.value.map(doc => {
          doc.createdAt = formatDistanceToNow(doc.createdAt.toDate())
          return doc
        })
      }
    })

    return { error, docs, formattedDocs, chatWindow }
  }
}
</script>
