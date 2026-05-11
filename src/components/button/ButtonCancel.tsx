
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
        px-6
        py-3 
        flex gap-2 
        items-center 
        justify-center 
        text-sm 
        text-center 
        font-medium
        text-white
        border 
        border-gray-600
        rounded-md 
        cursor-pointer
        hover:bg-white/50
      "
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default ButtonCancel