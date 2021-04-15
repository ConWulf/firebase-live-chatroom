<template>
  <div v-if="user" class="w-5/6 px-4 py-2 bg-gray-50 mx-auto border-b rounded-t-xl text-center shadow-md flex">
    <div class="flex-grow text-left">
      <p>{{ user.displayName }}</p>
      <p>{{ user.email }}</p>
    </div>
    <button @click="logoutUser">Logout</button>
  </div>
</template>

<script>
import useLogout from '@/composables/UseLogout'
import getUser from "@/composables/GetUser";
import {useRouter} from "vue-router";
export default {
  name: "ChatroomNav",
  setup() {
    const { logout, error } = useLogout()
    const {user} = getUser()
    const router = useRouter()
    const logoutUser = async() => {
      await logout()
      if(!error.value) {
        await router.push('/')
      }
    }

    return { logoutUser, error, user }
  }
}
</script>

<style scoped>

</style>