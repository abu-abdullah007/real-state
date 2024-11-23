"use client"
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";

interface SearchPropsType {
    searchData: (value: { [key: string]: string  }) => void
}

export default function SearchBlock({ searchData }: SearchPropsType) {

    const [Title, setTitle] = useState<string>('')
    const [page, setPage] = useState<string>('')
    const [limit, setLimit] = useState<string>('')
    const [Sort, setSort] = useState<string>('')
    const [sortMethod, setSortMethod] = useState<string>('ascending')

    const handleClick = () => {
        console.log(Title, Number(page), Number(limit), Sort, sortMethod)
        searchData({ Title, page, limit, Sort, sortMethod })
    }

    const allInputs = [
        { placeholder: "Search By Title...", eventFire: setTitle },
        { placeholder: "Page Number", eventFire: setPage },
        { placeholder: "Set Limit", eventFire: setLimit },
        { placeholder: "Sort", eventFire: setSort },
    ]

    return (
        <div className="container mx-auto h-auto bg-[#ccc7c7] rounded-lg flex md:flex-row flex-col gap-y-10 justify-between items-center p-4">
            <div className="xl:w-3/5 w-1/2 flex-col gap-x-5 xl:flex-row flex justify-between items-center gap-y-8 px-10">
                {allInputs.map((item, index) => (
                    <div key={index} className="w-full py-2 px-4 h-full bg-[#f2f6f8] border border-[#00000077] rounded">
                        <input type="search"
                            onChange={(e) => {
                                item.eventFire(e.target.value)
                            }}
                            placeholder={item.placeholder}
                            className={`w-full bg-transparent outline-none`} />
                    </div>
                ))}
            </div>
            <div className="xl:w-2/5 w-1/2 flex-col xl:flex-row h-full xl:gap-y-0 gap-y-10 px-10 min-w-[300px] flex justify-between items-center">
                <select className="p-2 rounded max-h-12" onChange={(e) => {
                    setSortMethod(e.target.value)
                }}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <button className="active:scale-95 text-white bg-[#423838] rounded-md flex justify-between items-center p-4" onClick={handleClick}>
                    <ImSearch className="text-3xl opacity-75" />
                    <p className="whitespace-nowrap">Search Now</p>
                </button>
            </div>
        </div>
    );
}
