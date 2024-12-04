import { BrowserRouter } from 'react-router-dom';

import Bienvenida from "./components/Bienvenida"
import Header from "./components/Header"
import Table from "./routes/Route"


function App() {

  return (
    <>
      <Header />
      <div className='p-5'>
        <BrowserRouter>
          <Bienvenida />
          <Table />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
