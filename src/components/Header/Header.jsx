import logo from '../../assets/image/logo.png'
import banner from '../../assets/image/banner-main.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='flex items-center gap-6'>
                    <ul className='flex gap-6'>
                        <li>Home</li>
                        <li>Picture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className='border p-2'>Coin</button>
                </div>
            </div>
            <div className='bg w-10/12 mx-auto p-8 rounded-xl flex flex-col space-y-4 justify-center items-center'>
                <img className='' src={banner} alt="" />
                <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p>Beyond Boundaries Beyond Limits</p>
                <button className='bg-yellow-400 p-3 border-2 rounded-xl'>Claim Free Coin</button>
            </div>
        </div>
    );
};

export default Header;