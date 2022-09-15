import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
  const { route } = useAuthenticator(context => [context.route])
  const navigate = useNavigate()
  const location = useLocation()

  const navigatePathName = useMemo(() => {
    const state = location.state as { from: string }

    if (state && state.from) {
      return state.from
    }
    return '/'
  }, [location])

  useEffect(() => {
    if (route === 'authenticated') {
      navigate(navigatePathName, { replace: true })
    }
  }, [route, navigate, navigatePathName])
  return (
    <div className="auth-wrapper">
      <Authenticator></Authenticator>
    </div>
  )
}
export default Login
