import './dashboard.scss'
import { Button, Container, Box } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'
import PageTitleWrapper from '../../components/page-title-wrapper/PageTitleWrapper'
const Dashboard = () => {
  return (
    <>
      <PageTitleWrapper>
        <Container>
          <h1>Dashboard </h1>
        </Container>
      </PageTitleWrapper>
      <Container className='dashboard'>
        <Box>
          <Button
            variant='contained'
            component={NavLink}
            to='/dashboard/subscription'
            sx={{ mr: 3 }}
          >
            Subscription
          </Button>

          <Button
            variant='contained'
            component={NavLink}
            to='/dashboard/revenue'
          >
            Revenue
          </Button>
        </Box>

        <Outlet></Outlet>
      </Container>
    </>
  )
}

export default Dashboard
