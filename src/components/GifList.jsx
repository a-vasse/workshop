import React from 'react';
import Gif from "./Gif";

const GifList = (props) => {
  const { gifIds, setSelectedGif } = props;
  const gifIdList = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div className="gif-list">
      {gifIdList.map( (gifId) => <Gif id={gifId} key={gifId} setSelectedGif={setSelectedGif}/>)}
    </div>
  );
};

export default GifList;
