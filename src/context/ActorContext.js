import React, {createContext, useContext, useMemo, useState, useCallback} from 'react';
import {collection, updateDoc, deleteDoc} from 'firebase/firestore';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {projectFirestore} from '../firebase/config';
const ActorContext = createContext();

const actorConverter = {
    toFirestore: (actor) => {},
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};


export function ActorProvider(props) {
    const [actorSelected, setActorSelected] = useState();
    const collectionRef = useMemo(() =>collection(projectFirestore, "Actors").withConverter(actorConverter), []);
    const [actors] = useCollectionData(collectionRef);

    const deleteActor = useCallback(async (actor) => {
            await deleteDoc(actor.ref);
            }, [])

    const editActorSave = useCallback(async (actor) =>
            {
                await updateDoc(actor.ref, actor);
                console.log("updated");
                return true;
            },[])

    const api = useMemo(() => ({
        actors, deleteActor, editActorSave
    }), [actors, deleteActor, editActorSave]);

    return <ActorContext.Provider value={api}>
        {props.children} 
    </ActorContext.Provider>
} 
 
export const useActorContext = () => useContext(ActorContext);