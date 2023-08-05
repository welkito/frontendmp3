import { FiSearch } from "react-icons/fi";
import {AiOutlineSend,AiOutlinePlus} from "react-icons/ai";

// import Button from "../report/components/button";
import Catalog from "./components/catalog";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "store/slices/product/slices";
import { getCategory } from "store/slices/product/slices";
import AddProduct from "views/admin/product/components/addProduct";
import Category from "./components/category.js";
import { SortLetter, SortPrice } from "./components/sort";
import { useDropzone } from "react-dropzone"
import { addProducts } from "store/slices/product/slices";
import Pagination from "./components/pagination";

export default function Product(){
    //perlu data product
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //useRef
    const inputRef = useRef(null);
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const priceRef = useRef(null);
    
    //useState
    const [chooseCategory,setChooseCategory] = useState("")
    const [addCategory,setAddCategory] = useState("")
    const [addNameCategory,setAddNameCategory] = useState("Choose Category")
    const [chooseLetter,setChooseLetter] = useState("asc")
    const [choosePrice,setChoosePrice] = useState("asc")
    const [nameCategory,setNameCategory] = useState("Choose Category")
    const [nameLetter,setNameLetter] = useState("Sort Letter")
    const [namePrice,setNamePrice] = useState("Sort Price")
    const [words,setWords] = useState("")
    const [file, setFile] = useState(null)
    
    //useSelector
    const {productData,currentPage,totalPage,category,secondCategory} = useSelector(state => {
        return {
            productData : state?.product?.productData,
            currentPage : state?.product?.currentPage,
            totalPage : state?.product?.totalPage,
            category : state?.product?.category,
            secondCategory : state?.product?.secondCategory
        }
    })
    
    //useEffect
    useEffect(() => {
        dispatch(getProducts({cat_id : chooseCategory, word : "", 
            sortLetter : chooseLetter, sortPrice : choosePrice, page : currentPage}))
        dispatch(getCategory())
    },[])

    useEffect(()=>{
 
    },[file])

    //@function sections
    const onEdit = (data,file) => {
        console.log("")
    }

    // bagian add product
    const onChooseAddCategory = (id,name) =>{
        //set state sesuai id
        setAddCategory(id)
        setAddNameCategory(name)
    }

    //bagian show product
    const onChooseCategory = (id,name) =>{
        //set state sesuai id
        setChooseCategory(id)
        setNameCategory(name)
    }
    const onChooseSortLetter = (id,name) =>{
        //set state sesuai id
        setChooseLetter(id)
        setNameLetter(name)
    }
    const onChooseSortPrice = (id,name) =>{
        //set state sesuai id
        setChoosePrice(id)
        setNamePrice(name)
    }

    const submit = () =>{
        setWords(inputRef.current?.value)
        dispatch(getProducts({cat_id : chooseCategory, word : words, 
        sortLetter : chooseLetter, sortPrice : choosePrice, page : 1}))
    }

    //tombol confirm utk add product
    const onConfirm = () => {
        console.log("hehe")
        //dispatch add product
        //dispatch get product
    }

    //tombole confirm utk add formdata product
    const onButtonAddConfirm =  () => {
        const data = {
            name : nameRef?.current?.value,
            description : descRef.current?.value,
            price : priceRef.current?.value,
            categoryId : addCategory
        }
        const formData = new FormData()
        formData.append('data', JSON.stringify(data))
        formData.append('file', file)
        dispatch(addProducts(formData))
        // set smua usestate jadi default
        setFile(null)
        setAddCategory("")
        setAddNameCategory("Choose Category")
    }
    // const [file, setFile] = useState(null)
    // @event handler
     const onDrop = (acceptedFiles) => {
         // console.log(acceptedFiles)
         setFile(file => file = acceptedFiles[0])
         // console.log(acceptedFiles[0])
     }
     const { getRootProps, getInputProps, open} = useDropzone({
         onDrop , 
         maxFiles: 1 , 
         accept : {'image/*' : [ ".jpg" , ".png" , ".jpeg" ]} ,
         noClick : true ,
         noKeyboard : true
     }) 
     const onChangePagination = (type) => {
        dispatch(getProducts({cat_id : chooseCategory, word : words, 
            sortLetter : chooseLetter, sortPrice : choosePrice, 
            page : type === "prev" ? +currentPage - 1 : +currentPage + 1}))
    }

     
    return(
        <div className="flex w-full flex-col gap-5 mt-5">
            <div className="mb-2 mt-4 flex items-center justify-between px-[26px]">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                    Find
                </h4>
            </div>
            {/* bagian bar sort,filter,search */}
            <div className="p-4 bg-white dark:bg-navy-700 rounded-2xl flex justify-center items-center">
            {/* confirmation/modal utk add product */}
            <AddProduct
                title={"Add Product"}
                message={
                <div className="flex flex-col items-center"> 
                    {/*name */}
                    <div className="ml-[18px] flex h-[50px] w-96 flex-row items-center justify-start"> 
                        <span className="flex flex-row justify-start w-[100px] gap-2">
                            Name 
                        </span>
                        <p className="w-8">:</p>
                        <div className="flex flex-row justify-startflex-grow">
                            <input
                            className="rounded-lg bg-brandLinear text-white text-lg p-1"
                            type = "text"
                            ref={nameRef}
                            placeholder="name..."
                            />
                        </div>
                    </div>
                    {/* descrition */}
                    <div className="ml-[18px] flex h-[50px] w-96 flex-row items-center justify-start"> 
                        <span className="flex flex-row justify-start w-[100px] gap-2">
                            Description
                        </span>
                        <p className="w-8">:</p>
                        <div className="flex flex-row justify-startflex-grow">
                            <input
                            className="rounded-lg bg-brandLinear text-white text-lg p-1"
                            type = "text"
                            ref={descRef}
                            placeholder="Description..."
                            />
                        </div>
                    </div>
                    {/* price */}
                    <div className="ml-[18px] flex h-[50px] w-96 flex-row items-center justify-start"> 
                        <span className="flex flex-row justify-start w-[100px] gap-2">
                            Price ($)
                        </span>
                        <p className="w-8">:</p>
                        <div className="flex flex-row justify-startflex-grow">
                            <input
                            className="rounded-lg bg-brandLinear text-white text-lg p-1"
                            type = "number"
                            ref={priceRef}
                            placeholder="Price($)"
                            />
                        </div>
                    </div>
                    {/* category */}
                    <div className="ml-[18px] flex h-[50px] w-96  flex-row items-center justify-start"> 
                        <span className="flex flex-row justify-start w-[100px] gap-2">
                            Category 
                        </span>
                        <p className="w-8">:</p>
                        <div className="flex flex-row justify-start flex-grow">
                            <Category
                            data={secondCategory}
                            onChooseCategory={onChooseAddCategory}
                            selected={addNameCategory}
                            />
                        </div>
                    </div>
                    {/* image*/}
                    <div className="ml-[18px] flex h-[50px] w-96 flex-col items-start justify-center mt-7 mb-2">
                                 {/* all in one handle-image-input button */}
                                 <div  {...getRootProps()}>
                             <button
                             className="rounded-lg bg-gray-500  text-lg p-1 flex flex-row justify-center " 
                             onClick={open}                               
                             >Choose file
                             <input {...getInputProps({ name : 'image' })}/>
                            </button>
        
                        <div className="flex flex-row justify-start flex-grow">
                                 <div
                                className="flex flex-row justify-start w-[100px] gap-2" 
                                
                                >{file ? file.name : ""}
                                {/* <input {...getInputProps({ name : 'image' })}/> */}
                                </div>
                        </div>
                                 {/* <label className="label flex flex-row justify-center items-start mb-4">
                                     <span className="label-text-alt leading-none"></span>
                                 </label> */}
                        </div>
                               
                    </div>
                </div>
            }
                className={`fixed bottom-14 right-14 z-20 rounded-full bg-blueSecondary p-2 hover:bg-green-700`}
                onConfirm={onButtonAddConfirm}
                buttonName={<AiOutlinePlus className="text-white text-3xl"/>}
            />
            {/* tombol add product */}
            {/* confirmation/modal utk edit product */}
            {/* confirmation utk "act cant be undone. are you sure you want to delete/edit?" */}
            <div className="flex w-full flex-row gap-3">
            <div className="flex h-full items-center border border-gray-400 rounded-xl pt-4 pb-4 pl-2 pr-2 bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[240px]">
                <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                    <p className="pl-3 pr-2 text-xl">
                        <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
                    </p>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search..."
                        class="block h-full w-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
                    />
                </div>
                {/* <h1>hello</h1> */}
            </div>
            {/* category */}
            <Category
                data={category}
                onChooseCategory={onChooseCategory}
                selected={nameCategory}
            />
            {/* <h1>sort price</h1> */}
            <SortPrice
            selected={namePrice}
            onChooseSortPrice={onChooseSortPrice}
            />
            {/* <h1>sort date</h1> */}
            <SortLetter
            selected={nameLetter}
            onChooseSortLetter={onChooseSortLetter}
            />
            <button
                className="rounded-xl flex items-center justify-center p-3 
                text-white
                bg-brand-600
                hover:cursor-pointer"
                onClick={submit}
                >
                <div className="flex flex-row gap-2 justify-center items-center">
                    <AiOutlineSend className="text-xl" />
                    Submit Filter
                </div>
            </button>
            </div>
            </div>

            <div className="mb-4 mt-2 flex items-center justify-between px-[26px]">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                    Result
                </h4>
            </div>
            <Pagination
                hiddenPrev = {currentPage <= 1 ? "hidden" : ""}
                hiddenNext = {currentPage >= totalPage ? "hidden" : ""}
                currentPage = {currentPage}
                onChangePagination ={onChangePagination}          
            />
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-5 z-0">
            {/*  */}
            <Catalog
            productData={productData} 
            onEdit={onEdit}
            />
            </div>
            <Pagination
                hiddenPrev = {currentPage <= 1 ? "hidden" : ""}
                hiddenNext = {currentPage >= totalPage ? "hidden" : ""}
                currentPage = {currentPage}
                onChangePagination ={onChangePagination}          
            />
            
        </div>
    )
}