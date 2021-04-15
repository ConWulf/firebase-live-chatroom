import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";


const useCollection = (collection) => {
    const error = ref(null)

    const addMessage = async (msg) => {
        error.value = null
        try {
            await projectFirestore.collection(collection).add(msg)
        } catch {
            error.value = 'could not post message.'
        }
    }
    return { error, addMessage }
}

export default useCollection