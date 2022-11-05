import {useState} from 'react';
import {projectFirestore} from '../firebase/config';
import {collection, query, where, getDocs } from "firebase/firestore";

const useFirestore = (name, order, direction) => {
    const [docs, setDocs] = useState([]);
    console.log(projectFirestore)
    async function fetchData(){
        const ref = projectFirestore.collection(name);
        const snapshot = await ref.get();
        let documents = [];
        snapshot.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents)
        console.log(documents)
    }
    return {docs};
}

export default useFirestore;