import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider({handleRangeChange, value}: { value: number[],handleRangeChange: (event: Event, newValue: number | number[]) => void }) {




  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={100000}
      />
    </Box>
  );
}
