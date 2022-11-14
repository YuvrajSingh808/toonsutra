import bannerImage from '../assets/banner.png';
import phoneMock from '../assets/PhoneMockup.png';
import ios from '../assets/ios.png';
import android from '../assets/android.png';
import { NavBar } from './NavBar';

export function Banner() {
    return <div className=" h-screen w-full">
        <img src={bannerImage} alt="banner" className="w-full h-full absolute z-10" />
        <div className="relative z-20 w-full">
            <NavBar currentPage="Home" />
            <div className="flex items-center justify-center h-full px-16">
                <div className="w-1/2 flex flex-col items-start text-[#12181C] px-16">
                    <p className=' font-extrabold text-6xl'>HOME OF THE INDIAN WEBTOON</p>
                    <p className=' mt-5 text-xl'>Experience thousands of webtoon comics from the Toonsutra library. With new titles releasing every week!</p>
                    <p className=' mt-8 text-xl'>Coming soon on Google and Apple</p>
                    <div className="flex mt-8 space-x-6">
                        <img src={android} alt="android" className=" h-12" />
                        <img src={ios} alt="ios" className="h-12" />
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={phoneMock} alt="phone" className="h-3/4" />
                </div>
            </div>
        </div>
    </div>;
}
