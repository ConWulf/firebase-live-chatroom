import {ref} from "vue"
import {projectFirestore} from "@/firebase/config"

const deleteItem = async (collection, id) => {
    const error = ref(null)

    try {
        await projectFirestore
            .collection(collection)
            .doc(id)
            .delete()
    } catch {
        error.value = "could not delete item."
    }
    return { error }
}

export default deleteItem