import styles from './style.module.css'

import BlogList from '../BlogList'
import useFetch from './../../hooks/useFetch'

function Home() {
  const { data: blogs } = useFetch('http://localhost:8080/blogs')

  return (
    <div className={styles['home']}>
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  )
}

export default Home
