import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Grid, Card, CardContent, CardMedia } from '@mui/material'
import './AlbumPage.css'

const AlbumPage = () => {
    const accessToken = sessionStorage.getItem('access_token')
    const [album, setAlbum] = useState([])

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
                setAlbum(response.data.albums.items)
            } catch (err) {
                console.log('Error fetching albums:', err)
            }
        }

        if (accessToken) {
            fetchAlbums()
        }
    }, [accessToken])

    return (
        <>
            <Box className='albumBox'>
                <Typography variant='h3' className='head'>
                    Albums
                </Typography>
                <Grid container spacing={3} className='albumGrid'>
                    {album.map((album, index) => (
                        <Grid item xs={3} key={index}>
                            <a href={album.external_urls.spotify}
                                target='_blank' rel='noopener noreferrer'
                                style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card>
                                    <CardMedia
                                        component='img'
                                        height='100'
                                        image={album.images.length > 0 ? album.images[0].url : ''}
                                        alt='Playlist Cover'
                                    />
                                    <CardContent>
                                        <Typography variant='body1' component='p'>
                                            {album.name}
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

export default AlbumPage
