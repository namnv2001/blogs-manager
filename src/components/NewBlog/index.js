import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import styles from './style.module.css'

function NewBlog() {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    fetch('http://localhost:8080/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then(() => {
        alert('Blog submitted')
        history.push('/')
      })
      .catch((err) => {
        alert(`An error has occurred: ${err}`)
      })
  }
  return (
    <div className={styles['cover']}>
      <div className={styles['title']}>Write your own blog here</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <input
          placeholder='Title of the blog'
          autoComplete='off'
          {...register('title', { required: true, maxLength: 50 })}
        />
        {errors.title?.type === 'required' && (
          <span className={styles['error']}>Title is required</span>
        )}
        <input
          placeholder='Author name'
          autoComplete='off'
          {...register('author', { required: true, maxLength: 30 })}
        />
        {errors.author?.type === 'required' && (
          <span className={styles['error']}>Author name is required</span>
        )}
        <textarea
          rows='1'
          placeholder='Sort introduction'
          {...register('content', { required: true, maxLength: 100 })}
        />
        {errors.content?.type === 'required' && (
          <span className={styles['error']}>Content is required</span>
        )}
        <textarea
          rows='1'
          placeholder='Show everyone your opinions'
          {...register('body', { required: true, maxLength: 2000 })}
        />
        {errors.body?.type === 'required' && (
          <span className={styles['error']}>Body is required</span>
        )}
        <input type='submit' value={'Post'} className={styles['submit']} />
      </form>
    </div>
  )
}

export default NewBlog
