import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import Sidebar from '../components/sidebar/Sidebar'
import './layout.scss'
const Layout = () => {
  return (
    <>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          display: 'block',
          flex: 1
        }}
        className='list-container'
      >
        <Box>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default Layout
