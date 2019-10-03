import * as React from 'react';
import styled from 'styled-components';

interface SliderProps {
  step: number,
  value: number,
  min: number,
  max: number,
  onChange: Function
}

interface StyledSliderProps {
  unfilled: number,
}

const StyledSlider = styled.input.attrs({
  style: (props: StyledSliderProps) => ({
    background: `linear-gradient(to left, #ddd ${props.unfilled}%, #fa7fb0 0%)`,
  }),
})<StyledSliderProps>`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  outline: none;
  margin: 0;
  border-radius: 15px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #f9639f;
    border: 5px solid #f9639f;
    cursor: pointer;
  }
`;

const Slider = (sliderProps: SliderProps) => {
  const {
    step,
    min,
    max,
    value,
    onChange,
  } = sliderProps;

  const unfilled = 100 - ((value / max) * 100);

  return (
    <StyledSlider
      type="range"
      step={step}
      min={min}
      max={max}
      value={value}
      unfilled={unfilled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(parseInt(e.target.value, 10))}
    />
  );
};

export default Slider;
