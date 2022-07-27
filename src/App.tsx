import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HikingTrailsPage from './Components/HikingTrailsPage'
import HomePage from './Components/HomePage'

function App() {
  return (
    <>
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

export default App
