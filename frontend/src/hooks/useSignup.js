import { useNavigate } from 'react-router-dom'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();

  const signup = async (userName, email, password) => {
    
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userName, email, password })
    })

    const json = await response.json()

    if (!response.ok) {
      console.log(json.error)
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json});
      console.log(json);
      navigate('/student/home')
    }
  }

  return { signup }
}