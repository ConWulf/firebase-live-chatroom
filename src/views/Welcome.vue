<template>
  <div class="w-5/6 px-4 py-2 bg-gray-50 mx-auto rounded-xl text-center shadow-md">
    <Login @login="enterChatroom"/>
  </div>
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