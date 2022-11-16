export default function ComicCard( props ) {
  return (
    <div>
        <img src={require(`../assets/comics/${props.coverImage}`)} alt="cover"/>
    </div>
  )
}