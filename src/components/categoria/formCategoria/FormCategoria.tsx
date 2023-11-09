/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { atualizar, buscar, cadastrar } from "../../../service/Service";

import Categoria from "../../../models/Categoria";

function FormCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
    })
  }

  async function gerarNovocategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
        try {
            await atualizar(`/categorias`, categoria, setCategoria)
            alert('Categoria atualizado com sucesso')
        } catch (error: any) {
          alert('Ocorreu um erro!')
        }

    } else {
        try {
          await cadastrar(`/categorias`, categoria, setCategoria)

          alert('Categoria cadastrado com sucesso')

        } catch (error: any) {
          alert('O token expirou, favor logar novamente')
        }
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
      navigate("/categorias")
  }
  
  return (
    <div className="h-screen bg-redBackground bg-cover bg-no-repeat flex flex-col items-center justify-center text-white font-bold">
        <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastrar categoria' : 'Editar categoria'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovocategoria}>
          <div className="flex flex-col gap-2">
              <label htmlFor="nome">Descrição da categoria</label>
              <input
                  type="text"
                  placeholder="Descreva aqui sua categoria"
                  name='nome'
                  className="border-2 border-slate-700 rounded p-2 text-slate-900"
                  value={categoria.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
          </div>
          <button
              className="rounded text-slate-100 bg-indigo-400 
              hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center" type="submit">

              {isLoading ?
                  <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                  /> :
                  <span>Confirmar</span>
              }
          </button>
        </form>
    </div>
  )
}

export default FormCategoria;