
type Button = {
  name : string
  onClick? : () => void
}

const Button = ({ onClick, name } : Button) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='px-3 py-2 text-xs text-center font-semibold leading-normal text-white hover:shadow-md rounded-md cursor-pointer bg-blue-500 hover:bg-blue-hover'
    >
      {name}
    </button>
  )
}

export default Button