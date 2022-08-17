import TrailsCard from './TrailsCard'
import { useEffect, useState } from 'react'
import { SquareButton } from './Button'
import Footer from './Footer'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import LeftArrowIcon from '../svg/LeftArrowIcon'
import TrailsFilter from './TrailsFilter'

export interface TrailsType {
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
  const [trailsData, setTrailsData] = useState<TrailsType[]>([])
  const [showList, setShowList] = useState<TrailsType[]>([])
  const [hasError, setHasError] = useState(false)

  async function getData() {
    const res = await fetch(trailsAPI_URL)
    if (res.status !== 200) {
      setHasError(true)
    }
    const data = await res.json()
    setTrailsData(data)
    setShowList(data)
  }

  useEffect(() => {
    getData()
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
          {hasError ? <h2>Opps! Please reload the page...</h2> : null}
          {showList.map(trail => (
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
          ))}
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}
export default HikingTrailsPage
