import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import styled from "styled-components";
import {Navigation} from "./components/Navigation";
import {ActorSection} from "./sections/ActorSection";
import {MovieSection} from "./sections/MovieSection";
import {ComicSection} from "./sections/ComicSection";
import {MovieProvider} from "./context/MovieContext";
import {ActorProvider} from "./context/ActorContext";
import {ComicProvider} from "./context/ComicContext";
import useLocalStorage from "./hooks/useLocalStorage";
import {Button} from "react-bootstrap";


function ProvidedApp() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const Wrapper = styled.div`
      font-family: "Roboto";
      padding: 40px;
      background: ${(props) => (props.theme === "light" ? "white" : "#1a1433")};
      height: 100vh;
    `;


  return <>
  <Wrapper theme={theme}>
    <Navigation links={["Movies", "Actors", "Comics"]}></Navigation>
    <Button className="btn-circle m-5"onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>Toggle theme</Button>
    <MovieSection id={"Movies"}></MovieSection>
    <ActorSection id={"Actors"}></ActorSection>
    <ComicSection id={"Comics"}></ComicSection>
    </Wrapper>
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
