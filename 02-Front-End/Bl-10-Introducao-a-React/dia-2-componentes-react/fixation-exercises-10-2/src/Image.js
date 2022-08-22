import React from 'react';

class Image extends React.Component {
  render() {
    const image = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
    return (
      <img src={ image } alt='Cute cat staring'/>
    )
  }
}

export default Image;
