import ComicCard from "./ComicCard"
export default function ComicSlide( ) {
    return (
        <>
            <div className="">
                <p className="text-center text-3xl py-4">
                    Here's a limited preview of the vast online library on Toonsutra
                </p>
            </div>
            <div className=" w-4/5 mx-auto flex flex-nowrap overflow-x-scroll py-6">
                <div className="flex items-center justify-center">
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="5.png" /> </div>
                </div>
            </div>
            <p className="text-center text-xl py-4">
                And <b>hundreds</b> of titles like these
            </p>
            <p className="text-center text-md underline">
                <a href="/#"> Learn More</a>
            </p>
            <div className="sm:block mx-auto bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 my-4 px-11 rounded-full hover:scale-105 transition-all hover:shadow-md w-1/5">
                <p className=' text-backgroundPrimary font-medium'>Toonsutra coming soon</p>
            </div>
        </>
  )}