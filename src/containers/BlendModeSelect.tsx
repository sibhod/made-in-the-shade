import { Card, MenuItem, MenuProps, Select, SelectChangeEvent } from '@mui/material';
import { BlendMode, blendModes } from 'materials/BlendMode';
import React, { useState } from 'react';
import { IUniform } from 'three';

type Props = {
  uniforms: {
    uBlendMode: IUniform<BlendMode>;
  };
};

export const BlendModeSelect = ({ uniforms: { uBlendMode } }: Props) => {
  const [mode, setMode] = useState<BlendMode>(uBlendMode.value);

  const handleChange = (event: SelectChangeEvent<BlendMode>) => {
    const m = event.target.value;
    const selected = !(typeof m === 'string') && blendModes[m];

    if (selected) {
      uBlendMode.value = selected.mode;
      setMode(selected.mode);
    }
  };

  const menuProps: Partial<MenuProps> = {
    transitionDuration: 200,
    sx: {
      maxHeight: 400,
      '& .MuiPaper-root': {
        boxShadow: '0px 2px 6px -2px rgb(93 151 130 / 40%)',
      },
    },
  };

  return (
    <Card
      sx={{
        boxShadow: '0px 2px 6px -2px rgb(93 151 130 / 40%)',
        position: 'absolute',
        top: 'calc(50% - 352px)',
        right: 'calc(50% - 400px)',
        zIndex: 100,
        minWidth: 200,
      }}
    >
      <Select
        displayEmpty
        fullWidth
        onChange={handleChange}
        value={mode}
        renderValue={(value) => {
          return blendModes[value].name;
        }}
        MenuProps={menuProps}
        sx={{
          color: '#4d1f67',
          fontWeight: 300,
          fontSize: 14,
          WebkitFontSmoothing: 'subpixel-antialiased',

          letterSpacing: '-0.5px',
          border: 'none !important',
          '& *': {
            border: 'none !important',
          },
          '& .MuiList-root': {
            boxShadow: 'none',
          },
          '& .MuiSelect-select': {
            padding: '12px',
          },
        }}
      >
        {Object.values(blendModes).map(({ name, mode }) => (
          <MenuItem value={mode} key={mode}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Card>
  );
};

export default BlendModeSelect;
