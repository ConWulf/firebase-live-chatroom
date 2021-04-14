<template>
  <div v-if="user">
    <p>{{ user.displayName }}</p>
    <p>{{ user.email }}</p>
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