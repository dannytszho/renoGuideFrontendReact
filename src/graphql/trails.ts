export const GET_ALL_TRAILS = `
query {
  getAllTrails(limit: 100) {
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
