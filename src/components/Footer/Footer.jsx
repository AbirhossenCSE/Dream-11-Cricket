import footerb from '../../assets/image/logo-footer.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="mt-36">
            <div className="bg-[#06091A] text-white">
                <div className='relative -top-16 bg-white w-8/12 mx-auto rounded-xl text-black'>
                    <div className='bg2 w-full flex flex-col space-y-4 justify-center items-center'>
                        <h2 className='text-2xl font-bold'>Subscribe to our Newsletter</h2>
                        <p className='text-gray-400 items-center'>Get the latest updates and news right in your inbox!</p>
                        <div className='p-4'>
                            <input className="rounded-xl p-2" type="text" placeholder="Enter Your Emai" />
                            <button className="bg-white text-black rounded-xl ml-1 p-2">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='mx-auto' src={footerb} alt="" />
                </div>
                <div className="w-10/12 mx-auto grid md:grid-cols-3 space-y-5 p-8 gap-5">
                    <div>
                        <h3 className="mb-2 font-bold text-white">About Us</h3>
                        <p className="text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <nav>
                        <h6 className="mb-2 font-bold text-white">Quick Links</h6>
                        <ul className='gap-6 text-gray-400'>
                            <li>Home</li>
                            <li>Picture</li>
                            <li>Teams</li>
                            <li>Schedules</li>
                        </ul>
                    </nav>
                    <div className=" space-y-2">
                        <h3 className="mb-2 font-bold text-white">Subscribe</h3>
                        <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                        <input className="rounded-l-xl p-2" type="text" placeholder="Enter Your Emai" />
                        <button className="bg-[#ff00ff] text-black rounded-r-xl p-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;