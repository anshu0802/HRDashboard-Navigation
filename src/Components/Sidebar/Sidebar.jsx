import './sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import UpdateIcon from '@mui/icons-material/Update';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { Icon } from '@mui/material';
function Sidebar()
{
    return(
        <>
        <div className='sidebar'>
        <div className='top'>
            <span className="logo">HR Dashboard</span></div>
           <hr />
        <div className='center'>
            <ul>
                <p className="title">Main</p>
            <li>
        
            <GridViewIcon className='icon'/>  <span>Dashboard</span>
            </li>
            <li>
           
            <GroupIcon className='icon'/> <span>Users</span>
            </li>
            <li>
            
            <PersonIcon className='icon'/>  <span>Profile</span>
            </li>
            <p className="title">Information</p>
            <li>
             <CircleNotificationsIcon className='icon'/>   <span>Notification</span>
            </li>
            <li>
            
            <UpdateIcon className='icon'/>   <span>Update</span>
            </li>
           
            <p className="title">Configuration</p>
            <li>
            <SettingsIcon className='icon'/><span>Setting</span>
            </li>
            <li>
            
            <HelpIcon className='icon'/>   <span>Help</span>
            </li>
            </ul>
            
        </div>
        <div className='bottom'>
            <div className="coloroption"></div>
            <div className="coloroption"></div>
            <div className="coloroption"></div>

        </div>
        </div>
        </>
    )
}
export default Sidebar