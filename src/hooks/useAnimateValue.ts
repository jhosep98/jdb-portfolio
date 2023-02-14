import { useState, useEffect } from 'react';

interface PropsModel {
  start: number;
  end: number;
  duration: number;
}

export const useAnimateValue = ({ start, end, duration }: PropsModel) => {
  const [value, setValue] = useState<number>(start);

  useEffect(() => {
    let startTimestamp: number = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return { value };
};
