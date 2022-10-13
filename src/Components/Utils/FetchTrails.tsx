import { API, graphqlOperation } from 'aws-amplify'
import {
  DELETE_TRAIL,
  GET_ALL_TRAILS,
  GET_USER_TRAILS,
} from '../../graphql/trails'

export const getData = async () => {
  try {
    const res = await fetch('https://powerfulmountain.herokuapp.com/api/trails')
    const data = await res.json()
    return data
  } catch (e) {
    throw e
  }
}

export const getAllTrails = async () => {
  try {
    const res = await API.graphql(graphqlOperation(GET_ALL_TRAILS))
    return res
  } catch (e) {
    throw e
  }
}

export const getUserTrails = async () => {
  try {
    const res = await API.graphql(graphqlOperation(GET_USER_TRAILS))
    return res
  } catch (e) {
    console.log(e)
  }
}

export const deleteTrail = async (id: string) => {
  try {
    const DELETE_TRAIL = `
    mutation {
      deleteTrail(id: "${id}")
    }
    `
    const res = await API.graphql(graphqlOperation(DELETE_TRAIL, { id: id }))
    return res
  } catch (e) {
    console.log(e)
  }
}
