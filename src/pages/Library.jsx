import { NavBar } from "../components/NavBar";
import Comic from "../models/Comic";
import ComicCard from "../components/ComicCard";

function readCSV() {
    const csv = require("csvtojson");
    const comics = csv().fromFile("../assets/Website-Metadata.csv");
    // const graphicIndiaComics = [];
    // const liquidComics = [];
    // const valiantComics = [];
    // for (let i = 0; i < rows.length; i++) {
    //     // const row = rows[i];
    //     const columns = row.split(",");
    //     const comic = new Comic(columns[0], columns[1], columns[2], columns[3], columns[4]);
    //     if (comic.publisher === "Graphic India") {
    //         graphicIndiaComics.push(comic);
    //     } else if (comic.publisher === "Liquid Comics") {
    //         liquidComics.push(comic);
    //     } else if (comic.publisher === "Valiant Comics") {
    //         valiantComics.push(comic);
    //     }
    // }
    // graphicIndiaComics[0].coverImage = require("../assets/android.png");
    return comics;
}

export default function Library() {
    // const comics = readCSV();
    return (
        <div className="div">
            <NavBar currentPage={"Library"} />
            <div className="grid grid-cols-4 gap-4 px-16 py-10">
                {/* <ComicCard comic={graphicIndiaComics[0]} /> */}
            </div>
        </div>
    );
}