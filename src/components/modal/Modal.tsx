import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import { FocusTrap } from 'focus-trap-react'
import { Icon } from '@iconify/react'

import PageModal from './PageModal'
import Button from '../button/Button'
import ButtonCancel from '../button/ButtonCancel'

type Modal = {
  icon: "alert" | "success"
  isOpen : boolean
  onCancel : () => void
  onAction : () => void
  title : string
  buttonActionName : string
}

const Modal = ({ 
  icon,
  isOpen,
  onCancel,
  onAction,
  title,
  buttonActionName
} : Modal) => {

  //add id "modal-root" di index.html
  const modalRoot = document.getElementById("modal-root")

  useEffect(() => {

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel()
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto"
    }
  
  }, [isOpen, onCancel])

  if (!modalRoot) return null

  return ReactDOM.createPortal (
    <>
      {
        isOpen &&
        <FocusTrap>
          <PageModal>
            <div className="h-full flex flex-col gap-4 justify-between">
              <div className="flex items-center justify-end text-gray-600">
                {/* close button */}
                <button
                  onClick={onCancel}
                  className="text-white cursor-pointer p-2 rounded-md hover:bg-gray-100/50"
                >
                  <Icon
                    icon="mingcute:close-line"
                    width="18"
                    height="18"
                  />
                </button>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Icon 
                  icon={
                    icon === "alert" ?
                    "ep:warning-filled"
                    :
                    "icon-park-outline:check-one"
                  } 
                  width="64"
                  height="64"
                  className={
                    icon === "alert" ?
                    "text-red-700"
                    :
                    "text-green-500"
                  }
                />
                <p className="text-white text-lg font-medium">
                  {title}
                </p>
              </div>
              <div className="mt-10 w-full flex gap-2 items-center justify-center">
                <Button
                  name={buttonActionName}
                  onClick={onAction}
                />
                <ButtonCancel
                  type="button"
                  name="Cancel"
                  onClick={onCancel}
                />
              </div>
            </div>
          </PageModal>
        </FocusTrap>
      }
    </>,
    modalRoot
  )
}

export default Modal