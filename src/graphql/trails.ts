export const GET_ALL_TRAILS = `
query {
  getAllTrails(limit: 20) {
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
export const GET_USER_TRAILS = `
query {
  getUserTrails(limit: 20) {
    primary_key
    name
    rating
    url
    duration
    difficulty
    length
    elevation
    imageUrl
    userId
  }
}
`
export const CREATE_TRAIL = `
mutation createTrail($input: TrailCreateInput) {
  createTrail(input: $input) {
    name
    rating
    duration
    difficulty
    length
    elevation
  }
}`

export const DELETE_TRAIL = `
mutation {
  deleteTrail(id: String!)
}
`
