
import style from './Comment.module.css'
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import {Avatar} from '../avatar/Avatar'

const Comment = ({content, deleteComment}) => {

  function handleDeleteComment() {
   
     deleteComment(content)
  }

 

  return (

    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/fabriciofcastro.png" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header className={style.header}>
            <div className={style.authorAndTime}>
              <time title='29 de Março 2024 01:05'>
                Cerca de 1h atrás
              </time>

              
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />  
            Aplaudir <span>20</span>
          </button>
        
        </footer>
      </div>
    </div>
)
}

export default Comment