const NowPlaying = (props) => {
  const { selectedTrack } = props
  if (!selectedTrack) {
    return (
      <div>
        <h1>No Track Playing</h1>
      </div>
    )
  }
  return (
    <div>
      <h3>NowPlaying:</h3>
      <p>Title: <span>{selectedTrack.title}</span></p>
      <p>Artist: <span>{selectedTrack.artist}</span></p>
    </div>
  )
}

export default NowPlaying