export const LongButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-[350px] md:w-[650px] h-[60px] border rounded-lg bg-zinc-200 hover:cursor-pointer hover:scale-[102%]">
      <h2>{children}</h2>
    </button>
  )
}

export const SquareButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-[45px] h-[45px] border rounded-lg bg-zinc-200 hover:cursor-pointer hover:scale-[103%]">
      <h2>{children}</h2>
    </button>
  )
}

export const CollapseButton = ({
  children,
  details,
}: {
  children: React.ReactNode
  details: any
}) => {
  return (
    <div className="collapse collapse-arrow w-[350px] md:w-[650px] border bg-zinc-200 rounded-lg hover:scale-[102%]">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-small">
        <h2>{children}</h2>
      </div>
      <div className="collapse-content">
        <h2>{details}</h2>
      </div>
    </div>
  )
}
