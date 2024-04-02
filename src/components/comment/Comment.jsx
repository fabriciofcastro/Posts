
import style from './Comment.module.css'
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import {Avatar} from '../avatar/Avatar'
import { useState } from 'react';

const Comment = ({content, deleteComment}) => {

  /* -------------------- States ------------------- */

    const [likeCount, setLikeCount] = useState(() => 0)

  /* ----------- Functions ------------------------- */
  
  function handleDeleteComment() {
   
     deleteComment(content)
  }

  function handleLikeCount() {
    setLikeCount(() => likeCount + 1)
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
          <p>
            {
              content
            }
          </p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} />  
            Aplaudir <span>{likeCount}</span>
          </button>
        
        </footer>
      </div>
    </div>
)
}

export default Comment