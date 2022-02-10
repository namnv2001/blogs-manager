import styles from './style.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={styles['nav-cover']}>
      <div className={styles['text-cover']}>
        <Link to='/' className={styles['app-name']}>
          Blog Reader
        </Link>
        <div className={styles['content']}>
          <Link to='/' className={styles['home']}>
            Home
          </Link>
          <div className={styles['separator']}></div>
          <Link to='/new-blog' className={styles['new-blog']}>
            New Blog
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
