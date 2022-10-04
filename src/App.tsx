import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HikingTrailsPage from './Components/Pages/HikingTrailsPage'
import HomePage from './Components/Pages/HomePage'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import NavBar from './Components/Utils/NavBar'
import HikingTrailsPageGQL from './Components/Pages/HikingTrailsPageGQL'
import LoginPage from './Components/Pages/LoginPage'
import RequiredAuth from './Components/Utils/RequiredAuth'
import { Auth } from 'aws-amplify'
import CreateTrailPage from './Components/Pages/CreateTrailPage'

function App() {
  return (
    <>
      <Authenticator.Provider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<HomePage />} />
              <Route path="/hikingtrails" element={<HikingTrailsPage />} />
              <Route
                path="/hikingtrailsgql"
                element={
                  <RequiredAuth>
                    <HikingTrailsPageGQL />
                  </RequiredAuth>
                }
              />
              <Route
                path="/createTrail"
                element={
                  <RequiredAuth>
                    <CreateTrailPage />
                  </RequiredAuth>
                }
              />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </Authenticator.Provider>
    </>
  )
}

export default App
