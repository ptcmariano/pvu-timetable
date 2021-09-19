/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  HeartIcon, Heading, Pane, Spinner, Button, DuplicateIcon, IconButton, Tooltip,
} from 'evergreen-ui';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';
import CountryPicker from '@components/CountryPicker';
import FormatPicker from '@components/FormatPicker';
import Timetable from '@components/Timetable';
import DonationBox from '@components/DonationBox';
import CalcTimeHour from '@components/CalcTimeHour';
import { config } from '@config';
import { countries } from '@constants';
import './styles.css';

const formats = [
  { name: '12 Hs', value: '12h', format: 'h:mm a' },
  { name: '24 Hs', value: '24h', format: 'HH:mm' },
];

const Home = () => {
  const { t, i18n } = useTranslation();

  const [country, setCountry] = useState(countries[2]);
  const [format, setFormat] = useState(formats[1]);
  const [currentTime, setCurrentTime] = useState(DateTime.now().setZone(countries[2].timezone));

  useEffect(() => {
    const savedCountry = localStorage.getItem('country');
    if (savedCountry) {
      setCountry(JSON.parse(savedCountry));
    }

    const savedFormat = localStorage.getItem('format');
    if (savedFormat) {
      setFormat(JSON.parse(savedFormat));
    }

    setCurrentTime(DateTime.utc());
    const i = setInterval(() => {
      setCurrentTime(DateTime.utc());
    }, 10000);

    return () => {
      clearInterval(i);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('country', JSON.stringify(country));
  }, [country]);

  useEffect(() => {
    localStorage.setItem('format', JSON.stringify(format));
  }, [format]);

  return (
    <div className="container">
      {/* Settings */}
      <Pane className="box box__fixed box__center">
        <Pane style={{ marginBottom: '8px', textAlign: 'center' }}>
          <Heading is="h3" size={800} color="#fff">
            {t('group_schedules')}
          </Heading>
        </Pane>
        <Pane>
          <CountryPicker data={countries} selected={country} onSelect={setCountry} />
        </Pane>
        <Pane marginTop="8px">
          <FormatPicker data={formats} selected={format} onSelect={setFormat} />
        </Pane>
        <Pane marginTop="8px">
          <Pane textAlign="center">
            {i18n.language === 'es' ? `${t('time_in')} ` : ''}{country.name}{i18n.language === 'en' ? ` ${t('time_in')}` : ''}: {currentTime.setZone(country.timezone).toFormat(format.format)}
          </Pane>
          <Pane textAlign="center">
            {t('server_time')}: {currentTime.toFormat(format.format)}
          </Pane>
        </Pane>
      </Pane>

      {/* Timetable */}
      <Pane marginBottom="8px" className="box box__fixed">
        <Timetable
          groupCount={config.groupCount}
          groupsPerRow={config.groupsPerRow}
          startTime={config.startTime}
          currentTime={currentTime}
          shiftDuration={config.shiftDuration}
          timezone={country.timezone}
          format={format.format}
        />
      </Pane>

      {/* calc hours */}
      <Pane marginBottom="8px" className="box box__fixed">
        <CalcTimeHour
          currentTime={currentTime}
        />
      </Pane>

      {/* Links */}
      <Pane marginBottom="8px" className="box box__fixed box__center">
        <a href="https://www.coingecko.com/pt/moedas/plant-vs-undead-token" target="_blank" rel="noreferrer" style={{ textAlign: 'center' }}>
          PVU Coingecko
        </a>
        <a href="https://coinmarketcap.com/pt-br/currencies/plantvsundead/" target="_blank" rel="noreferrer" style={{ textAlign: 'center' }}>
          PVU Coinmarket
        </a>
        <Pane>
          {t('created_with')} <HeartIcon color="danger" /> {t('by')} NFT Games Land
        </Pane>
        <Pane>
          {t('edited_with')} <HeartIcon color="danger" /> {t('by')} Paulo Tiago
        </Pane>
      </Pane>

      {/* Banner */}
      <Pane className="box box__fixed box__center">
        <a href="https://github.com/ptcmariano" target="_blank" rel="noreferrer" style={{ textAlign: 'center' }}>
          <img src="/nft-games-land.png" alt="NFT Games Land" style={{ width: '20%' }} />
        </a>
        <Pane>
          {t('created_with')} <HeartIcon color="danger" /> {t('by')} NFT Games Land
        </Pane>
        <Pane>
          {t('edited_with')} <HeartIcon color="danger" /> {t('by')} Paulo Tiago
        </Pane>
      </Pane>

      <Pane className="box box__fixed box__center">
        <Pane>
          <DonationBox />
        </Pane>
      </Pane>

      {config.showAlert && (
        <Pane className="box box__fixed box__alert">
          {t('alert_message')}
        </Pane>
      )}

    </div>
  );
};

export default Home;
