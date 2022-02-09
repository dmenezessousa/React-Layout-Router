import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import SignIn from './components/Pages/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/sign-in" element={<SignIn/>}/>
         </Routes>
      
      </BrowserRouter>
          
          
    </div>
  );
}

export default App;
