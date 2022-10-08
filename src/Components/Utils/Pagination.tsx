interface PaginationProps {
  trailsPerPage: number
  totalTrails: number
  paginate: (param: number) => void
}
const Pagination = ({
  trailsPerPage,
  totalTrails,
  paginate,
}: PaginationProps) => {
  const PageNumbers = []

  for (let i = 1; i <= Math.ceil(totalTrails / trailsPerPage); i++) {
    PageNumbers.push(i)
  }

  return (
    <div>
      <ul className="flex flex-row justify-center">
        {PageNumbers.map(number => (
          <li
            key={number}
            className="border rounded-sm w-10 text-center hover:cursor"
          >
            <button onClick={() => paginate(number)} className="text-s">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Pagination
