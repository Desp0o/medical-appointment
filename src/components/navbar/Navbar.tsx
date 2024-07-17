import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/Logo'; // Make sure this path is correct
import NacIconBlock from './NacIconBlock';
import CalendarIcon from '../../assets/CalendarIcon';
import Staff from '../../assets/Staff';
import Notes from '../../assets/Notes';
import { useDispatch, useSelector } from 'react-redux';
import HomeIcon from '../../assets/HomeIcon';
import { setActiveTab } from '../../redux/activeTabSlice';

interface RootState {
    activeTabStore: {
        value: string;
    }
}

const Navbar = () => {
    const activeTab = useSelector((state: RootState) => state.activeTabStore.value)
    const dispatch = useDispatch()

    const tabHandler = (name:string) => {
        dispatch(setActiveTab(name))
    }

    return (
        <nav className='navbar'>
            <Link to='/'>
                <Logo />
            </Link>

            <div className='nav_menu'>
                <Link to='/' className='block_wrapper' onClick={() => tabHandler("main")}>
                    {activeTab === 'main' && <span className='block_border_left' />}
                    <NacIconBlock child={<HomeIcon />} />
                </Link>

                <Link to='/' className='block_wrapper' onClick={() => tabHandler("booking")}>
                    {activeTab === 'booking' && <span className='block_border_left' />}
                    <NacIconBlock child={<CalendarIcon />} />
                </Link>

                <Link to='/' className='block_wrapper' onClick={() => tabHandler("staff")}>
                    {activeTab === 'staff' && <span className='block_border_left' />}
                    <NacIconBlock child={<Staff />} />
                </Link>

                <Link to='/' className='block_wrapper' onClick={() => tabHandler("notes")}>
                    {activeTab === 'notes' && <span className='block_border_left' />}
                    <NacIconBlock child={<Notes />} />
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;
