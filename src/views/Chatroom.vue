<template>
  <div>
    <ChatroomNav/>
    <ChatWindow/>
    <ChatForm/>
  </div>
</template>

<script>
import ChatroomNav from "@/components/ChatroomNav";
import ChatForm from "@/components/ChatForm";
import ChatWindow from "@/components/ChatWindow";
export default {
  name: "Chatroom",
  components: {
    ChatWindow,
    ChatForm,
    ChatroomNav
  }
}
</script>
