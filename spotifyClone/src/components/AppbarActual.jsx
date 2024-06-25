import PropTypes from 'prop-types'
import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Typography, MenuItem, Menu } from '@mui/material'
import './AppbarActual.css'
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const AppbarActual = ({ handleLogin }) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [anchorEl, setAnchorEl] = useState(null)
    const accessToken = sessionStorage.getItem('access_token')
    const [isFocused, setIsFocused] = useState(false)

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
    }))

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }))

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
    }))

    const searchFunction = useCallback(async (searchQuery) => {
        if (!searchQuery) {
            setResults([])
            return
        }

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                params: {
                    q: searchQuery,
                    type: 'track,artist,album',
                    limit: 5
                }
            })
            setResults(response.data.tracks.items.concat(response.data.artists.items, response.data.albums.items))
            setAnchorEl(document.getElementById('search-bar'))
        } catch (err) {
            console.log('Error fetching search results:', err)
        }
    }, [accessToken])

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            searchFunction(query)
        }, 300)

        return () => clearTimeout(debounceTimeout)
    }, [query, searchFunction])

    const handleSearchChange = (event) => {
        setQuery(event.target.value)
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setIsFocused(false)
    }

    return (
        <Box>
            <AppBar position='fixed' className='appbar'>
                <Toolbar>
                    <Typography variant='h4' component={Link} to='/' color='white'>
                        SONGIFY
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            id='search-bar'
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={query}
                            onChange={handleSearchChange}
                            onFocus={handleFocus}
                        />
                    </Search>
                    <Button className='spotifyButton' onClick={handleLogin}>Login</Button>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && isFocused}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: document.getElementById('search-bar') ? document.getElementById('search-bar').clientWidth : 'auto',
                    },
                }}
            >
                {results.map((result, index) => (
                    <MenuItem key={index} component="a" href={result.external_urls.spotify} target='_blank' onClick={handleClose}>
                        {result.name}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

AppbarActual.propTypes = {
    handleLogin: PropTypes.func.isRequired,
}

export default AppbarActual
