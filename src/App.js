import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navigation} from "./components/Navigation";
import {ActorSection} from "./sections/ActorSection";
import {MovieSection} from "./sections/MovieSection";
import {ComicSection} from "./sections/ComicSection";
import {firestoreDB} from "./firebase/config";
import {collection, query, orderBy} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';


const moviesConverter =  {
  toFirestore : function (dataInApp) {
    return {
      name: dataInApp.name,
      age: Number(dataInApp.age),
      city: dataInApp.city
    }
  },
  fromFirestore : function(snapshot, options) {
    const data = snapshot.data(options);
    return {...data, id: snapshot.id, ref: snapshot.ref};
  }
}



function App() {
  return <>
    <Navigation links={["Movies", "Actors", "Comics"]}></Navigation>
    <MovieSection id={"Movies"}></MovieSection>
    {/*<ActorSection id={"Actors"}></ActorSection>*/}
    {/*<ComicSection id={"Comics"}></ComicSection>*/}
  </>
}

export default App;
