import React from 'react'
import { TypeInformation } from '../../interfaces/InformationApi'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  information: TypeInformation | undefined
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, information }) => {
  if (!isOpen) {
    return null
  }

  if (information) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>

        <div className="relative w-auto max-w-3xl mx-auto my-6 z-50">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-2xl font-semibold">IP: {information.ip}</h3>
              <button
                className="text-red-500 p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                ×
              </button>
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto">
              <ul className="flex flex-col gap-3">
                <li>
                  <strong>País:</strong> {information.location.country}
                </li>
                <li>
                  <strong>Região:</strong> {information.location.region}
                </li>
                <li>
                  <strong>Operadora:</strong> {information.as.name}
                </li>
                <li>
                  <strong>Rota:</strong> {information.as.route}
                </li>
                <li>
                  <strong>Domínio:</strong>{' '}
                  <a href={information.as.domain}>{information.as.domain}</a>
                </li>
                <li>
                  <strong>Tipo:</strong> {information.as.type}
                </li>
                <li>
                  <strong>ISP:</strong> {information.isp}
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end p-3 border-t border-solid border-gray-300 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
