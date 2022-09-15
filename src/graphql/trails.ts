export const GET_ALL_TRAILS = `
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
