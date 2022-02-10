import { Link } from 'react-router-dom'

import styles from './style.module.css'

function BlogList({ blogs }) {
  return (
    <div className={styles['cover']}>
      <div className={styles['title']}>Read the blogs</div>
      {blogs.map((blog) => (
        <Link key={blog.id} to={'/blog-detail/' + blog.id}>
          <div className={styles['blog']}>
            <div className={styles['top']}>
              <div className={styles['blog-title']}>{blog.data.title}</div>
              <div className={styles['author']}>{blog.data.author}</div>
            </div>
            <div className={styles['content']}>{blog.data.content}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogList
