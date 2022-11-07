import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navigation} from "./components/Navigation";
import {ActorSection} from "./sections/ActorSection";
import {MovieSection} from "./sections/MovieSection";
import {ComicSection} from "./sections/ComicSection";
import {MovieProvider} from "./context/MovieContext";
import {ActorProvider} from "./context/ActorContext";
import {ComicProvider} from "./context/ComicContext";



function ProvidedApp() {
  return <>
    <Navigation links={["Movies", "Actors", "Comics"]}></Navigation>
    <MovieSection id={"Movies"}></MovieSection>
    <ActorSection id={"Actors"}></ActorSection>
    <ComicSection id={"Comics"}></ComicSection>
  </>
}

function App(){
    return (
    <MovieProvider>
        <ComicProvider>
            <ActorProvider>
                <ProvidedApp/>
            </ActorProvider>
        </ComicProvider>
    </MovieProvider>
    );
}

export default App;
