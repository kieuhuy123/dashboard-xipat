import { useState, useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import {
  Button,
  Container,
  Box,
  TextField,
  Card,
  CardHeader,
  Divider,
  CardContent,
  FormControl
} from '@mui/material'

import PageTitleWrapper from '../../components/page-title-wrapper/PageTitleWrapper'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'

const Settings = () => {
  const formDataDefault = {
    title: '',
    email: '',
    color: '',
    active_date: [dayjs(), dayjs()]
  }

  const [formData, setFormData] = useState(formDataDefault)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (formData?.title || formData?.email || formData?.color) {
      setLoading(false)
    } else setLoading(true)
  }, [formData])
  const handleTitleChange = e => {
    setFormData({ ...formData, title: e.target.value })
  }

  const handleEmailChange = e => {
    setFormData({ ...formData, email: e.target.value })
  }

  const handleColorChange = e => {
    setFormData({ ...formData, color: e.target.value })
  }

  const handleChangeActiveDate = date => {
    setFormData({ ...formData, active_date: date })
  }

  const handleSubmit = () => {
    console.log('Settings Data', formData)
  }
  return (
    <>
      <PageTitleWrapper>
        <Container>
          <h1>Settings </h1>
        </Container>
      </PageTitleWrapper>
      <Container className='settings'>
        <Card>
          <CardHeader title='Input Fields' />
          <Divider />
          <CardContent>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' }
              }}
              noValidate
              autoComplete='off'
            >
              <div>
                <TextField
                  id='outlined-password-input'
                  label='Title'
                  value={formData?.title}
                  onChange={handleTitleChange}
                  type='text'
                  fullWidth
                />

                <TextField
                  id='outlined-search'
                  label='Email'
                  value={formData?.email}
                  onChange={handleEmailChange}
                  type='email'
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  id='outlined-password-input'
                  label='Color'
                  type='color'
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={formData?.color}
                  onChange={handleColorChange}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['SingleInputDateRangeField']}>
                    <DateRangePicker
                      slots={{ field: SingleInputDateRangeField }}
                      value={formData?.activeDate}
                      onChange={handleChangeActiveDate}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <Button
                variant='outlined'
                disabled={loading ? true : false}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default Settings
