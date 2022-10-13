import TrailsCard from '../Utils/TrailsCard'
import { Key, useEffect, useState } from 'react'
import { PreviousButton, SquareButton } from '../Utils/Button'
import Footer from '../Utils/Footer'
import Rating from '../Utils/Rating'
import { Link } from 'react-router-dom'
import LeftArrowIcon from '../../svg/LeftArrowIcon'
import TrailsFilter from '../Utils/TrailsFilter'
import { getData } from '../Utils/FetchTrails'

export interface TrailsType {
  primary_key: string
  id: string
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  rating: string
  imageUrl: string
  url: string
  userId: string
}

export const trailsAPI_URL = 'https://powerfulmountain.herokuapp.com/api/trails'

const HikingTrailsPage = () => {
  const [trailsData, setTrailsData] = useState<any>([])
  const [showList, setShowList] = useState<any>([])

  useEffect(() => {
    getData().then(data => {
      setTrailsData(data)
      setShowList(data)
    })
  }, [])

  return (
    <>
      <div className="flex flex-col">
        <PreviousButton />

        {/* Filter section */}
        <TrailsFilter trailsData={trailsData} setShowList={setShowList} />

        <div className="grid justify-center">
          {showList.map((trail: TrailsType) => (
            <TrailsCard
              key={trail.id}
              primary_key={trail.primary_key}
              name={trail.name}
              length={trail.length}
              elevation={trail.elevation}
              image={trail.imageUrl}
              difficulty={trail.difficulty}
              rating={<Rating rating={parseFloat(trail.rating)} />}
              duration={trail.duration}
              urL={trail.url}
              userId={trail.userId}
            />
          ))}
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}
export default HikingTrailsPage
