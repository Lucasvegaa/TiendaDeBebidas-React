import {ItemListContainer} from "./components/container/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="hola Coder"/>
    </>
  );
}

export default App;
