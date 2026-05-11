
type Button = {
  name : string
  onClick? : () => void
}

const Button = ({ onClick, name } : Button) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='px-6 py-3 text-sm text-center font-semibold leading-normal text-white hover:shadow-md rounded-md cursor-pointer bg-gray-700 hover:bg-white/50'
    >
      {name}
    </button>
  )
}

export default Button