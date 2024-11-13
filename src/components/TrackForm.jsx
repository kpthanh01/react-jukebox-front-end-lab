import { useState } from "react"
import { useNavigate } from "react-router-dom"

const TrackFrom = (props) => {
  const initialData = {
    title: '',
    artist: ''
  }
  const { selectedTrack, handleAddTrack, handleUpdateTrack } = props
  const [formData, setFormData] = useState(selectedTrack ? selectedTrack : initialData)
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (selectedTrack) {
      handleUpdateTrack(formData, selectedTrack._id)
      navigate('/')
    } else {
      handleAddTrack(formData)
      navigate('/')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={formData.title}
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          onChange={handleChange}
          value={formData.artist}
          required
        />
        <button type="submit">{selectedTrack ? 'Update Track' : 'Add New Track'}</button>
      </form>
    </div>
  )
}

export default TrackFrom