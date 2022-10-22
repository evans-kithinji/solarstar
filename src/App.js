// import logo from './logo.svg';
// import './App.css';
import Homee from "./pages/home/Homee"
import Signup from "./pages/registration/Signup";
import Signin from "./pages/registration/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/">
       {/* <route index element={<Homee/>}/> */}
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Signin" element={<Signin/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
