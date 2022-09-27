import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PreviousButton } from '../Utils/Button'

const LoginPage = () => {
  const { route } = useAuthenticator(context => [context.route])
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true })
    }
  }, [route, navigate, from])

  return (
    <>
      <PreviousButton />
      <div className="auth-wrapper mt-28">
        <Authenticator socialProviders={['google']}></Authenticator>
      </div>
    </>
  )
}
export default LoginPage
