import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './routes/home/Home'
import Single from "./routes/single/Single"
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/singlePage/:item' element={<Single />}/>
    </Routes>
    </>
  )
}

export default App
