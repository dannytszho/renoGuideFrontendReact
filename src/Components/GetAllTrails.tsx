import { API, graphqlOperation } from 'aws-amplify'
import { GET_ALL_TRAILS } from '../graphql/trails'

export const getAllTrails = async () => {
  try {
    const res = await API.graphql(graphqlOperation(GET_ALL_TRAILS))
    return res
  } catch (e) {
    console.error(e)
  }
}
