<template>
  <form @submit.prevent="submitMessage">
    <textarea placeholder="Message" v-model="message" @keypress.enter.prevent="submitMessage"></textarea>
    <div>{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from "@/composables/GetUser"
import { timeStamp } from "@/firebase/config"
import useCollection from "@/composables/UseCollection";
export default {
  name: "ChatForm",
  setup() {
    const message = ref("")
    const { user } = getUser()
    const {error, addMessage} = useCollection('messages')
    const submitMessage = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: timeStamp()
      }
      await addMessage(chat)
      if (!error.value)
        message.value = ""
    }

    return {message, submitMessage, error}
  }
}
</script>
