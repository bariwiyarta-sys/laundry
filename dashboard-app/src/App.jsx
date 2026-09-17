import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import KasirPage from './pages/KasirPage'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen">
        <Sidebar />
        <div className="pl-72">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/kasir" element={<KasirPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
