import { useState } from 'react'
import './App.css'
// import { v4 } from 'uuid'
import Barradepesquisa from './components/pesquisa'
import Cx from './components/caixas'

// lembra erick de ver o video do diego do states.

function App() {
  const [users, alterarUsers] = useState([
    {
      name: "matheus",
      src: "src/image/perfil1.jpg",
    },
    {
      name: "joão",
      src: "src/image/perfil2.jpg",
    },
    {
      name: "samuel",
      src: "src/image/perfil3.jpg",
    },
    {
      name: "josué",
      src: "src/image/perfil4.jpg",
    },
    {
      name: "malaquias",
      src: "src/image/perfil5.jpg",
    },
    {
      name: "ester",
      src: "src/image/perfil6.jpg",
    },
    {
      name: "isaias",
      src: "src/image/perfil7.jpg",
    },
    {
      name: "zacarias",
      src: "src/image/perfil8.jpg",
    },
    {
      name: "castiel",
      src: "src/image/perfil9.jpg",
    },
    {
      name: "oseias",
      src: "src/image/perfil10.jpg",
    }
  ])
  const [inpvalor, inpValorMudar] = useState("")
 
  console.log('renderizou')
  
  function inpValue(value) {
    inpValorMudar(value)    
  }

  let filters = []

  if (inpvalor.length > 0) {
    filters = users.filter(indice => indice.name.includes(inpvalor))
  }

/* useEffect(() => {
    if (inpvalor.length > 0) {
      mudaFilters(users.filter(indice => indice.name.includes(inpvalor)))// aqui estou usando estado derivado!

      o que é um ESTADO DERIVADO? R: é um states que seu valor é calculado apartir de um estado pai.

      o problema dos estados derivados é que: se o valor do states pai não for alterado, o estado derivado filho não tem seu valor calculado, e se estivermos utilizando o estado derivado em algum outro lugar seu valor nunca vai mudar.
    }
  },[inpvalor])
  */
  return (
    <main className='bg-gray-950 max-w-screen min-h-[100vh] flex justify-center items-start p-[30px]'>
      <section className='w-[470px] h-[auto]  space-y-15'>
        <Barradepesquisa inpvalue={inpValue} />
        <Cx usuarios={users} inpvalue={inpvalor} filtrados={filters} />
      </section>
    </main>
  )
}

export default App
