
type ButtonCancelProps = {
  type : "submit" | "reset" | "button"
  name : string
  onClick : () => void
}

const ButtonCancel = ({ type, name, onClick } : ButtonCancelProps) => {
  return (
    <button
      type={type}
      className="
        px-3 
        py-2.5 
        flex gap-2 
        items-center 
        justify-center 
        text-xs 
        text-center 
        font-medium
        text-gray-800 
        border 
        border-gray-300 
        rounded-md 
        cursor-pointer
        hover:bg-gray-100
      "
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default ButtonCancel