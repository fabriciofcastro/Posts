import { Header } from './components/Header/Header'
import './global.css'
import style from './App.module.css'
import { Posts } from './components/Posts/Posts'
import { Sidebar } from './components/Sidebar/Sidebar'


function App() {
 

  return (
    <>
      <Header />
      <div className={style.wapper}>
        <Sidebar />
        <main>
          <Posts content="kjlhiasdhicfashifcdpsa" author="Fabricio" />
          <Posts content="dddsffgtrrrreeeeeeeeeeeee" author="Laura" />
        </main>
      </div>
    </>
  )
}

export default App
