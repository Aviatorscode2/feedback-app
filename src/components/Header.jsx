import PropTypes from 'prop-types'

export default function Header( props ) {
  return (
    <div>{props.text}</div>
  )
}

Header.defaultProps = {
    text: 'What are you doing',
}

Header.propsTypes = {
    text: PropTypes.string,
}