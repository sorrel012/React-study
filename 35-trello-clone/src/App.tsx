import { useRecoilState } from 'recoil';
import { hourSelector, minuteState } from './store/atoms';
import React from 'react';

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const handleMinuteChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const handleHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={handleMinuteChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={handleHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
