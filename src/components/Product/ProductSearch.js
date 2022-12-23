import { useState, useEffect, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';



function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function ProductSearch({ parentFormat, setParentFormat, reset}) {
  const fetchOptions = {
    method : 'GET',
    credentials: "include",
    // headers :{
    //   'Content-Type': 'application/json',
    // },
    // mode:'no-cors',
    // body:JSON.stringify(form)
  }

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/products`, fetchOptions)
      const json = await response.json()
    //   console.log(json)
    //   let nl = []
    //   json.forEach(ele => {
    //     nl.push({id:ele._id, name:ele.name})
    //   })
    //   console.log(nl)
      if (active) {
        setOptions([...json]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
    //   sx={{ width: 345 }}
      fullWidth
      open={open}
      value={parentFormat}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={(e, value)=>{
        setParentFormat(value)
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for available products"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
}