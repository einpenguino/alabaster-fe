import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ parentFormat, setParentFormat, label, options}) {
  const [optionsl, setOptionsl] = useState('');
//   const parentData = options
  
  const generateOptions = (optionsl) => {
    const optionsArr = []
    if (optionsl){
      for (let item of optionsl){
        optionsArr.push(<MenuItem value={item[1]}>{item[0]}</MenuItem>)
      }
    }
    // return gridArr
    setOptionsl(optionsl)
  }
  useEffect(() => {generateOptions(options)}, [])

  const handleChange = (event) => {
    setParentFormat(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={parentFormat}
          label="Age"
          onChange={handleChange}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
            {/* {optionsl ? */}
            optionsl
            :
            null
            }
        </Select>
      </FormControl>
    </Box>
  );
}