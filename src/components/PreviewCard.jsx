export default function PreviewCard( props ) {
    return (
      <div className="">
        <div className="  relative z-0 w-auto">

        <div className="z-10 absolute md:px-[72px] sm:px-4  sm:pr-10 md:py-24 sm:py-5 text-white">
            <p className=" uppercase md:text-4xl hidden md:block">Title</p>
            <p className="text-white md:pt-24 font-semibold md:text-2xl sm:text-xl">{props.title}</p>    
            <p className="text-white md:pt-5 sm:pt-4">{props.description}</p>
        </div>
          <img src={require(`../assets/comics/${props.coverImage}`)} alt="cover" className="h-full brightness-50 md:w-full"/>
        </div>
      </div>
    )
  }