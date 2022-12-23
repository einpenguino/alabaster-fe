import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const topFilms = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    }]
    function sleep(delay = 0) {
        return new Promise((resolve) => {
          setTimeout(resolve, delay);
        });
      }
export default function DirIngredientsToggleAsync({parentFormat, setFormatsParent}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [data, setData] = React.useState([]);
  const loading = open && options.length === 0;
  const fetchOptions = {
    method : 'GET',
    credentials: "include",
    headers :{
      'Content-Type': 'application/json',
    },
    // mode:'no-cors',
    // body:JSON.stringify(form)
  }

  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
    //   await sleep(1e3); // For demo purposes.
      const response = await fetch(`${process.env.REACT_APP_EXPRESS_URL}/ingredients`, fetchOptions)
      const json = await response.json()
      console.log(json)

      if (active) {
        // setOptions([...topFilms]);
        setOptions([...json]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  // React.useEffect(() => {
  //   console.log(options)
  // }, [options]);

  return (
      <Autocomplete
        multiple
        id="tags-standard"
        // options={top100Films}
        // getOptionLabel={(option) => option.title}
        defaultValue={[topFilms[1]]}

        open={open}
        onOpen={() => {
            setOpen(true);
        }}
        onClose={() => {
            setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.ingredients === value.ingredients}
        getOptionLabel={(option) => option.ingredients}
        options={options}
        loading={loading}

        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Filter by Active Ingredients"
            placeholder="Active Ingredients"
            InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
          />
        )}
      />
)}