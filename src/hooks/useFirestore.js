import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const useFirestore = (collection, orderBy, direction) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = projectFirestore.collection(collection)
            .orderBy(orderBy, direction)
            .onSnapshot((snapshot) => {
                let docs = [];
                snapshot.forEach(doc => {
                    docs.push({...doc.data(), id: doc.id});
            });
        setDocs(docs);
    });
    return () => unsubscribe();
    }, [collection])
    return {docs};
}

export default useFirestore;