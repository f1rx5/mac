import React, { useState } from "react";
import Etform from "./EtForm";
import EtList from "./EtList";
const EtApp = () => {
  let [track, setTrack] = useState([
    {
        tDate: new Date().toLocaleString(),
        tTotal: 1000,
        tAddedAmount: "-",
        tRemovedAmount: "-",
        tBalanceAmount: 1000,
      },
  ]);
  console.log(track)
  return (
    <>
      <Etform track={track} settrack={setTrack} />
      <EtList track={track}/>
    </>
  );
};

export default EtApp;
