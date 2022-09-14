import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HikingTrailsPage from './Components/HikingTrailsPage'
import HomePage from './Components/HomePage'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import NavBar from './Components/NavBar'

function App({ signOut, user }: any) {
  return (
    <>
      <NavBar signOut={signOut} user={user} />

      <div>
        <header>
          <HashRouter>
            <Routes>
              <Route path="/hikingtrails" element={<HikingTrailsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </HashRouter>
        </header>
      </div>
    </>
  )
}

export default withAuthenticator(App)
