import {
  Tooltip,
  Divider,
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  CardHeader,
  Container,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl
} from '@mui/material'

import PageTitleWrapper from '../../components/page-title-wrapper/PageTitleWrapper'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PostManagement = () => {
  const [postData, setPostData] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(5)
  const [postDataFiltered, setPostDataFiltered] = useState([])
  const [dataPopup, setDataPopup] = useState({})
  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickOpen = (e, post) => {
    setDataPopup(post)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handlePageChange = (e, newPage) => {
    setPage(newPage)
  }
  const handleLimitChange = e => {
    setLimit(parseInt(e.target.value))
  }

  const applyPagination = (postData, page, limit) => {
    return postData.slice(page * limit, page * limit + limit)
  }

  const paginatedPost = applyPagination(postDataFiltered, page, limit)

  const handleFilter = e => {
    const query = e.target.value
    let updatedList = [...postData]

    updatedList = updatedList.filter(item => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    // Trigger render with updated values
    setPage(0)
    setPostDataFiltered(updatedList)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getData()
        if (data) {
          setPostData(data)
          setPostDataFiltered(data)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <PageTitleWrapper>
        <Container>
          <h1>Post Management </h1>
        </Container>
      </PageTitleWrapper>
      <Container className='post-management'>
        <Card>
          <CardHeader
            action={
              <Box width={300}>
                <FormControl fullWidth variant='outlined'>
                  <TextField
                    id='outlined-basic'
                    label='Search by Title'
                    variant='outlined'
                    type='search'
                    onChange={handleFilter}
                  />
                </FormControl>
              </Box>
            }
            title='List post'
          ></CardHeader>
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>User ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell align='right'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedPost.map(post => {
                  return (
                    <TableRow hover key={post.id}>
                      <TableCell>
                        <Typography
                          variant='body1'
                          fontWeight='bold'
                          color='text.primary'
                          gutterBottom
                          noWrap
                        >
                          {post.id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant='body1'
                          fontWeight='bold'
                          color='text.primary'
                          gutterBottom
                          noWrap
                        >
                          {post.userId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant='body1'
                          fontWeight='bold'
                          color='text.primary'
                          gutterBottom
                          noWrap
                        >
                          {post.title}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Tooltip
                          title='View'
                          arrow
                          onClick={e => handleClickOpen(e, post)}
                        >
                          <IconButton
                            // sx={{
                            //   '&:hover': {
                            //     background: theme.colors.primary.lighter
                            //   },
                            //   color: theme.palette.primary.main
                            // }}
                            color='inherit'
                            size='small'
                          >
                            <EditTwoToneIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box p={2}>
            <TablePagination
              component='div'
              count={postDataFiltered.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25, 30]}
            />
          </Box>
        </Card>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{dataPopup.title}</DialogTitle>
        <DialogContent>
          <h2>{`User ID: ${dataPopup.userId}`}</h2>
          <DialogContentText id='alert-dialog-description'>
            {dataPopup.body}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PostManagement
