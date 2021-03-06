import React, { PropTypes } from 'react'
import TextTruncate from 'react-text-truncate'
import { Link } from 'react-router-dom'

function CharacterInfo (props) {
  return (
    <div className='info'>
      <h4 className='title'>
        <Link to={`/characters/${props.id}`}>{props.name}</Link>
      </h4>
      <p className='description'>
        <TextTruncate
          line={5}
          truncanteText='...'
          text={props.description}
        />
      </p>
      <Link to={`/characters/${props.id}`} className='btn btn-dark'>Ver mais</Link>
    </div>
  )
}

CharacterInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CharacterInfo
