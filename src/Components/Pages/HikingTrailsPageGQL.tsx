import { getAllTrails } from '../Utils/FetchTrails'
import { useEffect, useState } from 'react'
import { PreviousButton, SquareButton } from '../Utils/Button'
import { Link } from 'react-router-dom'
import LeftArrowIcon from '../../svg/LeftArrowIcon'
import TrailsFilter from '../Utils/TrailsFilter'
import TrailsCard from '../Utils/TrailsCard'
import Rating from '../Utils/Rating'
import { TrailsType } from './HikingTrailsPage'
import { Loader } from '@aws-amplify/ui-react'
import Footer from '../Utils/Footer'

const HikingTrailsPageGQL = () => {
  const [trailsData, setTrailsData] = useState<any>([])
  const [showList, setShowList] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllTrails()
      .then(data => {
        setTrailsData(data)
        setShowList(data)
        setIsLoading(false)
      })
      .catch(err => alert(err))
  }, [])

  return (
    <>
      <div className="flex flex-col">
        <PreviousButton />

        {/* Filter section */}
        <TrailsFilter
          trailsData={trailsData.data?.getAllTrails}
          setShowList={setShowList}
        />
        <div>
          {isLoading ? <Loader variation="linear" fr={undefined} /> : null}
        </div>

        <div className="grid justify-center">
          {showList.data?.getAllTrails
            ? showList.data?.getAllTrails.map((trail: TrailsType) => (
                <TrailsCard
                  key={trail.primary_key}
                  name={trail.name}
                  length={trail.length}
                  elevation={trail.elevation}
                  image={trail.imageUrl}
                  difficulty={trail.difficulty}
                  rating={<Rating rating={parseFloat(trail.rating)} />}
                  duration={trail.duration}
                  urL={trail.url}
                />
              ))
            : showList.map((trail: TrailsType) => (
                <TrailsCard
                  key={trail.primary_key}
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
export default HikingTrailsPageGQL
