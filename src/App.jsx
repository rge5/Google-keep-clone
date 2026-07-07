import { Routes, Route } from 'react-router'
import Contacts from './views/Contacts'
import Home from './views/Home'
import Test from './views/Test'


const App = () => {

  return (
    <>
      
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Test" element={<Test/>}/>
        
      </Routes>
    </>
  )
}

export default App
