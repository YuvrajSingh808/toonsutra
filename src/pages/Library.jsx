import { NavBar } from "../components/NavBar";
import ComicCard from "../components/ComicCard";
import CSVFile from "../assets/Website-Metadata.csv";
import Papa from "papaparse";
import { useState, useEffect, useRef } from 'react';
import PreviewCard from "../components/PreviewCard";
import Footer from "../components/Footer";
var comicList = {
    "Graphic India": [],
    "Liquid Comics": [],
    "Valiant Comics": [],
}


export default function Library(props) {
    const ref = useRef(null);
    const [comics, setComics] = useState([]);
    const [preview, setPreview] = useState([]);
    const [publisher, setPublisher] = useState("Graphic India");
    const [highlist, setHighlist] = useState([true, false, false]);
    useEffect(() => {
        readCSV();
    }, []);

    const handleChange = (pub) =>{
        setPublisher(pub);
        preview.pop();
        preview.pop();
        preview.push(comicList[publisher][0][0], comicList[publisher][1]);   
        setPreview(preview);
        renderCards();
    }

    const renderCards = () => {
        if (publisher === "Graphic India") {
            setHighlist([true, false, false]);
            changeSelected("Graphic India");
        }
        else if (publisher === "Liquid Comics") {
            setHighlist([false, true, false]);
            changeSelected("Liquid Comics");
        }
        else {
            setHighlist([false, false, true]);
            changeSelected("Valiant Comics");
        }
        var comicCard = [];
        for (var i = 0; i < comicList[publisher].length; i += 2) {
            if (i === 0) {
                comicCard.push(
                    <PreviewCard
                        title={preview[0]}
                        description={preview[i + 1]}
                        publisher={publisher.replace(/\s+/g, '')}
                        coverImage={preview[0].replace(/\s+/g, '')}
                    />
                )
            }
            comicCard.push(<ComicCard publisher={publisher.replace(/\s+/g, '')} coverImage={comicList[publisher][i][0].replace(/\s+/g, '')} />)
        }
        setComics(comicCard);
    }

    const parseData = (data) => {
        for (let i = 0; i < data.length; i++) {
            // if title contains ":" then remove it
            if (data[i].TITLE.includes(":")) {
                data[i].TITLE = data[i].TITLE.replace(":", "");
            }
            else if(data[i].TITLE.includes('"')){
                data[i].TITLE = data[i].TITLE.replace('"', "");
            }
            comicList[data[i].PUBLISHER].push([data[i].TITLE], Object.values(data[i])[2]);
        }
        preview.pop();
        preview.pop();
        preview.push(comicList[publisher][0][0], comicList[publisher][1]);   
        setPreview(preview);
        renderCards();
    }

    const handlePreview = (index) => {
        index *= 2;
        preview.pop();
        preview.pop();
        preview.push(comicList[publisher][index-2][0], comicList[publisher][index -1]);   
        setPreview(preview);
        renderCards();
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

    const [selected, changeSelected] = useState("Graphic India");

    return (
        <div className="div">
            <NavBar currentPage={"Library"} />
            <div className="flex place-content-center mt-8">
                <div className="hidden sm:block">
                    <button className="text-[#021028] text-[30px] hover:font-medium pr-[79px] pl-[67px] py-2 bg-[#E8E8E8] rounded-l-full" onClick={() => {handleChange("Graphic India")}}><p className={highlist[0] ? "font-medium" : ""}>Graphic India</p></button>
                    <button className="text-[#021028] text-[30px] hover:font-medium py-2 bg-[#E8E8E8] " onClick={() => {handleChange("Liquid Comics")}}><p className={highlist[1] ? "font-medium" : ""}>Liquid Comics</p></button>
                    <button className="text-[#021028] text-[30px] hover:font-medium pl-[79px] pr-[67px] px-2 py-2 bg-[#E8E8E8] rounded-r-full" onClick={() => handleChange("Valiant Comics")}><p className={highlist[2] ? "font-medium" : ""}>Valiant Comics</p></button>
                </div>
                <div className="sm:hidden flex w-full justify-end px-4">
                    <div class="dropdown inline-block relative z-50">
                        <button class="flex items-center space-x-2 bg-[#E8E8E8] px-4 py-1 rounded-md">
                            <span class={props.textColor + ` text-[10px] ${props.isSelected ? "font-bold" : "font-normal hover:text-gray-400 "}`}> {selected} </span>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul class=" w-40 dropdown-menu absolute hidden z-80 text-[#000] pt-1 text-xs -ml-8 text-center mx-auto bg-[#E8E8E8]">
                            <button onClick={() => handleChange("Graphic India")} >
                                <p class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                    Graphic India
                                </p>
                            </button>
                            <button onClick={() => handleChange("Liquid Comics")} >
                                <p class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                    Liquid Comics
                                </p>
                            </button>
                            <button onClick={() => handleChange("Valiant Comics")} >
                                <p class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                    Valiant Comics
                                </p>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col place-content-center">
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5 sm:px-16 sm:py-10 px-4 py-4">
                    {comics.map((comic, index) => {
                        return (
                            <>
                                {index === 0 ? <div className="md:row-span-2 md:col-span-2" ref={ref}>{comic}</div> : <div onClick={() => handlePreview(index)}>{comic}</div>}
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="sticky"><Footer /></div>
        </div>
    );
}