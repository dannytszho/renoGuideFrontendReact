import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HikingTrailsPage from './Components/HikingTrailsPage'
import HomePage from './Components/HomePage'

function App() {
  return (
    <>
      <div>
        <header>
          <BrowserRouter>
            <Routes>
              <Route path="/hikingtrails" element={<HikingTrailsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  )
}

export default App
