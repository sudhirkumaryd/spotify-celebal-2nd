import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import MusicPlayerSlider from './Player'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar= ()=>{
    return(
        <div className='sidebar'>
            <List className='sidebarItems'>
                <ListItem component={Link} to='/album'>
                    <ListItemIcon className='icon'><ArtTrackIcon /></ListItemIcon>
                    <ListItemText primary='ALBUM' className='text'/>
                </ListItem>
                <br></br>
                <ListItem component={Link} to='/genre'>
                    <ListItemIcon className='icon'><TheaterComedyIcon /></ListItemIcon>
                    <ListItemText primary='GENRE' className='text'/>
                </ListItem>
                <br></br>
                <ListItem component={Link} to='/topCharts'>
                    <ListItemIcon className='icon'><TrendingUpIcon /></ListItemIcon>
                    <ListItemText primary='TOP CHARTS' className='text'/>
                </ListItem>
            </List>
            <br></br>
            <MusicPlayerSlider />
        </div>
    )
}

export default Sidebar
