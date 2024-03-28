import style from './Sidebar.module.css'
import { PencilSimpleLine } from "@phosphor-icons/react";

export const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <img 
        className={style.cover} 
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" 
        alt="Imagem de dois monitores com IDE VSCode para programar" />
      <div className={style.profile}>
        <img src="https://github.com/fabriciofcastro.png" alt="Avatar" />
        <strong>Fabrício Castro</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
        <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
