import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div>
      <span className="flex">
        {[...Array(Math.floor(rating || 1))].map((key, i) => (
          <div key={i}>
            <FaStar color={'#ffc107'} />
          </div>
        ))}
        {rating - Math.floor(rating || 1)
          ? rating - Math.floor(rating || 1) && (
              <div>
                <FaStarHalfAlt color={'#ffc107'} />
              </div>
            )
          : null}
        {[...Array(5 - Math.ceil(rating || 1))].map((key, i) => (
          <div key={i}>
            <FaStar color={'#e4e5e9'} />
          </div>
        ))}
      </span>
    </div>
  )
}

export default Rating
