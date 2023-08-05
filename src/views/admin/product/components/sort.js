  import{
    TbChevronDown
  }from "react-icons/tb";
  import{
    IoPricetagsOutline
  }from "react-icons/io5";
  import{
    BiSort
  }from "react-icons/bi";

  import Dropdown from "./dropdown";

  export function SortPrice({
    selected = "",
    onChooseSortPrice = (id,name) =>{
    }
  }){
    return( 
    <Dropdown
        button={
            <div className="bg-brand-300 text-white pl-4 pr-4 pt-3 pb-1 rounded-lg">    
                <div className="flex flex-row justify-center items-center gap-2">
                    <IoPricetagsOutline />
                    {selected}
                    <TbChevronDown/>
                </div>
            </div>
            }
        children={
            <ul className="border text-white bg-brand-300 border-gray-600 z-50 scale-100">
                <li className="z-50 gap-5 pl-4 pr-4 pt-2 pb-2  hover:bg-white hover:text-gray-800"
                    onClick={() =>{
                        onChooseSortPrice("ASC","Low - High")}}
                >Low - High</li>
                <li className="z-50 gap-5 pl-4 pr-4 pt-2 pb-2  hover:bg-white hover:text-gray-800"
                    onClick={() =>{
                        onChooseSortPrice("DESC","High - Low")}}
                >High - Low</li>
                
            </ul>
        }
        classNames={"py-2 top-10 w-max"}
    />
    )
}

export function SortLetter({
    selected = "",
    onChooseSortLetter = (id,name) =>{
    }
  }){
    return( 
    <Dropdown
        button={
            <div className="bg-brand-300 text-white pl-4 pr-4 pt-3 pb-1 rounded-lg">    
                <div className="flex flex-row justify-center items-center gap-2">
                    <BiSort/>
                    {selected}
                    <TbChevronDown/>
                </div>
            </div>
            }
        children={
            <ul className="border text-white bg-brand-300 border-gray-600 z-50 scale-100 w-full">
                <li className="z-50 gap-5 pl-4 pr-4 pt-2 pb-2  hover:bg-white hover:text-gray-800 w-full"
                    onClick={() =>{
                        onChooseSortLetter("ASC","A - Z")}}
                >A - Z</li>
                <li className="z-50 gap-5 pl-4 pr-4 pt-2 pb-2  hover:bg-white hover:text-gray-800"
                    onClick={() =>{
                        onChooseSortLetter("DESC","Z - A")}}
                >Z - A</li>
                
            </ul>
        }
        classNames={"py-2 top-10 w-max"}
    />
    )
}
