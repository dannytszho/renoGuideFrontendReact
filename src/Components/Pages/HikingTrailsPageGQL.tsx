import { getAllTrails } from '../Utils/FetchTrails'
import { useEffect, useState } from 'react'
import { PreviousButton, SquareButton } from '../Utils/Button'
import TrailsFilter from '../Utils/TrailsFilter'
import TrailsCard from '../Utils/TrailsCard'
import Rating from '../Utils/Rating'
import { TrailsType } from './HikingTrailsPage'
import { Loader } from '@aws-amplify/ui-react'
import Footer from '../Utils/Footer'
import { Link } from 'react-router-dom'

const HikingTrailsPageGQL = () => {
  const [trailsData, setTrailsData] = useState<any>([])
  const [showList, setShowList] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [trailsPerPage] = useState(10)

  useEffect(() => {
    getAllTrails()
      .then(data => {
        setTrailsData(data)
        setShowList(data)
        setIsLoading(false)
      })
      .catch(err => alert(err))
  }, [])
  console.log('*********')
  console.log(trailsData)
  console.log('*********')
  console.log(showList)

  // Get current trails
  const indexOfLastTrail = currentPage * trailsPerPage
  const indexOfFirstTrail = indexOfLastTrail - trailsPerPage
  const currentTrails = showList.data?.getAllTrails.slice(
    indexOfFirstTrail,
    indexOfLastTrail,
  )
  console.log('1111111')
  console.log(indexOfLastTrail)
  console.log('2222222')
  console.log(indexOfFirstTrail)
  console.log('3333333')
  console.log(currentTrails)
  console.log('4444444')

  return (
    <>
      <div className="flex flex-col">
        <PreviousButton />

        {/* Filter section */}
        <TrailsFilter
          trailsData={trailsData.data?.getAllTrails}
          setShowList={setShowList}
        />
        <div className="grid justify-center m-8">
          <button className="border w-10 h-10 rounded-full">
            <Link to="/createtrail">+</Link>
          </button>
        </div>

        <div>
          {isLoading ? <Loader variation="linear" fr={undefined} /> : null}
        </div>

        <div className="grid justify-center">
          {currentTrails
            ? currentTrails.map((trail: TrailsType) => (
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
