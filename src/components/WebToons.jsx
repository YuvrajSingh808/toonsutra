import webtoonsPrev from '../assets/webtoonsPrev.png';

export default function Webtoons() {
    return (
        <div className="w-full flex sm:justify-end justify-center py-8 sm:h-screen h-96">
            <div className="flex sm:flex-row flex-col bg-[#EBEBEB] sm:w-[95%] w-11/12 rounded-l-lg justify-between">
                <div className="sm:w-1/4 relative">
                    <div className="sm:h-full h-2-3 sm:w-full sm:flex sm:absolute flex-col justify-center items-end z-10 sm:px-8 sm:pt-20 ">
                        <img src={webtoonsPrev} alt="webtoonsPrev" className='sm:opacity-30 sm:block hidden' />
                        <h1 className='sm:text-[40px] font-medium sm:mt-0 mt-6 text-textPrimary sm:text-right text-center'>What are Webtoons?</h1>
                    </div>
                </div>
                <div className="sm:w-3/4 sm:h-full h-2/3 bg-black">
                </div>
            </div>
        </div>
    );
}