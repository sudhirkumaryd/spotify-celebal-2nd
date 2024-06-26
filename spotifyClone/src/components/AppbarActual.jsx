// import PropTypes from 'prop-types';
// import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import { Typography, MenuItem, Menu, Tooltip } from '@mui/material';
// import './AppbarActual.css';
// import { Link } from 'react-router-dom';
// import { useState, useCallback } from 'react';
// import axios from 'axios';

// const AppbarActual = ({ handleLogin }) => {
//     const [songResults, setSongResults] = useState([]);
//     const [albumResults, setAlbumResults] = useState([]);
//     const [artistResults, setArtistResults] = useState([]);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const accessToken = sessionStorage.getItem('access_token');

//     const Search = styled('div')(({ theme }) => ({
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(6.75),
//             width: 'auto',
//         },
//     }));

//     const SearchIconWrapper = styled('div')(({ theme }) => ({
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }));

//     const StyledInputBase = styled(InputBase)(({ theme }) => ({
//         color: 'inherit',
//         width: '100%',
//         '& .MuiInputBase-input': {
//             padding: theme.spacing(1, 1, 1, 0),
//             paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//             transition: theme.transitions.create('width'),
//             [theme.breakpoints.up('sm')]: {
//                 width: '36ch',
//             },
//         },
//     }));

//     const searchFunction = useCallback(async (searchQuery) => {
//         if (!searchQuery) {
//             clearResults();
//             return;
//         }

//         try {
//             const response = await axios.get(`https://api.spotify.com/v1/search`, {
//                 headers: {
//                     'Authorization': `Bearer ${accessToken}`
//                 },
//                 params: {
//                     q: searchQuery,
//                     type: 'track,album,artist',
//                     limit: 5
//                 }
//             });

//             const { tracks, albums, artists } = response.data;

//             setSongResults(tracks.items || []);
//             setAlbumResults(albums.items || []);
//             setArtistResults(artists.items || []);

//             setAnchorEl(document.getElementById('search-bar'));
//         } catch (err) {
//             console.log('Error fetching search results:', err);
//             clearResults();
//         }
//     }, [accessToken]);

//     const clearResults = () => {
//         setSongResults([]);
//         setAlbumResults([]);
//         setArtistResults([]);
//     };

//     const handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             searchFunction(event.target.value);
//         }
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const handleSearchClick = () => {
//         if (!accessToken) {
//             alert('Log in to search.'); // Replace with a more user-friendly notification
//         }
//     };

//     return (
//         <Box>
//             <AppBar position='fixed' className='appbar'>
//                 <Toolbar>
//                     <Typography variant='h4' component={Link} to='/' color='white'>
//                         SONGIFY
//                     </Typography>
//                     <Tooltip title={!accessToken ? 'Log in to search' : ''}>
//                         <Search>
//                             <SearchIconWrapper>
//                                 <SearchIcon />
//                             </SearchIconWrapper>
//                             <StyledInputBase
//                                 id='search-bar'
//                                 placeholder= 'find your groove...'
//                                 inputProps={{ 'aria-label': 'search' }}
//                                 onKeyDown={handleKeyDown}
//                                 onClick={handleSearchClick}
//                                 disabled={!accessToken}
//                             />
//                         </Search>
//                     </Tooltip>
//                     <Button className='spotifyButton' onClick={handleLogin}>
//                         Login
//                     </Button>
//                 </Toolbar>
//             </AppBar>
//             <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//                 PaperProps={{
//                     style: {
//                         width: document.getElementById('search-bar') ? document.getElementById('search-bar').clientWidth : 'auto',
//                     },
//                 }}
//             >
//                 {songResults.length > 0 && (
//                     <>
//                         <MenuItem disabled>SONGS</MenuItem>
//                         {songResults.map((result, index) => (
//                             <MenuItem key={index} component="a" href={result.external_urls.spotify} target='_blank' onClick={handleClose}>
//                                 {result.name}
//                             </MenuItem>
//                         ))}
//                     </>
//                 )}
//                 {albumResults.length > 0 && (
//                     <>
//                         <MenuItem disabled>ALBUMS</MenuItem>
//                         {albumResults.map((result, index) => (
//                             <MenuItem key={index} component="a" href={result.external_urls.spotify} target='_blank' onClick={handleClose}>
//                                 {result.name}
//                             </MenuItem>
//                         ))}
//                     </>
//                 )}
//                 {artistResults.length > 0 && (
//                     <>
//                         <MenuItem disabled>ARTISTS</MenuItem>
//                         {artistResults.map((result, index) => (
//                             <MenuItem key={index} component="a" href={result.external_urls.spotify} target='_blank' onClick={handleClose}>
//                                 {result.name}
//                             </MenuItem>
//                         ))}
//                     </>
//                 )}
//             </Menu>
//         </Box>
//     );
// };

// AppbarActual.propTypes = {
//     handleLogin: PropTypes.func.isRequired,
// };

// export default AppbarActual;

import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, MenuItem, Menu, Tooltip } from '@mui/material';
import './AppbarActual.css';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import axios from 'axios';

