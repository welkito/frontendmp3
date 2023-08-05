import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function Pagination ({
    hiddenPrev = "hidden",
    hiddenNext = "hidden",
    currentPage = 1,
    onChangePagination = (type = "next") => {},

}) {
    return (
        <div className="w-full flex-grow flex flex-row justify-center gap-2">
            <button className={`bg-brand-700 text-white text-2xl rounded-full p-2 ${hiddenPrev}`}  
            onClick={() => 
                onChangePagination("prev") 
               }>
            <AiOutlineArrowLeft/>
            </button>
            <div className="dark:text-white text-brand-400 font-medium p-2">Page {currentPage}</div>
            <button className={`bg-brand-700 text-white text-2xl rounded-full p-2 ${hiddenNext}`}  
            onClick={() => 
                onChangePagination("next")}>
            <AiOutlineArrowRight/>
            </button>
        </div>
    )
}
