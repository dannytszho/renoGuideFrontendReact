import TrailsCard from '../Utils/TrailsCard'
import { useEffect, useState } from 'react'
import { PreviousButton } from '../Utils/Button'
import Footer from '../Utils/Footer'
import Rating from '../Utils/Rating'
import TrailsFilter from '../Utils/TrailsFilter'
import { getData } from '../Utils/FetchTrails'
import { TrailsType } from '../Utils/types'

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
      <br />
    </>
  )
}
export default HikingTrailsPage
