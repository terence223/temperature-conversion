import { FC, useCallback, useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import { Temperature as TP } from '../typescript/Temperature';
import debounce from '../utils/debounce';
import {
  ABSOLUTE_ZERO_IN_CELCIUS,
  ABSOLUTE_ZERO_IN_FARENHEIT,
} from '../utils/temperature';

import 'react-circular-progressbar/dist/styles.css';

// meaningless, just setting a max limitation for counting ratio of diagram
const MAX_FOR_CELCIUS = 1000;
const MAX_FOR_FARENHEIT = 1500;

const Diagram = ({ value, type }: { value: string; type: TP }) => {
  const [start, setStart] = useState<number>();
  const [end, setEnd] = useState<number>();

  const color: string = type === TP.CELCIUS ? '#2980B9' : '#C0392B';
  const unit: string = type === TP.CELCIUS ? '°C' : '°F';
  const min: number =
    type === TP.CELCIUS ? ABSOLUTE_ZERO_IN_CELCIUS : ABSOLUTE_ZERO_IN_FARENHEIT;
  const max: number = type === TP.CELCIUS ? MAX_FOR_CELCIUS : MAX_FOR_FARENHEIT;
  const nowValue = parseFloat(value);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshStartAndEnd = useCallback(
    debounce((val: number) => {
      setStart(() => {
        return end === undefined ? 0 : end;
      });

      setEnd(() => {
        return Number.isNaN(val)
          ? 0
          : Math.round(((val - min) / (max - min)) * 100);
      });
    }, 500),
    [end, max, min]
  );

  useEffect(() => {
    refreshStartAndEnd(nowValue);
  }, [nowValue, refreshStartAndEnd]);

  return (
    <ProgressProvider
      valueStart={start === undefined ? 0 : start}
      valueEnd={end === undefined ? 0 : end}
    >
      {(pathValue: number) => (
        <CircularProgressbar
          counterClockwise={type === TP.FARENHEIT}
          value={pathValue}
          text={Number.isNaN(nowValue) ? unit : `${nowValue}${unit}`}
          styles={{
            path: {
              stroke: color,
              transform: 'rotate(0.5turn)',
              transformOrigin: 'center center',
            },
            text: {
              fill: color,
              fontSize: '14px',
            },
          }}
        />
      )}
    </ProgressProvider>
  );
};

const ProgressProvider: FC<{
  valueStart: number;
  valueEnd: number;
  children: (value: number) => JSX.Element;
}> = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState<number>(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default Diagram;
