import { useEffect, useState } from 'react'
import { getUserTrails } from './FetchTrails'

const useMyTrail = ({}) => {
  const [userTrailsData, setUserTrailsData] = useState<any>([])

  useEffect(() => {
    getUserTrails().then(data => {
      setUserTrailsData(data)
    })
  }, [userTrailsData.data?.getUserTrails.primary_key])
  return { userTrailsData }
}

export default useMyTrail
