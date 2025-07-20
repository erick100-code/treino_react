import { useEffect, useState } from 'react'
import './App.css'
// import { v4 } from 'uuid'
import Barradepesquisa from './components/pesquisa'
import Cx from './components/caixas'

// lembra erick de ver o video do diego do states e o hells das configurações do vscode
function App() {
  const [users, alterarUsers] = useState([])
  const [inpvalor, inpValorMudar] = useState(2)
  const [filters, mudaFilters] = useState([])
  
  inpValorMudar(inpvalor + 1)
  inpValorMudar(inpvalor + 1)
  inpValorMudar(inpvalor + 1)
  inpValorMudar(inpvalor + 1)
  inpValorMudar(inpvalor + 1)
  inpValorMudar(inpvalor + 1)

  console.log('renderizou')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => alterarUsers(data))
  },[])
  
  // useEffect(() => {
  //   if (inpvalor.length > 0) {
  //     mudaFilters(users.filter(indice => indice.name.includes(inpvalor)))
  //   }
  // },[inpvalor])

  function inpValue(value) {
    inpValorMudar(value)    
  }

  return (
    <main className='bg-gray-950 w-screen h-screen flex justify-center items-center'>
      <section className='w-[500px] h-[500px] p-[30px]'>
        <Barradepesquisa inpvalue={inpValue} />
        <Cx usuarios={users} inpvalue={inpvalor} filtrados={filters} />
      </section>
    </main>
  )
}

export default App
