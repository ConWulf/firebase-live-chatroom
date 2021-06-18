<template>
  <div v-if="!user" class="w-11/12 px-4 py-2 bg-gray-50 mx-auto rounded-xl text-center shadow-md">
    <Login @login="enterChatroom"/>
  </div>
</template>

<script>
import Login from "@/components/Login"
import { useRouter } from 'vue-router'
import getUser from "@/composables/GetUser";
export default {
  name: "Welcome",
  components: {
    Login
  },
  setup() {
    const router = useRouter()
    const {user} = getUser()
    const enterChatroom = () => {
      router.push({name: 'chatroom'})
    }
    return { enterChatroom, user }
  }
}
</script>