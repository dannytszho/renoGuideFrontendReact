import { ReactElement } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

export interface CardProps {
  name: string
  length: string
  elevation: string
  duration: string
  rating: ReactElement
  image: string
  urL: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
}

export const colorMap = {
  Easy: 'bg-yellow-300',
  Moderate: 'bg-green-400',
  Hard: 'bg-red-400',
  All: 'bg-gray-200',
}

const TrailsCard = ({
  image,
  name,
  difficulty,
  length,
  elevation,
  duration,
  rating,
  urL,
}: CardProps) => {
  return (
    <div className="bg-white font-iceland text-black m-10 rounded-xl overflow-hidden shadow-lg w-[300px] hover:scale-105 hover:tansition hover:duration-200">
      <a href={urL} target="_blank" rel="noreferrer">
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
      </a>
    </div>
  )
}

export default TrailsCard
