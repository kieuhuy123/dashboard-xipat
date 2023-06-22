import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Sidebar from '../sidebar/Sidebar'
import './page-title-wrapper.scss'

const PageTitleWrapper = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Box sx={{ p: 3, mb: 3 }} className='page-title-wrapper'>
        {children}
        <div className='menu-button'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Box>

      <Drawer anchor={'left'} open={open} onClose={handleDrawerClose}>
        <Sidebar></Sidebar>
      </Drawer>
    </>
  )
}

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageTitleWrapper
