import React, { useState } from "react";
import Confirmation from "./confirmation";
import DeleteProduct from "./confirmation.delete";
import {MdDeleteForever} from "react-icons/md";
export default function EditProduct({
    title = "",
    message="",
    className = "",
    buttonName = "",
    onConfirm = () => {},
    onDelete = () => {}
}) {
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
      <>
      <button
      // "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        className={className}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonName}
      </button>
      {showModal ? (
        <>
        <div className="text-black">
          <div
            className=" mt-20 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   {title}
                  </h3>
                  <div className="flex flex-grow flex-row justify-end">
                  <button
                    className="text-red-600 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowEdit(true)
                      setShowModal(false) 
                     
                      }}
                  >
                    <MdDeleteForever className="text-3xl"/>
                  </button>
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {message}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false) 
                      }}
                  >
                    Done
                  </button>
                  <Confirmation
                    title="Confirmation"
                    message="Are you sure you want to update this product?"
                    className = "text-white bg-green-600 hover:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    buttonName = "Confirm"
                    onConfirm = {onConfirm}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : 

      //buat delete bisa sih ini
      showEdit ? (
        <>
        <DeleteProduct
                    title="Confirmation"
                    message="Action can't be undone. Are you sure you want to delete this product?"
                    className = "text-white bg-green-600 hover:bg-green-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    buttonName = "Delete"
                    onConfirm = {onDelete}
                  />          
      </>
      ) : null}


                    
    </>
  );
}