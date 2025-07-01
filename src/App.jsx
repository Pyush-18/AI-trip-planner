
import Header from './components/custom/Header'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className=''>
      <Header />
      <main className='mt-4'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App