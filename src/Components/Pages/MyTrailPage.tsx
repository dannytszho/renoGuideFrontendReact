import { useEffect, useState } from 'react'
import { getUserTrails } from '../Utils/FetchTrails'
import Rating from '../Utils/Rating'
import TrailsCard from '../Utils/TrailsCard'
import { TrailsType } from './HikingTrailsPage'

const MyTrailPage = () => {
  const [userTrails, setUserTrails] = useState<any>([])

  useEffect(() => {
    getUserTrails().then(data => {
      setUserTrails(data)
    })
  }, [])
  console.log(userTrails)
  return (
    <div>
      {userTrails.data?.getUserTrails.map((trail: TrailsType) => (
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
  )
}

export default MyTrailPage
