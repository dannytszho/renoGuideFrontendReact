// import { useEffect, useState } from 'react'

// type FetchResponse = {
//   data: any
// }

// const FetchTrails = (url: string): FetchResponse => {
//   // const [data, setData] = useState([])

async function getData() {
  try {
    const res = await fetch('https://powerfulmountain.herokuapp.com/api/trails')
    const data = await res.json()
    // setData(data)
    // console.log(data)
    return data
  } catch (e) {
    console.error(e)
  }
}

// useEffect(() => {
//   getData()
//   return () => {}
// }, [url])
// return { data }
// }

export { getData }
