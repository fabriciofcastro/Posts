import style from './Post.module.css'

export const Posts = () => {
  return (
    <div className={style.post}>
    <article className={style.posts}>
      <header>
        <div className={style.author}>
          <img className={style.avatar} src="https://github.com/fabriciofcastro.png" alt="" />
          <div className={style.authorInfo}>
            <strong>Fabrício Castro</strong>
            <strong>Web Developer</strong>
          </div>
        </div>
        
        <time title='28 de Março 2024 ' dateTime='2024-03-28 - 19:55:20'></time>
      </header>
      <div className={style.content}>
        <p>
          <p>Fala galera. </p>

          <p>Acabei de subir mais um projeto no meu portfólio 
          </p>
          <p>
            <a href="#">fabriciofcastro.developer/romeu
            </a>
          </p>
          <p>
            <a href="#"> #novoprojeto #schools Devedojo
            </a>
          </p>
        </p>
      </div>
    </article>
    </div>
  )
}
