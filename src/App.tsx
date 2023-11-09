import { BrowserRouter, Routes , Route} from 'react-router-dom'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias'
import FormCategoria from './components/categoria/formCategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarCategorias/DeletarCategorias'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/categorias' element={<ListaCategorias/>}></Route>
          <Route path='/cadastroCategoria' element={<FormCategoria/>}></Route>
          <Route path='/editarCategoria/:id' element={<FormCategoria/>}></Route>
          <Route path='/deletarCategoria/:id' element={<DeletarCategoria/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
