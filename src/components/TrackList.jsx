import { useNavigate } from "react-router-dom"

const TrackList = (props) => {
  const { trackList, handleDeleteTrack, updateSelected } = props
  const navigate = useNavigate()

  const handleEdit = (track) => {
    updateSelected(track)
    navigate(`/edit-track/${track._id}`)
  }

  const tracks = trackList.map((item) => (
    <div key={item._id}>
      <h5>{item.title} by <span>{item.artist}</span></h5>
      <div>
        <button onClick={() => updateSelected(item)}>Play</button>
        <button onClick={() => handleEdit(item)}>Edit</button>
        <button onClick={() => handleDeleteTrack(item._id)}>Delete</button>
      </div>
    </div>
  ))

  return (
    <div>
      <h3>Track list</h3>
      {!trackList ? <h2>No Tracks Yet!</h2> : <>{ tracks }</>}
    </div>
  )
}

export default TrackList