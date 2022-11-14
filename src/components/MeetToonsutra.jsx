import meetToon from '../assets/meetToon.svg';

export default function MeetToonsutra() {
    return (
        <div className="w-full flex justify-end py-8 h-screen">
            <div className="flex bg-[#EBEBEB] w-[95%] rounded-l-lg justify-between">
                <div className="w-3/5 flex flex-col justify-center items-center text-textPrimary">
                    <h1 className="text-[40px] font-medium mt-12">Meet Toonsutra</h1>
                    <div className="grid grid-cols-2 grid-rows-2">
                        <div className="flex flex-col">
                            <h1 className=' font-extralight text-8xl'>1.</h1>
                            <p className=' w-72 ml-7'>
                                TOONSUTRA is India's premiere Webtoon platform and new storytelling home for disruptive creators across the country to experiment, innovate and create engaging webtoon comic stories.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className=' font-extralight text-9xl  mt-8'>3.</h1>
                            <p className=' w-72 ml-20'>
                                TOONSUTRA is India's premiere Webtoon platform and new storytelling home for disruptive creators across the country to experiment, innovate and create engaging webtoon comic stories.
                            </p>
                        </div>
                        <div className="flex flex-col -mt-10">
                            <h1 className=' font-extralight text-8xl'>2.</h1>
                            <p className=' w-56 ml-7'>Toonsutra has a massive library of International and Indian IP's along with Graphic India's vast library of
                                high-quality comics.
                            </p>
                        </div>
                        <div className="flex flex-col -ml-4 mt-24">
                            <p className=' w-56 ml-28 -mb-8'>
                                Fall in love with emerging rising star creators across India as we give them a home to tell their stories.
                            </p>
                            <h1 className=' font-extralight text-[150px] leading-3'>4.</h1>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 flex flex-col bg-center justify-end bg-cover" style={{ backgroundImage: `url(${meetToon})` }}>
                </div>
            </div>
        </div>

    );
}