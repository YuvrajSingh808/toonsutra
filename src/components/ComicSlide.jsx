import ComicCard from "./ComicCard"
export default function ComicSlide( ) {
    return (
        <>
            <div className="">
                <p className="text-center text-3xl py-4">
                    Here's a limited preview of the vast online library on Toonsutra
                </p>
            </div>
            <div className=" w-full mx-auto flex flex-nowrap overflow-auto py-6">
                <div className="flex items-center justify-center">
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                    <div className="px-2 w-64"> <ComicCard coverImage="EmpireofBlood" publisher="GraphicIndia" /> </div>
                </div>
            </div>
            <p className="text-center text-xl py-4 ml-8">
                And <b>hundreds</b> of titles like these
            </p>
            <p className="text-center text-md underline mx-auto">
                <a href="/#"> Learn More</a>
            </p>
            <div className="sm:block mx-auto bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 my-4 sm:px-11 px-4 rounded-full hover:scale-105 transition-all hover:shadow-md sm:w-1/5 w-2/3 text-center">
                <p className=' text-backgroundPrimary font-medium'>Toonsutra coming soon</p>
            </div>
        </>
  )}