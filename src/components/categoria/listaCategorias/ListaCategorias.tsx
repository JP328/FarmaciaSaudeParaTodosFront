/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import Categoria from "../../../models/Categoria";
import { InfinitySpin } from "react-loader-spinner";
import CardCategoria from "../cardCategoria/CardCategoria";

function ListaCategorias() {
  
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarcategorias() {
      try {
          await buscar('/categoria', setCategorias)
      } catch (error: any) {
        alert('Ocorreu um erro!')
      }
  }

  useEffect(() => {
      buscarcategorias()
  }, [categorias.length])
  
  return (
    <>
      {categorias.length === 0 && (
        <InfinitySpin
            color="#1B4965"
            width="200"
        />
      )}

      <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {categorias.map((categoria) => (
                      <>
                          <CardCategoria key={categoria.id} categoria={categoria} />
                      </>
                  ))}

              </div>
          </div>
      </div>
    </>
  )
}

export default ListaCategorias;