import { useEffect, useState } from 'react'
import { getUserTrails } from '../Utils/FetchTrails'
import Rating from '../Utils/Rating'
import TrailsCard from '../Utils/TrailsCard'
import { TrailsType } from './HikingTrailsPage'

const MyTrailPage = () => {
  const [userTrails, setUserTrails] = useState<any>([])
  console.log(userTrails)

  useEffect(() => {
    getUserTrails().then(data => {
      setUserTrails(data)
    })
  }, [])

  return (
    <div>
      {userTrails.data?.getUserTrails.length <= 0
        ? 'You dont have any Trails yet!'
        : userTrails.data?.getUserTrails.map((trail: TrailsType) => (
            <TrailsCard
              key={trail.primary_key}
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
  )
}

export default MyTrailPage
