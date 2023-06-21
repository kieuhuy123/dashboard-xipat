import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import PostManagement from './pages/post-management/PostManagement'
import Settings from './pages/settings/Settings'
import SubscriptionChart from './pages/subscription/Subscription'
import RevenueChart from './pages/revenue/Revenue'
import Sidebar from './components/sidebar/Sidebar'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />}>
            <Route path='dashboard' element={<Dashboard />}>
              <Route path='subscription' element={<SubscriptionChart />} />
              <Route path='revenue' element={<RevenueChart />} />
            </Route>
            <Route path='post-management' element={<PostManagement />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
