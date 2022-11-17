import meetToon from '../assets/meetToon.svg';

export default function MeetToonsutra() {
    return (
        <div className="w-full flex sm:justify-center justify-center py-8 sm:h-screen">
            <div className="flex sm:flex-row flex-col-reverse bg-[#EBEBEB] sm:w-[96%] w-11/12 rounded-l-lg justify-between">
                <div className="sm:w-3/5 flex flex-col justify-center items-center text-textPrimary">
                    <h1 className="sm:text-[40px] text-[20px] font-medium mt-8">Meet Toonsutra</h1>
                    <div className="sm:grid grid-cols-2 grid-rows-2 grid-flow-col sm:px-0 px-5">
                        <div className="flex flex-col">
                            <h1 className=' font-extralight sm:text-8xl text-6xl'>1.</h1>
                            <p className=' sm:w-72 sm:ml-7 leading-[30px] w-full'>
                                TOONSUTRA is India's premiere Webtoon platform and new storytelling home for disruptive creators across the country to experiment, innovate and create engaging webtoon comic stories.
                            </p>
                        </div>
                        <div className="flex flex-col sm:-mt-10 mt-8 leading-[30px]">
                            <h1 className=' font-extralight sm:text-8xl text-6xl'>2.</h1>
                            <p className=' sm:w-56 sm:ml-7'>Toonsutra has a massive library of International and Indian IP's along with Graphic India's vast library of
                                high-quality comics.
                            </p>
                        </div>
                        <div className="flex flex-col mt-8 leading-[30px]">
                            <h1 className=' font-extralight sm:text-9xl text-6xl  sm:mt-8'>3.</h1>
                            <p className=' sm:w-72 sm:ml-20'>
                                TOONSUTRA is India's premiere Webtoon platform and new storytelling home for disruptive creators across the country to experiment, innovate and create engaging webtoon comic stories.
                            </p>
                        </div>
                        <div className="flex sm:flex-col flex-col-reverse sm:-ml-4 sm:mt-24 mt-8 sm:mb-0 mb-8 leading-[30px]">
                            <p className=' sm:w-56 sm:ml-28 sm:-mb-8'>
                                Fall in love with emerging rising star creators across India as we give them a home to tell their stories.
                            </p>
                            <h1 className=' font-extralight sm:text-[150px] text-6xl sm:leading-3'>4.</h1>
                        </div>
                    </div>
                </div>
                <div className="sm:w-2/5 w-full sm:h-full h-screen sm:rounded-none rounded-t-lg sm:bg-center sm:justify-end sm:bg-cover bg-center" style={{ backgroundImage: `url(${meetToon})` }}>
                </div>
            </div>
        </div>

    );
}