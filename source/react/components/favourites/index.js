import React, { PropTypes } from 'react'

import ComicItem from '../../shared/comic'

function Favourites (props) {
  return (
    <div className='Favourites' id='favourites'>
      <h2 className='title'>Meus favoritos</h2>
      <ul className='Favourites-list'>
        {props.data.length > 0 && props.data
          .map(comic => {
            return (
              <ComicItem
                {...comic}
                key={comic.id}
                deleteToFavourites={props.deleteToFavourites} />
            )
          })
        }
      </ul>
    </div>
  )
}

Favourites.propTypes = {
  data: PropTypes.array.isRequired,
  deleteToFavourites: PropTypes.func.isRequired
}

export default Favourites
