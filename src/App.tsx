import { useState } from "react"
import Modal from "./components/modal/Modal"

const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
      <p className="text-base text-gray-800">Click here to show modal</p>
      <button
        onClick={() => setShowModal(true)} 
        className="px-4 py-2 rounded-lg bg-blue-500 text-sm text-white cursor-pointer"
      > 
        Click Modal
      </button>
      <Modal
        icon="alert"
        buttonActionName="Logout"
        onAction={() => {}}
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        title="Are you sure want to logout?"
      />
    </div>
  )
}

export default App