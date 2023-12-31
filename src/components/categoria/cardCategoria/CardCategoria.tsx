import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardcategoriasProps {
  categoria: Categoria
}

function Cardcategorias({categoria} : CardcategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-blue-500 text-white text-center font-bold text-2xl'>
                Categoria
            </header>

            <p className='p-4 text-xl bg-slate-200 h-full'>
                {categoria.nome}
            </p>

            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-indigo-800 hover:bg-indigo-500 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-600 hover:bg-red-500 w-full 
                        flex items-center justify-center py-1'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default Cardcategorias