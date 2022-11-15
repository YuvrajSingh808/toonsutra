export function NavLink({ text, href, page }) {
    return (
        <a href={href}>
            <div className="mx-8 sm:block hidden">

                <style>
                    {"\
                    .link-underline {\
                        border-bottom-width: 0;\
                        background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);\
                        background-size: 0 3px;\
                        background-position: 0 100%;\
                        background-repeat: no-repeat;\
                        transition: background-size .3s ease-in-out;\
                    }\
                    .link-underline-black {\
                        background-image: linear-gradient(transparent, transparent), linear-gradient(#DE604B, #DE604B);\
                    }\
                    .link-underline:hover {\
                        background-size: 100% 3px;\
                        background-position: 0 100%\
                    }\
                "}
                </style>
                <p className={`font-semibold text-[18px] ${page === text ? ' border-b-[3px] border-spacing-0 border-[#DE604B]' : 'link-underline-black link-underline'}`}>{text}</p>
                {/* <p className=' font-semibold text-[18px] link-underline link-underline-black'>{text}</p> */}
            </div>
        </a>
    );
}
