import { NavBar } from "../components/NavBar";
import ComicCard from "../components/ComicCard";
import CSVFile from "../assets/Website-Metadata.csv";
import Papa from "papaparse";
import {useState, useEffect, useRef} from 'react';
import PreviewCard from "../components/PreviewCard";
import Footer from "../components/Footer";
var comicList = {
    "Graphic India": [],
    "Liquid Comics": [],
    "Valiant Comics": [],
}


export default function Library() {
    const ref = useRef(null);
    const [comics, setComics] = useState([]);
    const [publisher, setPublisher] = useState("Graphic India");
    const [highlist, setHighlist] = useState([true, false, false]);
    useEffect(() => {
        readCSV();
    }, []);

    const handleChange = (publisher) => {
        setPublisher(publisher);
        if(publisher === "Graphic India") setHighlist([true, false, false]);
        else if(publisher === "Liquid Comics") setHighlist([false, true, false]);
        else setHighlist([false, false, true]);
        var comicCard = [];
        for (var i = 0; i < comicList[publisher].length; i+=2) {
            if(i===0){
                comicCard.push(<PreviewCard title={comicList[publisher][i][0]} description={comicList[publisher][i+1]} coverImage="5.png"/>)
            }
            else comicCard.push(<ComicCard coverImage="5.png" />);
        }
        setComics(comicCard);
    }

    const parseData = (data) => {
        for(let i =0; i < data.length; i++){
            comicList[data[i].PUBLISHER].push([data[i].TITLE], Object.values(data[i])[2]);
        }
        handleChange("Graphic India");
    }

    const handlePreview = (index) => {
        index*=2;
        var tempTitle = comicList[publisher][0][0];
        var tempDescription = comicList[publisher][1];
        comicList[publisher][0][0] = comicList[publisher][index][0];
        comicList[publisher][1] = comicList[publisher][index+1];
        comicList[publisher][index][0] = tempTitle;
        comicList[publisher][index+1] = tempDescription;
        handleChange(publisher);
        ref.current?.scrollIntoView({ behavior: 'smooth' });    
    }

    const readCSV = () => {
        fetch(CSVFile)
            .then(r => r.text())
            .then(text => {
                Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function (results) {
                        parseData(results.data);
                    },
                });
        });
    }

    return (
        <div className="div">
            <NavBar currentPage={"Library"} />
            <div className="flex place-content-center ">
                <div className="hidden sm:block">
                    <button className="text-black hover:text-white px-2 pl-4 py-2 bg-zinc-400 rounded-l-full" onClick={()=>handleChange("Graphic India")}><p className={highlist[0] ? "font-bold" : ""}>Graphic India</p></button>
                    <button className="text-black hover:text-white px-2 py-2 bg-zinc-400 " onClick={()=>handleChange("Liquid Comics")}><p className={highlist[1] ? "font-bold" : ""}>Liquid Comics</p></button>
                    <button className="text-black hover:text-white px-2 pr-4 py-2 bg-zinc-400 rounded-r-full" onClick={()=>handleChange("Valiant Comics")}><p className={highlist[2] ? "font-bold" : ""}>Valiant Comics</p></button>
                </div>
                <div className="block sm:hidden">
                
                </div>
            </div>
            <div className="flex flex-col place-content-center">
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5 sm:px-16 sm:py-10 px-4 py-4">
                    {comics.map((comic, index) => {
                        return (
                            <>
                                {index === 0 ? <div className="md:row-span-2 md:col-span-2" ref={ref}>{comic}</div> : <div onClick={()=>handlePreview(index)}>{comic}</div>}
                            </>
                    )})}
                </div>
            </div>
            <div className="sticky"><Footer /></div>
        </div>
    );
}