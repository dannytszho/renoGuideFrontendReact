import TrailsCard from './TrailsCard'
import { Key, useEffect, useState } from 'react'
import { SquareButton } from './Utils/Button'
import Footer from './Utils/Footer'
import Rating from './Utils/Rating'
import { Link } from 'react-router-dom'
import LeftArrowIcon from '../svg/LeftArrowIcon'
import TrailsFilter from './TrailsFilter'
import { getData } from './Utils/FetchTrails'

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
        <div className="flex m-5 justify-start">
          <SquareButton>
            <Link to="/">
              <div className="p-2.5">
                <LeftArrowIcon />
              </div>
            </Link>
          </SquareButton>
        </div>

        {/* Filter section */}
        <TrailsFilter trailsData={trailsData} setShowList={setShowList} />

        <div className="grid justify-center">
          {showList.map(
            (trail: {
              id: Key | null | undefined
              name: string
              length: string
              elevation: string
              imageUrl: string
              difficulty: 'Easy' | 'Moderate' | 'Hard'
              rating: string
              duration: string
              url: string
            }) => (
              <TrailsCard
                key={trail.id}
                name={trail.name}
                length={trail.length}
                elevation={trail.elevation}
                image={trail.imageUrl}
                difficulty={trail.difficulty}
                rating={<Rating rating={parseFloat(trail.rating)} />}
                duration={trail.duration}
                urL={trail.url}
              />
            ),
          )}
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}
export default HikingTrailsPage
