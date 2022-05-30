import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navigation} from "./components/Navigation";
import {ACTORS_DATA, COMIC_DATA, MOVIES_DATA} from "./data/Data.js";
import {ActorSection} from "./sections/ActorSection";
import {MovieSection} from "./sections/MovieSection";
import {ComicSection} from "./sections/ComicSection";




function App() {
  return <>
    <Navigation links={["Movies", "Actors", "Comics"]}></Navigation>
    <MovieSection movies={MOVIES_DATA} id={"Movies"}></MovieSection>
    <ActorSection actors={ACTORS_DATA} id={"Actors"}></ActorSection>
    <ComicSection comics={COMIC_DATA} id={"Comics"}></ComicSection>
  </>
}

export default App;
