import { AppBar,styled, Toolbar, Typography, Box, Avatar } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import PetsIcon from '@mui/icons-material/Pets';
import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyleToolbar = styled(Toolbar)({
  display : 'flex',
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({theme}) =>({
  display:"none",
  gap:"20px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}))

const UserBox = styled(Box)(({theme}) =>({
  display:"flex",
  gap:"10px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]:{
    display: "none"
  }
}))

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyleToolbar>
        <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>LAMA DEV</Typography>
        <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon/>
          </Badge>
          <Avatar sx={{width:'30px',height:"30px"}} src='https://picsum.photos/200/300' onClick={()=>{setOpen(true)}}/>
        </Icons>
        <UserBox>
          <Avatar sx={{width:'30px',height:"30px"}} src='https://picsum.photos/200/300' onClick={()=>{setOpen(true)}}/>
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
