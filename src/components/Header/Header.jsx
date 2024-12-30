import './Header.css';
import Swal from 'sweetalert2';
import logo from '../../assets/image/logo.png';
import banner from '../../assets/image/banner-main.png';

const Header = ({ coinCount, setCoinCount }) => {
    const handleClaimCoins = () => {
        const additionalCoins = 2000;

        // Update the global coin count
        setCoinCount((prevCount) => prevCount + additionalCoins);

        Swal.fire({
            title: 'Congratulations!',
            text: `You have successfully claimed ${additionalCoins} free coins!`,
            icon: 'success',
            backdrop: true,
            timer: 3000,
            timerProgressBar: true,
            position: 'center',
            background: '#f9fafb',
            color: '#0E7A81',
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center w-10/12 mx-auto">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex items-center gap-6">
                    <ul className="flex gap-6">
                        <li>Home</li>
                        <li>Picture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className="border p-2">{coinCount} Coin</button>
                </div>
            </div>
            <div className="bg-black w-10/12 mx-auto rounded-xl">
                <div className="bg w-12/12 mx-auto p-8 rounded-xl flex flex-col space-y-4 justify-center items-center">
                    <img src={banner} alt="Banner" />
                    <h2 className="text-white text-2xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className="text-gray-400">Beyond Boundaries Beyond Limits</p>
                    <button onClick={handleClaimCoins} className="bg-yellow-400 p-3 border-2 rounded-xl">
                        Claim Free Coin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;

