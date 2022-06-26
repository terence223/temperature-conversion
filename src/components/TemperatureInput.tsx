import { FC } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const TemperatureInputComponent = styled(Input)`
  width: 100%;
`;

const TemperatureInputContainer = styled.div`
  width: 400px;
`;

const ErrorMessageSpan = styled.span`
  color: #ff4d4f;
`;

const TemperatureInput: FC<{
  className?: string;
  addonAfter: string;
  value: string | number;
  handleChange: (val: string) => void;
  errorMessage: string;
}> = ({
  className = '',
  addonAfter = '',
  value,
  handleChange,
  errorMessage = '',
}) => {
  return (
    <TemperatureInputContainer>
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
      <ErrorMessageSpan>{errorMessage}</ErrorMessageSpan>
    </TemperatureInputContainer>
  );
};

export default TemperatureInput;
