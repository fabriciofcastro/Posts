import { format } from 'date-fns/fp'
import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'
import style from './Post.module.css'

export const Posts = ({author, publishedAt}) => {

 
  
  return (
    <div className={style.post}>
    <article className={style.posts}>
      <header className={style.header}>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <strong>Web Developer</strong>
          </div>
        </div>
        
        <time title='28 de Março 2024 ' dateTime='2024-03-28 - 19:55:20'>
         
        </time>
      </header>
      <div className={style.content}>
        
      </div>

      <form className={style.commentForm}>
        <textarea placeholder='Deixe seu comentário' />
        <footer>        
          <button type='submit'>Comentar</button>
        </footer>

      </form>
      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
      
    </article>
    </div>
  )
}
