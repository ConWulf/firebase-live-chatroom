<template>
  <div ref="chatWindow" class="w-5/6 px-4 py-2 bg-gray-50 mx-auto max-h-96 h-96 overflow-y-auto text-center shadow-md flex">
    <div v-if="error">{{ error }}</div>
    <div v-if="docs" class="space-y-1.5 w-full">
      <div v-for="doc in formattedDocs" :key="doc.id" class="p-1 text-md text-left w-1/ flex items-end">
        <div class="flex-grow">
          <span class="block text-sm">{{ doc.createdAt }}</span>
          <span class="font-bold mr-2">{{ doc.name }}</span>
          <span>{{ doc.message }}</span>
        </div>
        <div class="flex-grow" v-if="user">
          <button v-if="user.displayName === doc.name" @click="deleteMessage(doc.id)" class="inline-block bg-green-300 px-3 py-1">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/GetCollection"
import deleteItem from "@/composables/DeleteItem"
import { formatDistanceToNow } from 'date-fns'
import {computed, onUpdated} from "vue"
import { ref } from 'vue'
import getUser from "@/composables/GetUser";
export default {
  name: "ChatWindow",
  setup() {
    const {error, docs} = getCollection('messages')
    const {user} = getUser()
    //auto scroll to bottom of messages
    const chatWindow = ref(null)
    onUpdated(() => {
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight
    })

    const deleteMessage = async (id) => {
      await deleteItem('messages', id)
    }
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

    return { error, docs, formattedDocs, chatWindow, deleteMessage, user }
  }
}
</script>
