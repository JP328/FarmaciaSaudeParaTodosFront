/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../service/Service"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
      try {
          await buscar(`/categorias/${id}`, setCategoria)
      } catch (error: any) {
        alert('Ocorreu um erro!')
      }
  }

  useEffect(() => {
    if (id !== undefined) {
        buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    setIsLoading(true)

    try {
      await deletar(`/categorias/${id}`)
      alert('Categoria apagado com sucesso')
    } catch (error) {
        alert('Erro ao apagar o categoria')
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className='h-screen w-full mx-auto bg-blueBackground bg-cover bg-no-repeat'>
      <div className="h-full w-full bg-red-400/40 flex flex-col justify-center items-center">
        <h1 className='text-4xl font-semibold text-center my-4'>Deletar categoria</h1>

        <p className='text-center text-lg font-semibold mb-4'>
            Você tem certeza de que deseja apagar o categoria a seguir?
        </p>

        <div className='w-1/3 border flex flex-col rounded-2xl overflow-hidden justify-between'>
          <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
              categoria
          </header>
          <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>

          <div className="flex">
            <button
                className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                onClick={retornar}>
                Não
            </button>

            <button
                className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 
                    flex items-center justify-center'
                onClick={deletarCategoria}>

                {isLoading ?
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                    <span>Sim</span>
                }
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default DeletarCategoria