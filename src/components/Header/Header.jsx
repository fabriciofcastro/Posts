import style from './Header.module.css'
import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <header className={style.header}>
      <img src={Logo} alt="Logo da empresa" />
    </header>
  )
}
