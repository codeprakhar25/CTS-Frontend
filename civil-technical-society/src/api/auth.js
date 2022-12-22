import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(
    'http://localhost:8000/api/v1/admin-view/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('http://localhost:8000/api/v1/admin-view/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:8000/api/v1/admin-view/refresh')
}