import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import Card from "components/card";
import {FiEdit3} from "react-icons/fi";
import { useDropzone } from "react-dropzone"
import EditProduct from "views/admin/product/components/editProduct";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "store/slices/product/slices";
import Category from "../../views/admin/product/components/category";
import { updateProduct,deleteProduct } from "store/slices/product/slices";

function Edit({
  onEdit=(data,file)=>{}, 
  id, name, description, price,imageURL, category
}){
  // console.log(name,description,price,category[0])
  const categoryValue = category ? category[0] : "" 
  const {secondCategory} = useSelector(state => {
    return {
        secondCategory : state?.product?.secondCategory
    }
})

    const dispatch = useDispatch()
    const nameRef = useRef(null);
    const descRef = useRef(null);
    const priceRef = useRef(null);
    const [addCategory,setAddCategory] = useState("")
    const [addNameCategory,setAddNameCategory] = useState(`${categoryValue}`)
    const [file, setFile] = useState(null)
    //useEffect
    useEffect(()=>{
 
    },[file])
 // bagian add product
    const onChooseAddCategory = (id,name) =>{
        //set state sesuai id
        setAddCategory(id)
        setAddNameCategory(name)
    }

      const onButtonDeleteConfirm = () =>{
        dispatch(deleteProduct(id))
      }

      const onButtonAddConfirm =  () => {
        const formData = new FormData()
        const data = {
          id : id
        }
          if(nameRef?.current?.value){
            data.name = nameRef?.current?.value
          }
          if(descRef.current?.value){
            data.description = descRef.current?.value
          }
          if(priceRef.current?.value){
            data.price = priceRef.current?.value
          }
          if(addCategory){
            data.categoryId = addCategory
          }
          formData.append('data', JSON.stringify(data))
          if(file){
            formData.append('file', file)
          }
          console.log(data)
          console.log(formData)
        dispatch(updateProduct(formData))
        // set smua usestate jadi default
        setFile(null)
        setAddCategory("")
        setAddNameCategory(`${categoryValue}`)
    }
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

  return(
    <EditProduct
    title={"Edit Product"}
                message={
                <div className="w-full h-full flex flex-col items-center z-50"> 
                    {/*name */}
                    <div className="ml-[18px] flex h-[50px] w-96 flex-row items-center justify-start"> 
                        <span className="flex flex-row justify-start w-[100px] gap-2">
                            Name 
                        </span>
                        <p className="w-8">:</p>
                        <div className="flex flex-row justify-startflex-grow">
                            <input
                            className="rounded-lg bg-brandLinear text-white text-lg p-1 placeholder-white"
                            type = "text"
                            ref={nameRef}
                            placeholder={name}
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
                            className="rounded-lg bg-brandLinear text-white text-lg p-1 placeholder-white"
                            type = "text"
                            ref={descRef}
                            placeholder={description}
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
                            className="rounded-lg bg-brandLinear text-white text-lg p-1 placeholder-white"
                            type = "number"
                            ref={priceRef}
                            placeholder={price}
                            />
                        </div>
                    </div>
                    {/* category */}
                    <div className="ml-[18px] flex h-[50px] w-96  flex-row items-center justify-start"> 
                        <span className="flex flex-row justify-start w-[100px] gap-2">
                            Category
                        </span>
                        <p className="w-8">:</p>
                        <div className="flex flex-row justify-start flex-grow ">
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
                className={`absolute top-3 right-3 flex items-center justify-center rounded-full bg-brand-500 p-2 text-white hover:cursor-pointer`}
                onConfirm={onButtonAddConfirm}
                onDelete={onButtonDeleteConfirm}
                buttonName={<div className="flex h-full w-full items-center justify-center rounded-full text-xl text-white dark:text-navy-900">
                <FiEdit3 className="text-white"/>
            </div>}
    />
  )

}





const ProductCard = ({id, title, author, price, image, extra , categoryProduct, onEdit=(data,file)=>{}}) => {
  const [heart, setHeart] = useState(true);

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-[200px] w-[230px] rounded-xl 3xl:h-full 3xl:w-full p-"
            alt=""
          />
          {/* buat lempar ke edit page */}
          {/* <button
            onClick={() => setHeart(!heart)}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-brand-500 p-2 text-white hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl text-white dark:text-navy-900">
                <FiEdit3 className="text-white"/>
            </div>
          </button> */}
          <Edit
            onEdit={onEdit}
            id={id}
            name={title}
            description={author}
            price={price}
            category={categoryProduct}
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-xl font-bold text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="flex flex-row items-center text-xs font-bold mt-2 text-white">
              <CategorySplit
              categoryProduct = {categoryProduct}

              />
            </p>
            <p className="mt-1 text-xs font-medium text-gray-600 md:mt-2">
              {author}{" "}
            </p>
          </div>

               
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              $ {price} <span></span>
            </p>
          </div>
          {/* <button
            href=""
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Place Bid
          </button> */}
        </div>
      </div>
    </Card>
  );
};

function CategorySplit(
  categoryProduct
){
  return categoryProduct?.categoryProduct.map((item)=>{
    console.log(item)
    return(<div className="p-2 rounded-xl mr-5 bg-brand-400">{item}</div>)

  })
}

export default ProductCard;
