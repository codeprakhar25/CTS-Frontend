import { computeHeadingLevel } from '@testing-library/react'
import { useState } from 'react'
import { onRegistration } from '../api/auth'
import Layout from '../components/layout'

const Register = () => {
  const [values, setValues] = useState({
    id: 0,
    password: '',
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
console.log(values)
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const {data} = await onRegistration(values)
      // console.log(response)
      setError('')
      setSuccess(data.message)
      setValues({ id: '', password: '' })
    } catch (error) {
      setError(error.response.data.errors[0].msg)
      setSuccess('')
    }
  }

  return (
    <Layout>
      <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
        <h1>Register</h1>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Enter Id
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='number'
            className='form-control'
            id='id'
            name='id'
            value={values.id}
            placeholder='enter id'
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
        <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default Register
