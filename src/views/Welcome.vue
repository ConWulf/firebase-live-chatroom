<template>
  <div class="w-5/6 px-4 py-2 mt-6 bg-gray-50 mx-auto rounded-xl text-center shadow-md">
    <h1 class="text-3xl text-gray-800">welcome</h1>
  </div>
  <Login @login="enterChatroom"/>
</template>

<script>
import Login from "@/components/Login";
import { useRouter } from 'vue-router'
export default {
  name: "Welcome",
  components: {
    Login
  },
  setup() {
    const router = useRouter()

    const enterChatroom = () => {
      router.push({name: 'chatroom'})
    }
    return { enterChatroom }
  }
}
</script>