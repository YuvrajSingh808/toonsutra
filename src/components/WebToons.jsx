import webtoonsPrev from '../assets/webtoonsPrev.png';

export default function Webtoons() {
    return (
        <div className="w-full flex justify-end py-8 h-screen">
            <div className="flex bg-[#EBEBEB] w-[95%] rounded-l-lg justify-between">
                <div className="w-1/4 relative">
                    <div className="h-full w-full flex absolute flex-col justify-center items-end z-10 px-8 pt-20 ">
                        <img src={webtoonsPrev} alt="webtoonsPrev" className='opacity-30' />
                        <h1 className='text-[40px] font-medium text-textPrimary text-right'>What are Webtoons?</h1>
                    </div>
                </div>
                <div className="w-3/4 bg-black">
                </div>
            </div>
        </div>
    );
}