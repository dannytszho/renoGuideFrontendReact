import { Outlet } from 'react-router-dom'
import UserIcon from '../svg/UserIcon'

const NavBar = () => {
  return (
    <>
      <div className="flex justify-end mt-6 mr-5 font-iceland">
        <div className="mt-0.5 mr-1">
          <UserIcon />
        </div>
        <h1>User</h1>
        <button className="w-[68px] h-[30px] ml-4 border rounded-lg font-semibold bg-zinc-200 hover:cursor-pointer hover:scale-[103%]">
          Log Out
        </button>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar
