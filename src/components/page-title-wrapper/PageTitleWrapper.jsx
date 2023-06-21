import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import './page-title-wrapper.scss'

const PageTitleWrapper = ({ children }) => {
  return (
    <>
      <Box sx={{ p: 3, mb: 3 }} className='page-title-wrapper'>
        {children}
      </Box>
    </>
  )
}

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageTitleWrapper
