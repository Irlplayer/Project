import logo from './logo.svg';
import './App.css';
import Home from './sections/Home'
import LogoutPage from './sections/Account_page/LogoutPage'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    
    <Routes>
      <Route exact path="/Home" element={<Home/>}/>
      <Route exact path="/" element={<LogoutPage/>}/>

    </Routes>
    </>
  )
}

export default App;
