import { useAuthenticator } from '@aws-amplify/ui-react'
import { useLocation, Navigate } from 'react-router-dom'

const RequiredAuth = ({ children }: { children: JSX.Element | null }) => {
  const location = useLocation()
  const { route } = useAuthenticator(context => [context.route])
  console.log(location)
  console.log(route)

  if (route !== 'authenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
export default RequiredAuth
