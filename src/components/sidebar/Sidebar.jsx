import { Outlet } from 'react-router-dom'
import { Box, List, Button, ListItem } from '@mui/material'
import { NavLink as RouterLink } from 'react-router-dom'
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <>
      <Box className='menu-wrapper'>
        <List component='div'>
          <Box>
            <List component='div'>
              <ListItem component='div'>
                <Button
                  disableRipple
                  component={RouterLink}
                  to='/dashboard'
                  startIcon={<DesignServicesTwoToneIcon />}
                >
                  Dashboard
                </Button>
              </ListItem>
              <ListItem component='div'>
                <Button
                  disableRipple
                  component={RouterLink}
                  to='/post-management'
                  startIcon={<DesignServicesTwoToneIcon />}
                >
                  Post Management
                </Button>
              </ListItem>
              <ListItem component='div'>
                <Button
                  disableRipple
                  component={RouterLink}
                  to='/settings'
                  startIcon={<DesignServicesTwoToneIcon />}
                >
                  Overview
                </Button>
              </ListItem>
            </List>
          </Box>
        </List>
      </Box>
    </>
  )
}

export default Sidebar
