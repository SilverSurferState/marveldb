import React, {createContext, useContext, useMemo, useState, useCallback} from 'react';
import {collection, updateDoc, deleteDoc} from 'firebase/firestore';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {projectFirestore} from '../firebase/config';
const ComicContext = createContext();

const comicConverter = {
    toFirestore: (comic) => {},
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};


export function ComicProvider(props) {
    const collectionRef = useMemo(() =>collection(projectFirestore, "Comics").withConverter(comicConverter), []);
    const [comics, loading, error] = useCollectionData(collectionRef);

    const deleteComic = useCallback(async (comic) => {
            await deleteDoc(comic.ref);
            }, [])

    const editComicSave = useCallback(async (comic) =>
            {
                await updateDoc(comic.ref, comic);
                console.log("updated");
                return true;
            },[])




    const api = useMemo(() => ({
        comics, deleteComic, editComicSave
    }), [comics, deleteComic, editComicSave]);


 
    return <ComicContext.Provider value={api}>
        {props.children} 
    </ComicContext.Provider>
} 
 
export const useComicContext = () => useContext(ComicContext);