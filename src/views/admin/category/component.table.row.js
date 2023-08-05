import Confirmation from "../product/components/confirmation"

const RenderTableRows = ({
    categories = [],
    id = null,
    actionType = "",
    refEditedName= null,
    refEditedParentId = null,
    // refEditedUserAddress = null,
    onButtonEdit = (id) => {},
    onButtonDelete = (id, name)=> {},
    onButtonSave = (id,name,parentId) => {},
    onButtonCancel = () => {}
}) => categories.map((category, index) => {
    if (category.id === id && actionType !== "DELETE") {
        return (
            <EditedRow key={index}
                category={category}
                refEditedName = {refEditedName }
                refEditedParentId = {refEditedParentId }
                onButtonSave={onButtonSave}
                onButtonCancel={onButtonCancel}
            />
        )
    } else {
        return (
            <NormalRow key={index}
                category={category} 
                onButtonEdit={onButtonEdit} 
                onButtonDelete={onButtonDelete}
            />
        )
    }
})

function NormalRow ({
    category= { id : null, name : "",  parentId : ""}, 
    onButtonEdit = (id) => {},
    onButtonDelete = (id, name) => {}
}) {
    return (
        <tr className="hover:bg-slate-100 hover:shadow capitalize">
            <td className="border border-slate-300 text-center py-2 ">{category.id}</td>
            <td className="border border-slate-300 px-2 py-2">{category.name}</td>
            <td className="border border-slate-300 text-center py-2">{category.parentId? category.parentId : "null"}</td>
            <td className="border border-slate-300 px-2 py-2 flex flex-row justify-between gap-2">
                <button className="py-1 rounded text-white bg-amber-500 grow shadow-sm active:scale-90 transition-all ease-in duration-200 capitalize"
                    onClick={() => onButtonEdit(category.id)}
                >
                    edit
                </button>
                {/* <button className="py-1 rounded text-white bg-red-500 grow shadow-sm active:scale-90 transition-all ease-in duration-200 capitalize"
                    onClick={() => onButtonDelete(category.id, category.name)}
                >
                    delete
                </button> */}
                <Confirmation
                    title="Confirmation"
                    message= {`Are you sure you want to delete ${category.name}?`}
                    className = "py-1 rounded text-white bg-red-500 grow shadow-sm active:scale-90 transition-all ease-in duration-200 capitalize"
                    buttonName = "delete"
                    onConfirm = {() => onButtonDelete(category.id, category.name)}
                  />
                
            </td>
        </tr>
    )
}

function EditedRow ({
    category = { id : null, name : "",  parentId : ""},
    refEditedName = { current : null },
    refEditedParentId = { current : null },
    // refEditedUserBirthdate = { current : null },
    onButtonCancel = () => {},
    onButtonSave = (id,name,parentId) => {}
}) {
    return (
        <tr className="hover:bg-slate-100 hover:shadow capitalize">
            <td className="border border-slate-300 text-center py-2 ">{category.id}</td>
            <td className="border border-slate-300 text-center px-2 py-2">
                <input type="text" ref={refEditedName}
                    defaultValue={refEditedName?.current?.value || category.name}
                    placeholder="category's name"
                    className="border border-slate-300 px-2 py-1 rounded-md w-full" 
                />
            </td>
            <td className="border border-slate-300 text-center py-2">
                <input type="number" ref={refEditedParentId}
                    defaultValue={refEditedParentId?.current?.value || category.parentId} 
                    placeholder={refEditedParentId?.current?.value || category.parentId} 
                    className="border border-slate-300 px-2 py-1 rounded-md w-full"
                />
            </td>

            <td className="border h-full border-slate-300 px-2 py-2 flex flex-row justify-between gap-2">
                <button onClick={onButtonCancel}
                    className="py-1 rounded text-white bg-red-500 grow shadow-sm active:scale-90 transition-all ease-in duration-200 capitalize"
                >
                    cancel
                </button>
                {/* <button onClick={onButtonSave}
                    className="py-1 rounded text-white bg-green-500 grow shadow-sm active:scale-90 transition-all ease-in duration-200 capitalize"
                >
                    save
                </button> */}
                <Confirmation
                    title="Confirmation"
                    message="Are you sure you want to save changes?"
                    className = "py-1 rounded text-white bg-green-500 grow shadow-sm active:scale-90 transition-all ease-in duration-200 capitalize"
                    buttonName = "save"
                    onConfirm = {()=>onButtonSave(category?.id, refEditedName?.current?.value,refEditedParentId?.current?.value)}
                  />
            </td>
        </tr>
    )
}

export default RenderTableRows