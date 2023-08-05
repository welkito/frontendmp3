import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import RenderTableRows from "./component.table.row"


// @hook and actions
// import { deleteUser, addUser, editUser, searchUser, clearSearch, sorting } from "../../store/slices/users"
// import { getUsers } from "../../store/slices/users/slices"
import { getCategory, addCategory, deleteCategory, updateCategory } from "store/slices/product/slices"
import Category from "../product/components/category";
function HomePage () {
    const dispatch = useDispatch()
    const { category,secondCategory} = useSelector(state => {
        return {
            category : state.product?.secondCategory,
            // secondCategory : state.product?.secondCategory,
        }
    })
    const [id, setId] = useState(null)
    const [alert, setAlert] = useState({ show : false, message : "" })
    const [confirmation, setConfirmation] = useState({ show : false, actionType : null, message : "" })
    const [search, setSearch] = useState("")
    const [addNewCategory,setAddNewCategory] = useState("")
    const [addNameCategory,setAddNameCategory] = useState(`Parent ID`)

    // @hooks and redux

    // @input add new user's data
    const name = useRef(null)
    const parentId = useRef(null)
    const categoryId= useRef(null)

    // @input edit user's data
    const editedName= useRef(null)
    const editedParentId = useRef(null)
    const editedCategoryId = useRef(null)

    const onButtonAdd = () => {
        // @validation => all fields are required
        if (!name.current.value) {
            console.log("error1")
            setAlert({ show : true, message : "Category name is required!" })
            return
        }
        // @validate => check if user's name already exist
        const isExist = category.some(user => user.name === name.current.value)
        if (isExist) {
            console.log("error3")
            setAlert({ show : true, message : "Category already exist!" })
            return
        }
        //optional for adding parent id
        if (!addNewCategory) {
            setAlert({ show : true, message : "Parent ID must be assigned!" })
            return
        }
         // @create new data
         const newUser = {
            name : name.current?.value,
            parentId : addNewCategory
        }

        // @set new user to users state
        dispatch(addCategory(newUser))

        // @reset input fields
        name.current.value = ""
        setAddNameCategory("Parent ID")
        setAddNewCategory("")
    }

    const onButtonCancel = () => {
        // @rest confirmation state and id
        setConfirmation({ show : false, actionType : null, message : "" })
        setId(null)
    }

    const onButtonConfirmDelete = (id) => {
        console.log("masuk delete kok")
        console.log(id)
        dispatch(deleteCategory(id))

        // @reset id and confirmation state
        setId(null)
        setConfirmation({ show : false, actionType : null, message : "" })
    }

    const onButtonConfirmSave = (id,name,parentId) => {
        console.log("masuk save kok")
        const data = {
            //is a must!
            id : id
        }
        //kalau ada name
        if (name) {
            data.name = name;
        }
        //kalau ada parentId
        if (parentId){
            data.parentId = parentId;
        }
        console.log(data)
        dispatch(updateCategory(data))

        // @reset id and confirmation state
        setId(null)
        setConfirmation({ show : false, actionType : null, message : "" })
    }
    // @side-effect -> debounce search
    useEffect(() => {
        // guard
        if (!search) return
        const timeoutID = setTimeout(() => {
            // dispatch(searchUser(search))
        }, 800)

        return () => clearTimeout(timeoutID)
    }, [search])

    // @side-effect
    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const onChooseAddCategory = (id,name) =>{
        //set state sesuai id
        setAddNewCategory(id)
        setAddNameCategory(name)
    }

    return (
        <div className="flex flex-col items-start justify-start gap-5 h-full w-full py-10 bg-neutral-50">
                <div className="mb-2 mt-4 flex items-center justify-between px-[26px]">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                    Content
                </h4>
                </div>
                <table className="border-collapse border rounded dark:text-white border-slate-400 w-full shadow-sm">
                    <thead className="bg-slate-200 shadow-sm">
                        <tr>
                            <th className="border border-slate-300 text-center px-2">ID</th>
                            <th className="border border-slate-300 px-4 py-2">Name</th>
                            <th className="border border-slate-300 px-4 py-2">Parent ID</th>
                            <th className="border border-slate-300 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="h-10 overflow-hidden">
                        <RenderTableRows
                            categories={category}
                            id={id}
                            actionType={confirmation?.actionType}
                            refEditedName={editedName}
                            refEditedParentId={editedParentId}
                            onButtonCancel={() => setId(null)}
                            onButtonDelete={(id, name) => {
                                setId(id)
                                setConfirmation({ show : true, actionType : "DELETE", message : `Are you sure you want to delete ${name}?` })
                                onButtonConfirmDelete(id)
                            }}
                            onButtonEdit={(id) => setId(id)}
                            onButtonSave={(id,name,parentId) => {
                                setConfirmation({ show : true, actionType : "UPDATE", message : `Are you sure you want to save?` })
                                onButtonConfirmSave(id,name,parentId)
                            }}
                        />
                    </tbody>
                </table>


            {/* @new input */}
            <div className="mb-2 mt-4 flex items-center justify-between px-[26px]">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                    Add New Category
                </h4>
            </div>
            <div className="w-full my-3 flex flex-row flex-wrap item-center justify-between gap-2">
                <input type="text" ref={name}
                    className="border border-slate-300 px-4 py-2 rounded-md grow" 
                    placeholder="New category's name..."
                />
                {/* <input type="date" ref={categoryId}
                    className="border border-slate-300 px-4 py-2 rounded-md grow"
                    placeholder="categoryId"
                /> */}
                <div className="flex flex-row justify-start flex-grow ">
                    <Category
                    data={category}
                    onChooseCategory={onChooseAddCategory}
                    selected={addNameCategory}
                    />
                </div>
                <button onClick={onButtonAdd}
                    className="bg-brand-700 rounded-xl text-white w-full max-w-sm"
                >
                    Add
                </button>
            </div>
            {/* Alert
            <Alert show={alert.show} 
                message={alert.message} 
                onClick={() => setAlert({ show : false, message : "" })}
            /> */}

            {/* @confirmation */}
            {/* <Confirmation show={confirmation.show}
                message={confirmation.message}
                onCancel={onButtonCancel}
                onConfirm={onButtonConfirm}
            /> */}
        </div>
    )
}

export default HomePage