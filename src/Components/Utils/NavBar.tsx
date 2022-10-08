import { useAuthenticator } from '@aws-amplify/ui-react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import UserIcon from '../../svg/UserIcon'
import MyTrailPage from '../Pages/MyTrailPage'

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
              <button className="peer">{user.attributes?.email}</button>
              <div className="hidden peer-hover:flex hover:flex w-42 bg-white rounded-md">
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
