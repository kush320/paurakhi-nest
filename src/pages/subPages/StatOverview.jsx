import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const card = (

    <>
        <CardContent>
            <Box>
                <Typography variant='h5' color="text.secondary" sx={{ fontWeight: 'bold' }} gutterBottom>
                    Stats Overview
                </Typography>
                <Typography color="text.secondary">
                    Total Enquiry Distribution
                </Typography>
                <Box sx={{ marginTop: '15px' }}>
                    <Typography sx={{ display: 'flex', flexDirection: 'column', margin: '2px' }}>
                        Products
                        <meter value="63" min="0" max="100" color='#34A853'></meter>
                    </Typography>
                    <Typography sx={{ display: 'flex', flexDirection: 'column', margin: '2px' }}>
                        Finance/Loan
                        <meter value="88" min="0" max="100" color='#FF6B6B'></meter>
                    </Typography>
                    <Typography sx={{ display: 'flex', flexDirection: 'column', margin: '2px' }}>
                        Grants
                        <meter value="38" min="0" max="100" ></meter>
                    </Typography>

                </Box>
            </Box>
        </CardContent>

    </>
)

export default function StatOverview() {
    return (
        <Box sx={{ minWidth: '40%', marginTop: '0%' }}>
            <Card sx={{height:'100%', borderRadius: '8px', boxShadow: '2'}} variant="outlined">{card}</Card>
        </Box>
    );
}
