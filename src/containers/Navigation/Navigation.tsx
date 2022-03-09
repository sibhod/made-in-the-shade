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
        boxShadow: 'none',
        position: 'absolute',
        top: 2,
        right: 22,
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
          border: 'none !important',
          '& *': {
            border: 'none !important',
          },
          '& .MuiList-root': {
            boxShadow: 'none',
          },
        }}
      >
        {sceneMetas.map(({ name, route }) => (
          <MenuItem value={route} key={route}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Card>
  );
};
