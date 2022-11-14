export default function ComicCard({ comic }) {
  return (
    <div className="">
        <img src={comic.coverImage} alt="cover" className="rounded-lg" />
    </div>
  )
}