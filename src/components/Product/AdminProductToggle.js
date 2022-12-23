import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

export default function AdminProductToggle({parentFormat, setFormatsParent}) {

  const handleFormat = (event, newFormats) => {
    setFormatsParent(newFormats);
  };
  React.useEffect(()=>{console.log(parentFormat)},[parentFormat])
  return (
    <ToggleButtonGroup
      value={parentFormat}
      onChange={handleFormat}
      exclusive
      aria-label="crud selection"
    >
      {/* <ToggleButton value="create">
        <Typography>
            Create
        </Typography>
      </ToggleButton> */}
      <ToggleButton value="update">
        <Typography>
            Update
        </Typography>
      </ToggleButton>
      <ToggleButton value="delete">
        <Typography>
            Delete
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}