import { useHistory, useParams } from 'react-router'
import styles from './style.module.css'
import useFetch from './../../hooks/useFetch'

function BlogDetail() {
  const { id } = useParams()
  const { data: blog } = useFetch('http://localhost:8080/blogs/' + id)
  const history = useHistory()
  function handleDelete(id) {
    fetch('http://localhost:8080/blogs/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        history.push('/')
      })
      .catch((e) => console.error(e))
  }

  return (
    <div className={styles['blog-detail']}>
      {blog && (
        <div>
          <h2 className={styles['title']}>{blog.data.title}</h2>
          <p className={styles['author']}>Written by: {blog.data.author}</p>
          <div className={styles['line']}></div>
          <p>{blog.data.body}</p>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleDelete(blog.id)
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogDetail
