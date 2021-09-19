import React from 'react';
import PropTypes from 'prop-types';
import {
  CloudUploadIcon,
  ScatterPlotIcon,
  Card,
  TextInput,
} from 'evergreen-ui';

const CalcTimeHour = ({ currentTime: currentTimeProp }) => {
  // const all = [currentTime];
  const harvest = '2021-09-09 12:12:12';
  const plusTime = '72';
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
        <TextInput type="datetime" width="100%" value={currentTimeProp.toString()} />
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
        <header>Tempo <ScatterPlotIcon /></header>
        <TextInput type="number" width="100%" value={plusTime} />
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
        <TextInput type="datetime" width="100%" value={harvest} />
      </Card>
    </section>
  );
};

CalcTimeHour.prototype = {
  currentTime: PropTypes.object.isRequired,
};

export default CalcTimeHour;
