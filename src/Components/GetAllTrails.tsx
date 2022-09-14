import { API, graphqlOperation } from 'aws-amplify'

const GET_ALL_TRAILS = `
  query {
    getAllTrails(limit: 3) {
      primary_key
      name
      rating
      url
      duration
      difficulty
      length
      elevation
      imageUrl
    }
  }
`

export const getAllTrails = async () => {
  try {
    const res = await API.graphql(graphqlOperation(GET_ALL_TRAILS))
    return res
  } catch (e) {
    console.error(e)
  }
}
