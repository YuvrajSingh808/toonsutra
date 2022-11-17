import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import logo from '../assets/logo.svg';
export default function Footer() {
    return (
        <>
            <div className="bg-[#D3D3D3] text-[#535353]">
                <div className="flex flex-col items-center justify-center">
                    <div className="sm:hidden block bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 mt-4 px-11 rounded-full hover:scale-105 transition-all hover:shadow-md">
                        <p className=' text-backgroundPrimary font-medium'>Download App</p>
                    </div>
                    <p className="sm:py-6 py-4 text-sm sm:text-lg">Toonsutra coming soon on Google and Apple</p>
                    <div className="flex">
                        <img src={require("../assets/android.png")} alt="android" className=" sm:h-12 h-9 px-2" />
                        <img src={require("../assets/ios.png")} alt="ios" className="sm:h-12 h-9 px-2" />
                    </div>
                    <div className="flex py-6">
                        <p className="px-2 text-sm sm:text-base">Home</p>
                        <p className="px-2 text-sm sm:text-base">Privacy Policy</p>
                        <p className="px-2 text-sm sm:text-base">FAQs</p>
                        <p className="px-2 text-sm sm:text-base">Contact Us</p>
                    </div>
                    <div className='flex py-2'>
                        <img src = {facebook}  alt="facebook" className='px-2'/>
                        <img src = {twitter}  alt="twitter" className='px-2'/>
                        <img src = {instagram}  alt="instagram" className='px-2'/>
                    </div>
                    <div className="py-2">
                        <img src = {logo} alt="logo"/>
                    </div>
                </div>
            </div>
        </>
    )
  }