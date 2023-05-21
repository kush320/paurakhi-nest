import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextEditor from '../../utils/TextEditor'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const TicketsReply= () => {
   
    const [file, setFile] = useState();
    

    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div id='blog' style={{background: '#f4f4f4'}}>
            <Box sx={{ width: '60%', position: 'relative', left: '20%', display: 'flex', flexDirection: 'column', marginTop: '20px', paddingBottom: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <Typography component='h2' variant='h4' sx={{fontFamily:'Poppins'}} >Tickets</Typography>
                </Box>
                <Stack>
                    {/* navigate to single user */}
                    <Typography sx={{ fontWeight: '600', fontSize: '15px', fontFamily:'Poppins' }}>User Id:</Typography>
                    <TextField placeholder='User ID' />
                </Stack>
                <Stack>
                    <Typography sx={{ fontWeight: '600', fontSize: '15px', fontFamily:'Poppins' }}>Tittle:</Typography>
                    <TextField placeholder='Enter title' />
                </Stack>
                <Box sx={{ display: 'flex', }}>
                    <Typography sx={{ fontWeight: '600', fontSize: '15px', fontFamily:'Poppins' }} >Body</Typography>
                </Box>
                <Stack>
                    <TextEditor/>
                </Stack>
                <Box sx={{ display: 'flex', marginTop:'6%' }}>
                    <Typography sx={{ fontWeight: '600', fontSize: '15px', fontFamily:'Poppins' }} >Reply</Typography>
                </Box>
                <Stack>
                    <TextEditor/>
                </Stack>
                
                <Button color="success" variant='contained' size='small'  sx={{ width: '30%', marginTop: '60px', position: 'relative', left: '30%' }}>Close Tickets</Button>
            </Box>
        </div>
    )
}

export default TicketsReply
