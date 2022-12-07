import React from 'react';

const Gif = (props) => {
  const { id, setSelectedGif } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  const HandleClick = () => {
    setSelectedGif(id);
  }

  return (
   <img src={url} alt="" className="gif" onClick={HandleClick}/>
  );
};

export default Gif;
