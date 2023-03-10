import { useState } from 'react'
import { onLogin } from '../api/auth'
import { useDispatch } from 'react-redux'
import { authenticateUser } from '../redux/slices/authSlice'

const Login = () => {
  const [values, setValues] = useState({
    id: 0,
    password: '',
  })
  const [error, setError] = useState(false) 

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await onLogin(values)
      dispatch(authenticateUser())

      localStorage.setItem('isAuth', 'true')
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
    }
  }

  return (
   
      <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
        <h1>Login</h1>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            enter Id
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='number'
            className='form-control'
            id='id'
            name='id'
            value={values.id}
            placeholder='enter Id'
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='password'
            value={values.password}
            className='form-control'
            id='password'
            name='password'
            placeholder='passwod'
            required
          />
        </div>

        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
  
  )
}

export default Login
