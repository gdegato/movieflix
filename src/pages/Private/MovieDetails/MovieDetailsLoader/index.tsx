import ContentLoader from 'react-content-loader'

const MovieDetailsLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#6C6C6C"
    foregroundColor="#525252"
  >
    <circle cx="591" cy="554" r="15" />
    <rect x="485" y="527" rx="2" ry="2" width="140" height="10" />
    <rect x="501" y="538" rx="2" ry="2" width="140" height="10" />
    <rect x="13" y="25" rx="2" ry="2" width="290" height="117" />
  </ContentLoader>
)

export default MovieDetailsLoader
