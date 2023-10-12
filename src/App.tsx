/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import arrowRight from './assets/images/icon-arrow.svg'
import axios from 'axios'
import { TypeInformation } from './interfaces/InformationApi'
import Map from './components/Map'
import Modal from './components/Modal'

const APIKEY = process.env.REACT_APP_API_KEY_GEO

function App() {
  const [information, setInformation] = useState<TypeInformation>()
  const [modalOpen, setModalOpen] = useState(false)

  const GetGeoIdAdress = async () => {
    try {
      const { data } = await axios.get<TypeInformation>(
        `https://geo.ipify.org/api/v2/country?apiKey=${APIKEY}`,
      )
      setInformation(data)
      console.log(information)
    } catch (error) {
      console.log(error)
    }
  }

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    GetGeoIdAdress()
  }, [])

  return (
    <div className="w-full h-full flex flex-col bg-blue-500 sm:bg-pattern-desktop bg-pattern-mobile bg-no-repeat">
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        information={information}
      />

      <div className="flex flex-col items-center justify-center w-full h-72 gap-10">
        {' '}
        <p className="text-white text-2xl font-medium tracking-wide text-center">
          Rastreador de endereço IP
        </p>
        <div className="flex">
          <input
            value={information?.ip}
            placeholder="000.000.000.000"
            className="w-full sm:w-60 h-10 rounded-l-lg p-4 tracking-widest placeholder:p-2 "
            type="text"
          />
          <button
            className="bg-black hover:bg-gray-900 w-10 h-10 flex items-center rounded-r-lg justify-center "
            onClick={handleModalOpen}
          >
            <img src={arrowRight} alt="seta para direita" />{' '}
          </button>
        </div>
        <div />
      </div>
      <div className="w-full h-[80vh] z-10">
        <Map />
      </div>
    </div>
  )
}

export default App
