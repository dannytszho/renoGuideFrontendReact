import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PreviousButton } from '../Utils/Button'

const LoginPage = () => {
  const { route } = useAuthenticator(context => [context.route])
  const navigate = useNavigate()
  const location = useLocation()

  const navigatePathName = useMemo(() => {
    const state = location.state as { from: Location }

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
    <>
      <PreviousButton />
      <div className="auth-wrapper mt-28">
        <Authenticator></Authenticator>
      </div>
    </>
  )
}
export default LoginPage
