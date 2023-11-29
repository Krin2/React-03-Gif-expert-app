import PropTypes from 'prop-types';

export const GifItems = ({ url, title}) => {
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItems.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}