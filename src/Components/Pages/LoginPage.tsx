import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PreviousButton } from '../Utils/Button'
import Footer from '../Utils/Footer'

const formFields = {
  signUp: {
    email: {
      order: 2,
      placeholder: 'Email',
      isRequired: true,
    },
    given_name: {
      order: 3,
      placeholder: 'Given name',
      isRequired: true,
    },
    family_name: {
      order: 4,
      placeholder: 'Family name',
      isRequired: true,
    },
    password: {
      order: 5,
    },
    confirm_password: {
      order: 6,
    },
  },
}

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
        <Authenticator
          formFields={formFields}
          socialProviders={['google']}
        ></Authenticator>
      </div>
      <br />
      <Footer />
      <br />
    </>
  )
}

export default LoginPage
