import { useState } from 'react';

function useDots(images) {
  const [activeIndex, setActiveIndex] = useState(0);

  return [activeIndex, setActiveIndex];
}

export default useDots;
