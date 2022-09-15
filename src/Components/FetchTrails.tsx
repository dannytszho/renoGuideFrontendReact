async function getData() {
  try {
    const res = await fetch('https://powerfulmountain.herokuapp.com/api/trails')
    const data = await res.json()
    return data
  } catch (e) {
    throw e
  }
}
export { getData }
