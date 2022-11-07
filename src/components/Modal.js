import {useForm} from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import {doc, addDoc, collection} from 'firebase/firestore';
import {projectStorage} from '../firebase/config';
import {projectFirestore} from '../firebase/config';

export function MovieModal(props) {
    const {show, setShow, title, movie} = props;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    async function onSubmit(data){
        const imgTitle = data.title.replace(/\s+/g, '').replace(':','_').toLowerCase()+'.jpg'
        const storageRef = ref(projectStorage, imgTitle);
        uploadBytes(storageRef, data.cover[0]).then((snapshot) => {
        console.log('uploaded')})
        await addDoc(collection(projectFirestore, 'Movies'), {
            title: data.title,
            releaseDate: data.releaseDate,
            cover: 'gs://marveldb-1bfa3.appspot.com/'+imgTitle,
            seen: data.seen,
            score: data.score
        });
        reset({...data});
        setShow(false);
        }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="col-6">
                 <label>Title:<input {...register("title", { required: true })} /></label>
                 {errors.title && <span>This field is required</span>}
                 <label>Release Date:<input type="number" min='2000'{...register("releaseDate", { required: true })} /></label>
                 {errors.releaseDate && <span>This field is required</span>}
                 <label>Seen:<input type='checkbox' {...register("seen")} /></label>
                 <label>Score:<input type='number' min='0' max='10'  {...register("score")} /></label>
                 <label>Add Poster:<input type='file' {...register("cover")}/></label>
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

export function ActorModal(props) {
    const {show, setShow, title} = props;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    async function onSubmit(data){
        const imgTitle = data.name.replace(/\s+/g, '').replace(':','_').toLowerCase()+'.jpg'
        const storageRef = ref(projectStorage, imgTitle);
        uploadBytes(storageRef, data.picture[0]).then((snapshot) => {
        console.log('uploaded')})
        await addDoc(collection(projectFirestore, 'Actors'), {
            name: data.name,
            alias: data.alias,
            picture: 'gs://marveldb-1bfa3.appspot.com/'+imgTitle,
            birthday: data.birthday
        });
        setShow(false);
        reset({...data});
        }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="col-6">
                 <label>Name:<input {...register("name", { required: true })} /></label>
                 {errors.name && <span>This field is required</span>}
                 <label>Alias:<input {...register("alias", { required: true })} /></label>
                 {errors.alias && <span>This field is required</span>}
                 <label>Birthday:<input type='date'{...register("birthday")} /></label>
                 <label>Add Picture:<input type='file' {...register("picture")}/></label>
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


export function ComicModal(props) {
    const {show, setShow, title} = props;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    async function onSubmit(data){
        const imgTitle = data.title.replace(/\s+/g, '').replace(':','_').toLowerCase()+'.jpg'
        const storageRef = ref(projectStorage, imgTitle);
        uploadBytes(storageRef, data.cover[0]).then((snapshot) => {
        console.log('uploaded')})
        await addDoc(collection(projectFirestore, 'Comics'), {
            title: data.title,
            writer: data.writer,
            cover: 'gs://marveldb-1bfa3.appspot.com/'+imgTitle,
            read: data.read,
            score: data.score,
            description: data.description
        });
        setShow(false);
        reset({...data});
        }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="col-6">
                 <label>Title:<input {...register("title", { required: true })} /></label>
                 {errors.title && <span>This field is required</span>}
                 <label>Author:<input {...register("writer", { required: true })} /></label>
                 {errors.releaseDate && <span>This field is required</span>}
                 <label>Score:<input type='number' min='0' max='10'  {...register("score")} /></label>
                 <label>Read:<input type='checkbox' {...register("read")} /></label>
                 <label>Add Album Cover:<input type='file' {...register("cover")}/></label>
                 <label>Description:<textarea {...register("description")}/></label>
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