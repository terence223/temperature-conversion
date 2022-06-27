import { useState } from 'react';
import { faRightLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Row } from 'antd';
import styled from 'styled-components';

import TemperatureInput from '../components/TemperatureInput';
import { Temperature as TP } from '../types/Temperature';
import {
  ABSOLUTE_ZERO_IN_CELCIUS,
  ABSOLUTE_ZERO_IN_FARENHEIT,
  covertCelciusToFarenheit,
  covertFarenheitToCelcius,
  TEMPERATURE_REGEX,
} from '../utils/temperature';

const Container = styled.div`
  margin-top: 20px;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
`;

const DashboardCard = styled(Card)`
  min-height: 200px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const ClearButton = styled(Button)`
  margin-bottom: 30px;
`;

const SwapIcon = styled(FontAwesomeIcon)`
  margin-bottom: 76px;
  padding: 0 14px;
`;

const ClearIcon = styled(FontAwesomeIcon)`
  padding-right: 8px;
`;

const TemperatureConversion = () => {
  const [celcius, setCelcius] = useState<string>('');
  const [farenheit, setFarenheit] = useState<string>('');

  const errorMessageForLowerThanAbsoluteZero = 'Lower than absolute zero';

  const isCelciusLowerLimit: boolean =
    !!celcius && parseFloat(celcius) < ABSOLUTE_ZERO_IN_CELCIUS;

  const isFarenheitLowerLimit: boolean =
    !!farenheit && parseFloat(farenheit) < ABSOLUTE_ZERO_IN_FARENHEIT;

  const initial = () => {
    setCelcius('');
    setFarenheit('');
  };

  const handleCelciusInput = (val: string) => {
    if (val === '') {
      initial();
      return;
    }
    if (TEMPERATURE_REGEX.test(val)) {
      const celciusValue = parseFloat(val);
      setCelcius(val);
      if (celciusValue < ABSOLUTE_ZERO_IN_CELCIUS) {
        setFarenheit('');
        return;
      }
      setFarenheit(covertCelciusToFarenheit(celciusValue).toString());
    }
  };

  const handleFarenheitInput = (val: string) => {
    if (val === '') {
      initial();
      return;
    }
    if (TEMPERATURE_REGEX.test(val)) {
      const farenheitValue = parseFloat(val);
      setFarenheit(val);
      if (farenheitValue < ABSOLUTE_ZERO_IN_FARENHEIT) {
        setCelcius('');
        return;
      }
      setCelcius(covertFarenheitToCelcius(farenheitValue).toString());
    }
  };

  return (
    <Row>
      <Col lg={{ span: 12, offset: 6 }}>
        <DashboardCard title="Temperature Conversion">
          <Container>
            <TemperatureInput
              type={TP.CELCIUS}
              className="celcius-input"
              value={celcius}
              addonAfter="°C"
              errorMessage={
                isCelciusLowerLimit ? errorMessageForLowerThanAbsoluteZero : ''
              }
              handleChange={handleCelciusInput}
            />
            <SwapIcon icon={faRightLeft} />
            <TemperatureInput
              type={TP.FARENHEIT}
              className="farenheit-input"
              value={farenheit}
              addonAfter="°F"
              errorMessage={
                isFarenheitLowerLimit
                  ? errorMessageForLowerThanAbsoluteZero
                  : ''
              }
              handleChange={handleFarenheitInput}
            />
          </Container>
          <ClearButton
            type="primary"
            shape="round"
            icon={<ClearIcon icon={faXmark} />}
            size="large"
            onClick={initial}
          >
            Clear
          </ClearButton>
        </DashboardCard>
      </Col>
    </Row>
  );
};

export default TemperatureConversion;
