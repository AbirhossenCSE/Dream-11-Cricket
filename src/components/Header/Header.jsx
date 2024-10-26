import logo from '../../assets/image/logo.png'
const Header = () => {
    return (
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
    );
};

export default Header;