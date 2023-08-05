export default function Button({
classname = "",
onClick = () => {},
text = ""
}){
    return(
        <button
        onClick={onClick}
        className={`${classname} mt-9 h-8 ml-8 flex items-center  justify-center rounded-xl p-5 
        text-white
        bg-brand-500
        hover:cursor-pointer `}
        >
        {text}
        </button>
    )
}