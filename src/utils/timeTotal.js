import msToTime from './msToTime.js'

const timeTotal = (playlist) => {
  let tracks = playlist.tracks.items
  let time = 0;
  tracks.map((track) => {
    time = time + track.track.duration_ms
  })

  return msToTime(time)
}

export default timeTotal
