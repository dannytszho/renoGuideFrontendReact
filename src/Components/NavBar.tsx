import UserIcon from '../svg/UserIcon'

const NavBar = ({ signOut, user }: any) => {
  return (
    <>
      <div className="flex justify-end mt-6 mr-5 font-iceland">
        <div className="mt-0.5 mr-1">
          <UserIcon />
        </div>
        {user.attributes.email}
        <button
          className="w-[68px] h-[30px] ml-4 border rounded-lg font-semibold bg-zinc-200 hover:cursor-pointer hover:scale-[103%]"
          onClick={signOut}
        >
          Log Out
        </button>
      </div>
    </>
  )
}

export default NavBar
