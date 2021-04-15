import {ref} from "vue"
import {projectFirestore} from "@/firebase/config"

const getCollection = (collection) => {
    const docs = ref(null)
    const error = ref(null)

    let  collectionRef = projectFirestore
        .collection(collection)
        .orderBy('createdAt')

    collectionRef.onSnapshot( snapshot => {
        let docBucket = []
        snapshot.docs.forEach(doc => {
            doc.data().createdAt && docBucket.push({...doc.data(), id: doc.id})
        })
        docs.value = docBucket
        error.value = null
    }, () => {
        error.value = 'could not get messages'
        docs.value = null
    })
    return { error, docs }
}

export default getCollection