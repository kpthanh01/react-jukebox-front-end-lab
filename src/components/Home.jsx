import { useNavigate } from "react-router-dom"
import NowPlaying from "./NowPlaying"
import TrackList from "./TrackList"

const Home = (props) => {
  const {trackList, selectedTrack, handleDeleteTrack, updateSelected} = props

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/add-track')}>Add New Track</button>
      <TrackList trackList={trackList} handleDeleteTrack={handleDeleteTrack} updateSelected={updateSelected} />
      <NowPlaying selectedTrack={selectedTrack} />
    </div>
  )
}

export default Home