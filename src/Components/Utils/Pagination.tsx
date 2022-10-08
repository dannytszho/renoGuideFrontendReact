import { classicNameResolver } from 'typescript'

interface PaginationProps {
  trailsPerPage: number
  totalTrails: number
  currentPage: number
  paginate: (param: number) => void
}

const Pagination = ({
  trailsPerPage,
  totalTrails,
  currentPage,
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
          <li key={number} className="text-center">
            <button
              className={
                currentPage === number
                  ? 'bg-zinc-500 w-8 h-8 border rounded-full'
                  : 'w-8 h-8'
              }
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Pagination
