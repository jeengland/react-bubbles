import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [updated, setUpdated] = useState(true);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    if (updated) {
      axiosWithAuth()
        .get('/api/colors')
        .then((response) => setColorList(response.data))
        .catch((error) => console.error(error));
      setUpdated(false)
    }
  }, [updated])
  return (
    <>
      <ColorList colors={colorList} updateColors={setUpdated} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
