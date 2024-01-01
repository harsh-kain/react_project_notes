import './shimmercss.css'
const Shimmer = () => {
  return (
    <>
      <div className="card">
        <div className="shimmerBG media" />
        <div className="p-32">
          <div className="shimmerBG title-line" />
          <div className="shimmerBG title-line end" />
          <div className="shimmerBG content-line m-t-24" />
          <div className="shimmerBG content-line" />
          <div className="shimmerBG content-line" />
          <div className="shimmerBG content-line" />
          <div className="shimmerBG content-line end" />
        </div>
      </div>


    </>
  )
}

export default Shimmer