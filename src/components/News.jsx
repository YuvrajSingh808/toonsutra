import news from "../assets/news/news";

export default function News() {
    const keys = ['1', '2', '3', '4', '5', '6'];
    // news['']
    return (
        <div className=" my-16">
            <p className="sm:text-[40px] text-2xl font-medium text-center text-[#1E272D] my-12">News And Blogs</p>
            <div className="grid sm:grid-rows-2 sm:grid-cols-3 grid-cols-2 sm:gap-x-8 gap-x-4 gap-y-4 sm:gap-y-8 sm:w-4/5 mx-auto w-11/12">
                {keys.map((key) =>
                    <NewsCard image={news[key]} key={key} />
                )}
            </div>

        </div>
    );
}

function NewsCard({ image }) {
    return (
        <div className="sm:h-[320px] h-32 relative">
            <a className="bg-black opacity-0 w-full h-full absolute hover:opacity-75 flex items-center justify-center" href="/">
                <p className="text-white underline text-base leading-3">Read More</p>
            </a>
            <img src={image} alt="news" className="w-full h-full" />
        </div>
    );
}