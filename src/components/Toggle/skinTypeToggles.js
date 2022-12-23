import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

export default function SkinTypeToggles({parentFormat, setFormatsParent}) {

  const handleFormat = (event, newFormats) => {
    setFormatsParent(newFormats);
  };
//   React.useEffect(()=>{console.log(formats)},[formats])
  return (
    <ToggleButtonGroup
      value={parentFormat}
      onChange={handleFormat}
      aria-label="skin type selection"
      // orientation='vertical'
    >
      <ToggleButton value="dry">
        {/* <FormatBoldIcon /> */}
        <Typography>
            Dry Skin
        </Typography>
      </ToggleButton>
      <ToggleButton value="oily">
        {/* <FormatItalicIcon /> */}
        <Typography>
            Oily Skin
        </Typography>
      </ToggleButton>
      <ToggleButton value="all">
        <Typography>
            Any
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}