const AppbarActual = ({ handleLogin, MusicPlayerSlider }) => {
    const [songResults, setSongResults] = useState([]);
    const [albumResults, setAlbumResults] = useState([]);
    const [artistResults, setArtistResults] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const accessToken = sessionStorage.getItem('access_token');

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(6.75),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '36ch',
            },
        },
    }));

    const searchFunction = useCallback(async (searchQuery) => {
        if (!searchQuery) {
            clearResults();
            return;
        }

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                params: {
                    q: searchQuery,
                    type: 'track,album,artist',
                    limit: 5
                }
            });

            const { tracks, albums, artists } = response.data;

            setSongResults(tracks.items || []);
            setAlbumResults(albums.items || []);
            setArtistResults(artists.items || []);

            setAnchorEl(document.getElementById('search-bar'));
        } catch (err) {
            console.log('Error fetching search results:', err);
            clearResults();
        }
    }, [accessToken]);

    const clearResults = () => {
        setSongResults([]);
        setAlbumResults([]);
        setArtistResults([]);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchFunction(event.target.value);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearchClick = () => {
        if (!accessToken) {
            alert('Log in to search.'); // Replace with a more user-friendly notification
        }
    };

    const handleSongClick = async (uri) => {
        if (MusicPlayerSlider && MusicPlayerSlider._options) {
            const deviceId = MusicPlayerSlider._options.id;
            try {
                await axios.put(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, 
                {
                    uris: [uri]
                },
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                handleClose();
            } catch (err) {
                console.log('Error playing track:', err);
            }
        } else {
            console.log('Spotify player not initialized.');
        }
    };

    return (
        <Box>
            <AppBar position='fixed' className='appbar'>
                <Toolbar>
                    <Typography variant='h4' component={Link} to='/' color='white'>
                        SONGIFY
                    </Typography>
                    <Tooltip title={!accessToken ? 'Log in to search' : ''}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                id='search-bar'
                                placeholder='find your groove...'
                                inputProps={{ 'aria-label': 'search' }}
                                onKeyDown={handleKeyDown}
                                onClick={handleSearchClick}
                                disabled={!accessToken}
                            />
                        </Search>
                    </Tooltip>
                    <Button className='spotifyButton' onClick={handleLogin}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: document.getElementById('search-bar') ? document.getElementById('search-bar').clientWidth : 'auto',
                    },
                }}
            >
                {songResults.length > 0 && (
                    <>
                        <MenuItem disabled>SONGS</MenuItem>
                        {songResults.map((result, index) => (
                            <MenuItem 
                                key={index} 
                                onClick={() => handleSongClick(result.uri)}
                            >
                                {result.name}
                            </MenuItem>
                        ))}
                    </>
                )}
                {albumResults.length > 0 && (
                    <>
                        <MenuItem disabled>ALBUMS</MenuItem>
                        {albumResults.map((result, index) => (
                            <MenuItem key={index} component="a" href={result.external_urls.spotify} target='_blank' onClick={handleClose}>
                                {result.name}
                            </MenuItem>
                        ))}
                    </>
                )}
                {artistResults.length > 0 && (
                    <>
                        <MenuItem disabled>ARTISTS</MenuItem>
                        {artistResults.map((result, index) => (
                            <MenuItem key={index} component="a" href={result.external_urls.spotify} target='_blank' onClick={handleClose}>
                                {result.name}
                            </MenuItem>
                        ))}
                    </>
                )}
            </Menu>
        </Box>
    );
};

AppbarActual.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    MusicPlayerSlider: PropTypes.object.isRequired,
};

export default AppbarActual;
