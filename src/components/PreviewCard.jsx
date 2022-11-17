export default function PreviewCard( props ) {
    return (
      <div className=" shadow-2xl bg-gray-300">
        <div className=" relative z-0 w-auto">

        <div className="z-10 absolute sm:pl-[65px] sm:pr-[40px] pl-[12px] pr-[4px] text-white">
            <p className=" uppercase sm:text-[37px] hidden sm:block sm:pt-[45px]">Title</p>
            <p className="text-white sm:pt-[50px] font-semibold sm:text-[31px] pt-[9px]">{props.title}</p>    
            <p className="text-white sm:pt-[50px] text-[8.5px] sm:text-[20px] pt-[15px] sm:font-light">{props.description}</p>
        </div>
          <img src={require(`../assets/comics/${props.publisher}/${props.coverImage}.png`)} alt="cover" className="h-full brightness-50 md:w-full"/>
        </div>  
      </div>
    )
  }