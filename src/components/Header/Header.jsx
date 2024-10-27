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
            <div className='bg-black w-10/12 mx-auto rounded-xl'>
                <div className='bg w-12/12 mx-auto p-8 rounded-xl flex flex-col space-y-4 justify-center items-center'>
                    <img className='' src={banner} alt="" />
                    <h2 className='text-white text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='text-gray-400 '>Beyond Boundaries Beyond Limits</p>
                    <button className='bg-yellow-400 p-3 border-2 rounded-xl'>Claim Free Coin</button>
                </div>
            </div>
        </div>
    );
};

export default Header;