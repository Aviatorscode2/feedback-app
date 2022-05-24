import PropTypes from 'prop-types'

function Header( { text, bgColor, textColor } ) {
  return (
    <div>{text}</div>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.5)',
  textColor: '#ff6a95',
};

Header.propsTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string

}
export default Header