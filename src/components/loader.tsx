import type * as React from "react";
import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";

export const Loader: React.FC = () => (
  <Waveform size="35" stroke="3.5" speed="1" color="inherit" />
);
