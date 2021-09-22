import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CloudUploadIcon,
  TimeIcon,
  ScatterPlotIcon,
  Card,
  TextInput,
} from 'evergreen-ui';
// import { DateTime } from 'luxon';

const CalcTimeHour = ({
  currentTime: currentTimeProp,
  timezone,
}) => {
  const [harvest, setHarvest] = useState('2021-09-09');
  const [plusTime, setPlusTime] = useState('72');
  const handlerHarvest = () => {
    const calcTime = currentTimeProp;
    calcTime.plus({ hours: plusTime });
    setHarvest(calcTime.setZone(timezone).format('Y-M-d'));
  };

  return (
    <section>
      <Card
        elevation={1}
        float="left"
        width={200}
        height={120}
        margin={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <header>Plantado <CloudUploadIcon /></header>
        <TextInput disabled type="datetime" width="100%" value={currentTimeProp.toString()} />
      </Card>
      <Card
        elevation={1}
        float="left"
        width={100}
        height={120}
        margin={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <header>Tempo <TimeIcon /></header>
        <TextInput disabled type="number" width="100%" value={plusTime} onChange={setPlusTime} />
      </Card>
      <Card
        elevation={1}
        float="left"
        width={200}
        height={120}
        margin={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <header>Colheita <ScatterPlotIcon /></header>
        <TextInput disabled type="datetime" width="100%" value={harvest} onChange={handlerHarvest} />
      </Card>
    </section>
  );
};

CalcTimeHour.prototype = {
  currentTime: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired,
};

export default CalcTimeHour;
