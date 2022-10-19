import { useEffect, useState } from 'react'
import { getUserTrails } from '../Utils/FetchTrails'
import Rating from '../Utils/Rating'
import UserTrailsCard from '../Utils/UserTrailsCard'
import { UserTrailsType } from '../Utils/types'

const MyTrailPage = () => {
  const [userTrails, setUserTrails] = useState<any>([])
  const [updateUserTrails, setUpdateUserTrails] = useState(false)

  useEffect(() => {
    getUserTrails().then(data => {
      setUserTrails(data)
    })
  }, [])

  useEffect(() => {
    if (updateUserTrails) {
      getUserTrails().then(data => {
        setUserTrails(data)
        setUpdateUserTrails(false)
      })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [updateUserTrails])

  return (
    <div className="grid justify-center">
      {userTrails.data?.getUserTrails.length <= 0
        ? 'You dont have any Trails yet!'
        : userTrails.data?.getUserTrails.map((trail: UserTrailsType) => (
            <UserTrailsCard
              setUpdateUserTrails={setUpdateUserTrails}
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
