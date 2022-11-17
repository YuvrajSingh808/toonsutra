export default function PreviewCard( props ) {
    return (
      <div className=" shadow-2xl bg-gray-300">
        <div className=" relative z-0 w-auto">

        <div className="z-10 absolute sm:px-[72px] pl-2 pr-2 sm:py-24 py-5 text-white">
            <p className=" uppercase md:text-4xl hidden md:block">Title</p>
            <p className="text-white sm:pt-24 font-semibold sm:text-2xl">{props.title}</p>    
            <p className="text-white sm:pt-5 pt-2 text-[8.5px] ">{props.description}</p>
        </div>
          <img src={require(`../assets/comics/${props.publisher}/${props.coverImage}.png`)} alt="cover" className="h-full brightness-50 md:w-full"/>
        </div>  
      </div>
    )
  }