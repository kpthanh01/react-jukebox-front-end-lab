import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import * as trackService from './services/trackService'
import Home from './components/Home'
import TrackFrom from './components/TrackForm'

function App() {
  const [trackList, setTrackList] = useState([])
  const [selectedTrack, setSelected] = useState(null)

  useEffect(() => {
    const getTracks = async () => {
      try {
        const tracks = await trackService.get()
        if (tracks.error) {
          throw new Error(tracks.error)
        }
        setTrackList(tracks)
      } catch (error) {
        console.log(error)
      }
    }
    getTracks()
  }, [])

  const updateSelected = (track) => {
    setSelected(track)
  }

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData)
      if (newTrack.error) {
        throw new Error(newTrack.error)
      }
      setTrackList([...trackList, newTrack])
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updateTrack = await trackService.update(formData, trackId)
      if (updateTrack.error) {
        throw new Error(updateTrack.error)
      }
      const updateTrackList = trackList.map(item => item._id !== updateTrack._id ? item : updateTrack)
      setTrackList(updateTrackList)
      setSelected(updateTrack)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTrack = async (trackId) => {
    try {
      const deleteTrack = await trackService.deleteTrack(trackId)
      if (deleteTrack.error) {
        throw new Error(deleteTrack.error)
      }
      const newTrackList = trackList.filter(item => item._id !== deleteTrack._id)
      setTrackList(newTrackList)
      setSelected(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home
            trackList={trackList}
            selectedTrack={selectedTrack}
            handleDeleteTrack={handleDeleteTrack}
            updateSelected={updateSelected} />} />
        <Route path='/add-track' element={
          <TrackFrom
            selectedTrack={selectedTrack}
            handleAddTrack={handleAddTrack} />} />
        <Route path='/edit-track/:trackId' element={
          <TrackFrom
            selectedTrack={selectedTrack}
            handleUpdateTrack={handleUpdateTrack} />} />
      </Routes>
    </>
  )
}

export default App
