import PropTypes from 'prop-types';

import appLogo from '../assets/tetris.svg'
import './Title.css'

export const Title = ({ title }) => {
  return (
    <div>
      <img src={appLogo} className="logo app" alt="App logo" />
      {title}
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

Title.defaultProps = {
  name: 'Tetris',
}