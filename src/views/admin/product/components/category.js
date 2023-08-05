import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
  } from "@chakra-ui/react"
  import {IoFilterCircleOutline} from "react-icons/io5";
  import{
    TbChevronDown
  }from "react-icons/tb";

  import Dropdown from "./dropdown";

  function CategoryDetails({
    data =[],
    onChooseCategory = (id,name) =>{
    }
  }){return data.map((item)=>{
    return(
        <li className="z-50 gap-5 pl-4 pr-4 pt-2 pb-2  hover:bg-white hover:text-gray-800"
            onClick={() =>{
                console.log(item.id)
                onChooseCategory(item.id,item.name)}}
        >{item?.name}</li>
    )})
  }

  export default function Category({
    data =[],
    selected = "",
    onChooseCategory = (id,name) =>{
    }
  }){
    return( 
    <Dropdown
        button={
            <div className="bg-brand-300 text-white pl-4 pr-4 pt-3 pb-1 rounded-lg"> 
                <div className="flex flex-row justify-center items-center gap-2">
                    <IoFilterCircleOutline className="text-2xl"/>   
                    {selected? selected : Category}
                    <TbChevronDown/>
                </div>
            </div>
    }
        children={
            <ul className="border text-white bg-brand-300 border-gray-600 z-50 scale-100">
                <CategoryDetails
                data={data}
                onChooseCategory={onChooseCategory}
                />
            </ul>
        }
        classNames={"py-2 top-10 w-max"}
    />
    )
}
