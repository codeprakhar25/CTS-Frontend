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

// For getting new refresh token
export async function onRefresh() {
  return await axios.get('http://localhost:8000/api/v1/admin-view/refresh')
}

export async function onLogout() {
  return await axios.delete('http://localhost:8000/api/v1/admin-view/refresh')
}