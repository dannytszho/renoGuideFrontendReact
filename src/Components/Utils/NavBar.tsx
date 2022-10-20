import { useAuthenticator } from '@aws-amplify/ui-react'
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import UserIcon from '../../svg/UserIcon'
import { getJwtToken, verifyToken } from './Tokens'

const NavBar = () => {
  const { route, signOut } = useAuthenticator(context => [
    context.route,
    context.signOut,
  ])
  const [session, setSession] = useState<any>()
  const [info, setInfo] = useState<any>()

  const token = session?.getIdToken().getJwtToken()

  useEffect(() => {
    getJwtToken().then((ses: CognitoUserSession) => {
      setSession(ses)
    })
    verifyToken(token).then((tok: CognitoUserSession) => {
      setInfo(tok)
    })
    return () => {}
  }, [token])

  const navigate = useNavigate()

  const logOut = () => {
    signOut()
    navigate('/')
  }
  return (
    <>
      <nav>
        {route !== 'authenticated' ? (
          <div className="flex justify-end mt-6 mr-5 font-iceland">
            <div>
              <button
                className="w-[68px] h-[30px] ml-4 border rounded-lg font-semibold bg-zinc-200 hover:cursor-pointer hover:scale-[103%]"
                onClick={() => navigate('/login')}
              >
                Log In
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end mt-6 mr-5 font-iceland">
            <div className="mt-0.5 mr-1">
              <UserIcon />
            </div>
            <div>
              <button className="peer">
                {/* {session?.getIdToken().payload.email} */}
                {info?.given_name}
              </button>
              <div className="absolute hidden peer-hover:flex hover:flex w-42 bg-white rounded-md">
                <Link
                  to="/my-trail"
                  className="hover:bg-gray-300 hover:cursor-pointer w-full hover:rounded-md p-2"
                >
                  My trails
                </Link>
              </div>
            </div>
            <button
              className="w-[68px] h-[30px] ml-4 border rounded-lg font-semibold bg-zinc-200 hover:cursor-pointer hover:scale-[103%]"
              onClick={() => logOut()}
            >
              Log Out
            </button>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
