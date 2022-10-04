const CreateTrailPage = () => {
  return (
    <form className="bg-white font-iceland text-black m-10 rounded-xl overflow-hidden shadow-lg w-[300px] text-center hover:tansition hover:duration-200">
      <img alt="placeholder" width="300px" height="168px" />
      <div className="flex justify-between mx-3 mt-2">
        <select className="w-30">
          <option>Easy</option>
          <option>Moderate</option>
          <option>Hard</option>
        </select>
        <input className="w-20" placeholder="length(mi)"></input>
      </div>
      <div className="flex flex-col items-center">
        <input
          className="w-40 font-bold text-2xl text-center"
          placeholder="Trail name"
        ></input>
        <input className="w-30 text-center" placeholder="elevation(ft)"></input>
      </div>
      <div className="flex justify-between mx-3 mt-2">
        <input className="w-24" placeholder="time(hh:mm)"></input>
        <input className="w-20" placeholder="rating"></input>
      </div>
      <div className="flex justify-center">
        <button className="m-4 p-1 border rounded-lg bg-blue-400 hover:bg-blue-800">
          clear
        </button>
        <button className="m-4 p-1 border rounded-lg bg-blue-400 hover:bg-blue-800">
          submit!
        </button>
      </div>
    </form>
  )
}

export default CreateTrailPage
