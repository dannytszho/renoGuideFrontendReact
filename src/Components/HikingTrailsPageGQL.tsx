import { getAllTrails } from './GetAllTrails'
import { useEffect, useState } from 'react'
import { SquareButton } from './Button'
import { Link } from 'react-router-dom'
import LeftArrowIcon from '../svg/LeftArrowIcon'
import TrailsFilter from './TrailsFilter'
import TrailsCard from './TrailsCard'
import Rating from './Rating'
import { TrailsType } from './HikingTrailsPage'
import { Loader } from '@aws-amplify/ui-react'

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
      .catch(console.error)
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
    </>
  )
}
export default HikingTrailsPageGQL
