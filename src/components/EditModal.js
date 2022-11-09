import {useForm} from 'react-hook-form';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import {doc, addDoc, collection} from 'firebase/firestore';
import {projectStorage} from '../firebase/config';
import {projectFirestore} from '../firebase/config';
import {useMovieContext} from '../context/MovieContext';
import {useActorContext} from '../context/ActorContext';
import {useComicContext} from '../context/ComicContext';

export function EditMovieModal(props) {
    const {show, setShow, title, movie} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {editMovieSave} = useMovieContext();
    const [hasSeen, setHasSeen] = useState(movie.seen);
    async function onSubmit(data){
    const movieToSave = Object.assign(movie, data);
        editMovieSave(movieToSave);
        setShow(false);
        }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <form className="col-4">
                 <label>Title:<input defaultValue={movie && movie.title} {...register("title", { required: true })} /></label>
                 {errors.title && <span>This field is required</span>}
                 <label>Release Date:<input type="number" min='2000' max='2099' step='1' placeholder='2022' defaultValue={movie && movie.releaseDate}{...register("releaseDate", { required: true })} /></label>
                 {errors.releaseDate && <span>This field is required</span>}
                 <label>Seen:<input defaultChecked={hasSeen} onChange={() => setHasSeen(!hasSeen)} type='checkbox' {...register("seen")} /></label>
                 <label>Score:<input defaultValue={movie && movie.score} type='number' min='0' max='10' {...register("score")} /></label>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function EditActorModal(props) {
    const {show, setShow, title, actor} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {editActorSave} = useActorContext();
    async function onSubmit(data){
        const actorToSave = Object.assign(actor, data);
           editActorSave(actorToSave);
           setShow(false);
        }


    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="col-4">
                 <label>Name:<input defaultValue={actor.name && actor.name} {...register("name", { required: true })} /></label>
                 {errors.name && <span>This field is required</span>}
                 <label>Alias:<input defaultValue={actor.alias && actor.alias} {...register("alias", { required: true })} /></label>
                 {errors.alias && <span>This field is required</span>}
                 <label>Birthday:<input defaultValue={actor.birthday && actor.birthday} type='date'{...register("birthday")} /></label>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export function EditComicModal(props) {
    const {show, setShow, title} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    async function onSubmit(data){
        const imgTitle = data.title.replace(/\s+/g, '').replace(':','_').toLowerCase()+'.jpg'
        const storageRef = ref(projectStorage, imgTitle);
        uploadBytes(storageRef, data.cover[0]).then((snapshot) => {
        console.log('uploaded')})
        await addDoc(collection(projectFirestore, 'Comics'), {
            title: data.title,
            author: data.author,
            cover: 'gs://marveldb-1bfa3.appspot.com/'+imgTitle,
            read: data.read,
            score: data.score
        });
        setShow(false);
        }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="col-4">
                 <label>Title:<input {...register("title", { required: true })} /></label>
                 {errors.title && <span>This field is required</span>}
                 <label>Author:<input {...register("author", { required: true })} /></label>
                 {errors.releaseDate && <span>This field is required</span>}
                 <label>Read:<input type='checkbox' {...register("read")} /></label>
                 <label>Add Album Cover:<input type='file' {...register("cover")}/></label>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}