import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HikingTrailsPage from './Components/HikingTrailsPage'
import HomePage from './Components/HomePage'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import UserIcon from './svg/UserIcon'

function App({ signOut, user }: any) {
  console.log(user)
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

      <div>
        <header>
          <HashRouter>
            <Routes>
              <Route path="/hikingtrails" element={<HikingTrailsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </HashRouter>
        </header>
        <button onClick={signOut}>Welcome, {user.username}!</button>
      </div>
    </>
  )
}

export default withAuthenticator(App)
