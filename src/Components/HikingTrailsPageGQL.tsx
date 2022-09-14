import { getAllTrails } from './GetAllTrails'
import { useEffect, useState } from 'react'
import { TrailsType } from './HikingTrailsPage'

const HikingTrailsPageGQL = () => {
  const [trailsData, setTrailsData] = useState<any>([])

  useEffect(() => {
    getAllTrails()
      .then(data => {
        setTrailsData(data)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      {trailsData.data?.getAllTrails.map((trail: TrailsType) => (
        <div>{trail.name}</div>
      ))}
    </>
  )
}
export default HikingTrailsPageGQL
