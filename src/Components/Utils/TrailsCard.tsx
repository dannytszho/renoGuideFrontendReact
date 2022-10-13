import { ReactElement, useState } from 'react'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { deleteTrail } from './FetchTrails'

export interface CardProps {
  primary_key: string
  name: string
  length: string
  elevation: string
  duration: string
  rating: ReactElement
  image: string
  urL: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  userId: string
}

export const colorMap = {
  Easy: 'bg-yellow-300',
  Moderate: 'bg-green-400',
  Hard: 'bg-red-400',
  All: 'bg-gray-200',
}

const TrailsCard = ({
  primary_key,
  image,
  name,
  difficulty,
  length,
  elevation,
  duration,
  rating,
  urL,
  userId,
}: CardProps) => {
  const [showModal, setShowModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedTrailId, setSelectedTrailId] = useState('')
  console.log(selectedTrailId)

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true)
          setSelectedTrailId(primary_key)
        }}
        className="bg-white font-iceland text-black m-10 rounded-xl overflow-hidden shadow-lg w-[300px] hover:scale-105 hover:tansition hover:duration-200"
      >
        {/* <a href={urL} target="_blank" rel="noreferrer"> */}
        <img src={image} alt="placeholder" width="300px" height="168px" />
        <div className="flex justify-between mx-3 mt-2">
          <span
            className={['rounded-lg px-2', `${colorMap[difficulty]}`].join(' ')}
          >
            {difficulty}
          </span>
          <span>{length}</span>
        </div>
        <div className="font-bold text-2xl text-center">{name}</div>
        <div className="text-center whitespace-pre">
          Elevation:{'   '}
          {elevation}
        </div>
        <div className="flex justify-between mx-3">
          <span className="flex">
            <AiOutlineClockCircle size={15} className="mt-1 mr-1" />
            {duration}
          </span>
          <span>{rating}</span>
        </div>
        {/* </a> */}
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ul className="my-1 text-slate-500 text-lg leading-relaxed">
                    <li>
                      <img
                        src={image}
                        alt="placeholder"
                        width="300px"
                        height="168px"
                      />
                    </li>

                    <li>{length}</li>
                    <li>{elevation}</li>
                    <li>{duration}</li>
                    <li>{rating}</li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {userId ? (
                    <>
                      <button
                        className="bg-red-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          console.log('me first')
                          setDeleteModal(true)
                        }}
                      >
                        Delete Trail
                      </button>
                    </>
                  ) : null}

                  {deleteModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-40 my-6 mx-auto max-w-3xl">
                          <div className="border-2 rounded-lg">
                            <h1 className="text-center">
                              Are you sure to delete?
                            </h1>
                            <div className="flex justify-evenly">
                              <button
                                className="bg-blue-600 w-12 m-2 rounded-md"
                                onClick={() => {
                                  console.log('Deleted!')
                                  deleteTrail(selectedTrailId)
                                  setDeleteModal(false)
                                  setShowModal(false)
                                }}
                              >
                                Yes
                              </button>
                              <button
                                className="bg-red-600 w-12 m-2 rounded-md"
                                onClick={() => setDeleteModal(false)}
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default TrailsCard
