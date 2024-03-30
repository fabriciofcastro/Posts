import { Header } from './components/Header/Header'
import './global.css'
import style from './App.module.css'
import { Posts } from './components/Posts/Posts'
import { Sidebar } from './components/Sidebar/Sidebar'

const posts = [ 
  {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/fabriciofcastro.png',
    name: 'Fabricio Castro',
    role: 'Developer Full'
  },
  content: [ {
      type: 'paragraph ',
      content: 'Fala galera.'
    },
    {
      type: 'paragraph',
      content: 'Acabei de subir mais um projeto no meu portfólio'
    },
    {
      type: 'link',
      content: 'fabriciofcastro.developer/romeu '
    },
  ],
  publishedAt: new Date('2024-03-29 20:00:00')
}, 
{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/LauraRaellen.png',
    name: 'Laura Castro',
    role: 'Developer Full'
  },
  content: [ {
      type: 'paragraph ',
      content: 'Fala galera.'
    },
    {
      type: 'paragraph',
      content: 'Acabei de subir mais um projeto no meu portfólio'
    },
    {
      type: 'link',
      content: 'fabriciofcastro.developer/romeu '
    },
  ],
  pubblishedAt: new Date('2024-03-30 21:00:00')
}
]

function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          
          {
            posts.map(post => {
              return (
                <div key={post.id}>
                  <Posts
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}  
                  />
                </div>
              )
            } )
          }

        </main>
      </div>
    </>
  )
}

export default App
