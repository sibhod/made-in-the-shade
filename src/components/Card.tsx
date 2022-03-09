import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type CardProps = {
  children?: ReactNode;
  width?: number;
  height?: number;
};

type CardElementProps = Pick<CardProps, 'width' | 'height'>;

const CardEl = styled.div.attrs<CardElementProps, CardElementProps>(
  ({ width, height }) => ({
    width,
    height,
  }),
)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 40px 60px 30px rgb(109 177 152 / 15%),
    0px 12px 16px -6px rgb(93 151 130 / 21%);
  width: ${(props) => `${props.width}px` ?? 'max-content'};
  height: ${(props) => `${props.height}px` ?? 'max-content'};
`;

export const Card = ({ children, width, height }: CardProps) => {
  return (
    <CardEl width={width} height={height}>
      {children}
    </CardEl>
  );
};
