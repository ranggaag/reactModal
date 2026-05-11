import { useState } from "react"
import Modal from "./components/modal/Modal"

const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center bg-gray-900">
      <button
        onClick={() => setShowModal(true)} 
        className="px-6 py-3 rounded-md hover:bg-white/50 bg-gray-700 text-base text-white font-medium cursor-pointer"
      >
        Open Modal
      </button>
      <Modal
        icon="alert"
        buttonActionName="Logout"
        onAction={() => console.log("action clicked")}
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        title="Are you sure?"
      />
    </div>
  )
}

export default App