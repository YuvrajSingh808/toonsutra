export default function ComicCard( props ) {
  return (
    <div>
        <img src={require(`../assets/comics/${props.publisher}/${props.coverImage}.png`)} alt="cover" className=" h-full" />
    </div>
  )
}