import './AfterLogin.css'
import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Grid, Card, CardContent, CardMedia } from '@mui/material'

const AfterLogin = () => {
    const [playlists, setPlaylists] = useState([])
    const accessToken = sessionStorage.getItem('access_token')

    useEffect(() => {
        const fetchFeaturedPlaylists = async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
                setPlaylists(response.data.playlists.items)
            } catch (err) {
                console.log('Error fetching featured playlists:', err)
            }
        }

        if (accessToken) {
            fetchFeaturedPlaylists()
        }
    }, [accessToken])

    return (
        <>
            <Box className='songBox'>
                <Typography variant='h6' className='songHead'>
                    ENJOY SOME FEATURED PLAYLISTS
                </Typography>
                <Grid container spacing={3} className='songGrid'>
                    {playlists.map((playlist, index) => (
                        <Grid item xs={3} key={index}>
                            <a href={playlist.external_urls.spotify}
                            target='_blank' rel='noopener noreferrer'
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <CardMedia
                                        component='img'
                                        height='100'
                                        image={playlist.images.length > 0 ? playlist.images[0].url : ''}
                                        alt='Playlist Cover'
                                    />
                                    <CardContent>
                                        <Typography variant='body1' component='p'>
                                            {playlist.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default AfterLogin
