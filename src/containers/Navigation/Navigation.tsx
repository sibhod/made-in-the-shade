import { Card, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useActiveSceneMeta } from 'hooks/useActiveSceneMeta';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { sceneMetas, sceneMetasMap } from 'scenes/sceneMetas';

export const Navigation = () => {
  const navigate = useNavigate();
  const activeSceneMeta = useActiveSceneMeta();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const scene = event.target.value;
    navigate(`/scene/${scene}`);
  };

  return (
    <Card
      sx={{
        boxShadow: '0px 2px 6px -2px rgb(93 151 130 / 40%)',
        position: 'absolute',
        top: 'calc(50% - 352px)',
        left: 'calc(50% - 100px - 300px)',
        zIndex: 100,
        minWidth: 200,
      }}
    >
      <Select
        displayEmpty
        fullWidth
        onChange={handleChange}
        value={activeSceneMeta?.route ?? ''}
        renderValue={(value) => {
          return sceneMetasMap.get(value)?.name ?? 'Select a scene...';
        }}
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
        {sceneMetas.map(({ name, route }) => (
          <MenuItem value={route} key={route} disabled={route !== 'blend-modes'}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Card>
  );
};
