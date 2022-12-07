//rcc + tab to class react template
//rsc + tab to functional react template

import React, { useState } from 'react';

import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedGif, setSelectedGif] = useState("WuGSL4LFUMQU");
  const [gifIds, setGifIds] = useState("WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq");
  const changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const newGifIds = res.data.map(gif => gif.id)
      setGifIds(newGifIds);
    });
  }

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifList={changeGifList} />
        <div className="selected-gif">
          <Gif id={selectedGif}/>
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGif={setSelectedGif}/>
      </div>
    </div>
  );
};

export default App;
