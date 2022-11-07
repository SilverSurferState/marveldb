import React, {createContext, useContext, useMemo, useState, useCallback} from 'react';
import {collection, updateDoc, deleteDoc, query, getDocs, orderBy} from 'firebase/firestore';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {projectFirestore} from '../firebase/config';
const MovieContext = createContext();

const movieConverter = {
    toFirestore: (movie) => {},
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};


export function MovieProvider(props) {
    const [movieSelected, setMovieSelected] = useState();
    const collectionRef = useMemo(() =>collection(projectFirestore, "Movies").withConverter(movieConverter), []);
    const [movies, loading, error] = useCollectionData(collectionRef);

    const editMovie = useCallback((movie) => {
            setMovieSelected(movie)
        }, [])

    const deleteMovie = useCallback(async (movie) => {
            await deleteDoc(movie.ref);
            }, [])

    const editMovieSave = useCallback(async (movie) =>
            {
                await updateDoc(movie.ref, movie);
                console.log("updated");
                return true;
            },[])


    const api = useMemo(() => ({
        movies, deleteMovie, editMovie, editMovieSave
    }), [movies, deleteMovie, editMovie, editMovieSave]);


 
    return <MovieContext.Provider value={api}>
        {props.children} 
    </MovieContext.Provider>
} 
 
export const useMovieContext = () => useContext(MovieContext);