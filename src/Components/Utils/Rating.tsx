import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div>
      <span className="flex">
        {[...Array(Math.floor(rating))].map((key, i) => (
          <div key={i}>
            <FaStar color={'#ffc107'} />
          </div>
        ))}
        {rating - Math.floor(rating)
          ? rating - Math.floor(rating) && (
              <div>
                <FaStarHalfAlt color={'#ffc107'} />
              </div>
            )
          : null}
        {[...Array(5 - Math.ceil(rating))].map((key, i) => (
          <div key={i}>
            <FaStar color={'#e4e5e9'} />
          </div>
        ))}
      </span>
    </div>
  )
}

export default Rating
