import {useState} from 'react';
import {projectStorage} from '../firebase/config';
import {ref, getDownloadURL} from "firebase/storage";



export function useStorage(title){
    const [url, setUrl] = useState(null);

    const imgRef = ref(projectStorage, 'gs://marveldb-1bfa3.appspot.com/'+title);
    getDownloadURL(imgRef).then((url) => {
        setUrl(url);
    })
    return url;
}

