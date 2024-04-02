import {
  format,
  formatDistanceToNow
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../avatar/Avatar'
import Comment  from '../comment/Comment'
import style from './Post.module.css'
import { useState } from 'react'

export const Posts = ( {
    author,
    publishedAt,
    content
  } ) => {

    /* ------------------------ States ----------------------- */

  const [comments, setComments]  = useState(() => [
    'Post muito bacana, hein?'
  ])  
  const [newCommentText, setNewCommentText] = useState(() => "")

  /* ----------------------- Variáveis -------------------------------- */

  const publishedDateFormatted = format( publishedAt, " d 'de'  LLLL 'às'   HHmm'h' ", {
    locale: ptBR
  } )

  const publishedDateRelativeToNow = formatDistanceToNow( publishedAt, {
    locale: ptBR,
    addSuffix: true,
  } )


  /* -------------------   Functions ------------------ */

  function handleCreateNewComment(e) {
    e.preventDefault()

    setComments([...comments, newCommentText] )

    setNewCommentText(() => "")
    
  }

  function handleNewCommentChange(e) {
    setNewCommentText(() => e.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter( comment => {
      return comment != commentToDelete
    } )

    setComments( () => commentsWithoutDeleteOne )
  }

  const isNewCommentEmpty =  newCommentText.length === 0

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
        
        < time title = {
          publishedDateFormatted
        }
        dateTime = {
          publishedAt.toISOString()
        } > {
          publishedDateRelativeToNow
        }
        </time>
      </header>

      <div className={style.content}>
        {content.map( line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.link}</a></p>
          } 
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <textarea 
          name='comment'
          value={newCommentText}
          placeholder='Deixe seu comentário'
          onChange = {handleNewCommentChange}
          required
        />

        <footer>        
          <button  
              disabled={ isNewCommentEmpty }
              type='submit'> Comentar 
          </button>
        </footer>

      </form>
      <div className={style.commentList}>
        {
          comments.map(comment => {
           return <Comment key={comment} content={comment} deleteComment={deleteComment} />
          })
        }
      </div>
    </article>
    </div>
  )
}
