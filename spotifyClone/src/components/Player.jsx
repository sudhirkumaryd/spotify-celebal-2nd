import PropTypes from 'prop-types'

const MusicPlayerSlider = () => {

  const trackId= '51EC3I1nQXpec4gDk0mQyP'
  return (
    <>
      <div className="container">
        <iframe
          title="Spotify Player"
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
          width="95%"
          height="390"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      </div>
      <h6>{trackId ? trackId : `no id`}</h6>
    </>
  )
}

MusicPlayerSlider.propTypes = {
  trackId: PropTypes.string.isRequired
}


export default MusicPlayerSlider
