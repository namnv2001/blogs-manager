import { useState } from 'react'
import styles from './style.module.css'

function NewBlog() {
  function handleSubmit(e) {
    e.preventDefault()
    const data = { title, author, content, body }
    fetch('http://localhost:8080/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    }) // Blog added when fetch ended
      .then(() => {
        setTitle('')
        setAuthor('')
        setContent('')
        setBody('')
        alert('Blog submitted')
      })
      .catch(() => {
        alert('An error has occurred, try reloading the page!')
      })
  }
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className={styles['cover']}>
      <div className={styles['title']}>Write your own blog here</div>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <input
          placeholder='Title of the blog'
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder='Author name'
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <textarea
          rows='1'
          placeholder='Sort introduction'
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <textarea
          rows='1'
          placeholder='Show everyone your opinions'
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className={styles['submit']}>Submit</button>
      </form>
    </div>
  )
}

export default NewBlog
