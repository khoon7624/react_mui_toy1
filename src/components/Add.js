import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled, Typography, Avatar, Stack,Button ,ButtonGroup  } from '@mui/material';
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyleModal = styled(Modal)({
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip onClick={()=>{setOpen(true)}} title="Add" sx={{position:'fixed', bottom:20,left:{xs:"calc(50% - 25px)",md:30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyleModal
            open={open}
            onClose={()=>{setOpen(false)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>
                <UserBox>
                    <Avatar sx={{width:30,height:30}} src='https://picsum.photos/200/300'/>
                    <Typography fontWeight={500} variant='span'>John Doe</Typography>
                </UserBox>
                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color='primary' />
                    <ImageIcon color='secondary'  />
                    <VideocamIcon color='success'  />
                    <PersonAddIcon color='error' />
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                <Button>Post</Button>
                <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
                </ButtonGroup>
            </Box>
      </StyleModal>
    </>
  )
}

export default Add
