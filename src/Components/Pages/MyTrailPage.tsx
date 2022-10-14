import { useEffect, useMemo, useState } from 'react'
import { getUserTrails } from '../Utils/FetchTrails'
import Rating from '../Utils/Rating'
import TrailsCard from '../Utils/TrailsCard'
import useMyTrail from '../Utils/useMyTrail'
import { TrailsType } from './HikingTrailsPage'

const MyTrailPage = () => {
  const [userTrails, setUserTrails] = useState<any>([])
  console.log(userTrails)

  useEffect(() => {
    getUserTrails().then(data => {
      setUserTrails(data)
    })
  }, [])
  // const [userTrails, setUserTrails] = useState<any>([])
  // const { userTrailsData } = useMyTrail(userTrails)
  // console.log(userTrails)
  // console.log('11111111')
  // console.log(userTrailsData)

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
