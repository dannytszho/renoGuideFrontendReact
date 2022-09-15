import { useAuthenticator } from '@aws-amplify/ui-react'
import userEvent from '@testing-library/user-event'
import { Outlet, useNavigate } from 'react-router-dom'
import UserIcon from '../svg/UserIcon'

const NavBar = () => {
  const { route, signOut, user } = useAuthenticator(context => [
    context.route,
    context.signOut,
  ])
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
                onClick={() => navigate('/')}
              >
                Home
              </button>
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
            <h1>{user.attributes?.email}</h1>
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
