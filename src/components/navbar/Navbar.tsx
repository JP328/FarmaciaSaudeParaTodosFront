import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-between p-4 bg-red-500 text-white text-lg font-semibold fixed top-0 left-0 z-50">
      <p>FarmáciaLogo</p>
      <nav className="w-1/3 flex justify-around">
        <Link to='/' >Produtos</Link>
        <Link to='/categorias' >Categorias</Link>
        <Link to='/cadastroCategoria' >Cadastrar Categoria</Link>
      </nav>
    </div>
  )
}

export default Navbar;