// import PropTypes from 'prop-types'
// import AppbarActual from "./AppbarActual"
// import Sidebar from "./SIdebar"
// import { Outlet } from "react-router-dom"

// const Layout= ({ handleLogin, trackId })=>{

//     return(
//         <div>
//             <AppbarActual handleLogin={handleLogin}  />
//             <Sidebar trackId={trackId} />
//             <div className='mainContent'>
//                 <Outlet />
//             </div>
//         </div>
//     )
// }

// Layout.propTypes = {
//     handleLogin: PropTypes.func.isRequired,
//     trackId: PropTypes.string.isRequired
// }

// export default Layout

import PropTypes from 'prop-types';
import AppbarActual from './AppbarActual';
import Sidebar from './SIdebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = ({ handleLogin }) => {
    const [trackId, setTrackId] = useState(null);

    return (
        <div>
            <AppbarActual handleLogin={handleLogin} setTrackId={setTrackId} />
            <Sidebar trackId={trackId} />
            <div className='mainContent'>
                <Outlet />
            </div>
        </div>
    );
};

Layout.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default Layout;
