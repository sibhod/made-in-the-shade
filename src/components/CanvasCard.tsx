import { Canvas } from '@react-three/fiber';
import { Card, CardProps } from 'components/Card';
import React from 'react';

export const CanvasCard = ({ children, width, height }: CardProps) => {
  return (
    <Card width={width} height={height}>
      <Canvas>{children}</Canvas>
    </Card>
  );
};
