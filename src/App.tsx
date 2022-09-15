import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HikingTrailsPage from './Components/HikingTrailsPage'
import HomePage from './Components/HomePage'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import NavBar from './Components/NavBar'
import HikingTrailsPageGQL from './Components/HikingTrailsPageGQL'
import Login from './Components/Login'
import RequiredAuth from './Components/RequiredAuth'

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
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </HashRouter>
      </Authenticator.Provider>
    </>
  )
}

export default App
