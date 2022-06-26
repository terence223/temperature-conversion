import { FC } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

import Diagram from 'components/Diagram';

import { Temperature as TP } from '../typescript/Temperature';

const TemperatureInputComponent = styled(Input)`
  margin-top: 20px;
  width: 100%;
`;

const TemperatureInputContainer = styled.div`
  width: 400px;
  margin-bottom: 30px;
`;

const ErrorMessageP = styled.p`
  height: 20px;
  color: #ff4d4f;
`;

const DiagramWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 12px auto;
`;

const TemperatureInput: FC<{
  type: TP;
  className?: string;
  addonAfter: string;
  value: string;
  handleChange: (val: string) => void;
  errorMessage: string;
}> = ({
  type,
  className = '',
  addonAfter = '',
  value,
  handleChange,
  errorMessage = '',
}) => {
  return (
    <TemperatureInputContainer>
      <DiagramWrapper>
        <Diagram value={value} type={type} />
      </DiagramWrapper>
      <TemperatureInputComponent
        className={className}
        type="number"
        value={value}
        addonAfter={addonAfter}
        size="large"
        status={!!errorMessage ? 'error' : undefined}
        step="1"
        onChange={e => handleChange(e.target.value)}
      />
      <ErrorMessageP>{errorMessage}</ErrorMessageP>
    </TemperatureInputContainer>
  );
};

export default TemperatureInput;
