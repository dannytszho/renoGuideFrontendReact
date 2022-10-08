import { API } from 'aws-amplify'
import { CREATE_TRAIL } from '../../graphql/trails'
import { useNavigate } from 'react-router-dom'
import { PreviousButton } from '../Utils/Button'

const CreateTrailPage = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await API.graphql({
        query: CREATE_TRAIL,
        variables: {
          input: {
            name: e.target.trailName.value,
            rating: e.target.trailRating.value,
            duration: e.target.trailDuration.value,
            difficulty: e.target.trailDifficulty.value,
            length: e.target.trailLength.value,
            elevation: e.target.trailElevation.value,
            // imageUrl: e.target.trailImageUrl.value,
          },
        },
      })
    } catch (err) {
      throw err
    }
    navigate('/hikingtrailsgql')
  }

  return (
    <div>
      <PreviousButton />
      <div className="flex flex-col place-items-center">
        <h1 className="font-iceland text-lg">Add a new trail: </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white font-iceland text-black m-10 rounded-xl overflow-hidden shadow-lg w-[300px] text-center hover:tansition hover:duration-200"
        >
          <img alt="placeholder" width="300px" height="168px" />
          <div className="flex justify-between mx-3 mt-2">
            <select name="trailDifficulty" className="w-30">
              <option>Easy</option>
              <option>Moderate</option>
              <option>Hard</option>
            </select>
            {/* <input
          className="w-20"
          placeholder="difficulty"
          name="trailDifficulty"
        ></input> */}
            <input
              className="w-20"
              placeholder="length(mi)"
              name="trailLength"
            ></input>
          </div>
          <div className="flex flex-col items-center">
            <input
              className="w-40 font-bold text-2xl text-center"
              placeholder="Trail name"
              name="trailName"
            ></input>
            <input
              className="w-30 text-center"
              placeholder="elevation(ft)"
              name="trailElevation"
            ></input>
          </div>
          <div className="flex justify-between mx-3 mt-2">
            <input
              className="w-24"
              placeholder="time(hh:mm)"
              name="trailDuration"
            ></input>
            <input
              className="w-20"
              placeholder="rating"
              name="trailRating"
            ></input>
          </div>
          <div className="flex justify-center">
            {/* <button className="m-4 p-1 border rounded-lg bg-blue-400 hover:bg-blue-800">
          clear
        </button> */}
            <button className="m-4 p-1 border rounded-lg bg-blue-400 hover:bg-blue-800">
              submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTrailPage
