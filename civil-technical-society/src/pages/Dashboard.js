import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProtectedInfo, onLogout } from '../api/auth'
import Layout from '../components/layout'
import { unauthenticateUser } from '../redux/slices/authSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  const logout = async () => {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div>
      <Layout>
        <h1>Dashboard</h1>
        <button onClick={() => logout()} className='btn btn-primary'>
          Logout
        </button>
      </Layout>
    </div>
  )
}

export default Dashboard
