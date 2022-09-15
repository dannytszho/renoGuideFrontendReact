import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HikingTrailsPage from './Components/HikingTrailsPage'
import HomePage from './Components/HomePage'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import NavBar from './Components/NavBar'
import HikingTrailsPageGQL from './Components/HikingTrailsPageGQL'

function App() {
  return (
    <>
      <div>
        <header>
          <HashRouter>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="/hikingtrails" element={<HikingTrailsPage />} />
              <Route
                path="/hikingtrailsgql"
                element={<HikingTrailsPageGQL />}
              />
            </Routes>
          </HashRouter>
        </header>
      </div>
    </>
  )
}

export default App
