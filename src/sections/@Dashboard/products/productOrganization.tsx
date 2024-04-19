import React, { useState } from "react";
import {
    Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { styled, alpha, Theme } from "@mui/material/styles";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// export default function Grouped() {
//     const options = top100Films.map((option) => {
//       const firstLetter = option.title[0].toUpperCase();
//       return {
//         firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//         ...option,
//       };
//     });}
interface Data {
  [key: string]: any;
}
export const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function ProductOrganization() {
  const StyledRoot = styled("div")(({ theme }: { theme: Theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 350,
    padding: theme.spacing(2, 2.5, 2, 2.5),
    margin: theme.spacing(0, 0, 0, 0),
  }));

  const Styledinput = styled("div")(({ theme }: { theme: Theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(0, 0, 1.5, 0),
    margin: theme.spacing(0, 0, 1, 0),
  }));

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const [data, setData] = useState<Data>({});

  const getData = async (e: any) => {
    e.preventDefault();

    let name = e.target.name;
    // console.log(data);

    setData((prev) => (prev = { ...prev, [name]: e.target.value }));

    return data;
  };


  return (
    <StyledRoot>
      <Styledinput>
        {/* <Typography>
                    Product category
                </Typography> */}
        <Autocomplete
          id="grouped-demo"
          size="small"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="categories" />}
        />
      </Styledinput>
      <Styledinput>
        {/* <Typography>
                    Product subcategory
                </Typography> */}
        <Autocomplete
          id="grouped-demo"
          size="small"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="subcategory" />
          )}
        />
      </Styledinput>
      <Styledinput>
        {/* <Typography>
                    Vendor
                </Typography> */}
        <Autocomplete
          id="grouped-demo"
          size="small"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="vendor" />}
        />
      </Styledinput>
      <Styledinput>
        {/* <Typography>
                    Collections
                </Typography> */}
        <Autocomplete
          id="grouped-demo"
          size="small"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="collections" />
          )}
        />
      </Styledinput>
      <Styledinput>
        {/* <Typography>
                    Tags
                </Typography> */}
        <Autocomplete
          multiple
          id="size-small-outlined-multi"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={[top100Films[13]]}
          renderInput={(params) => (
            <TextField {...params} label="Tags" placeholder="Favorites" />
          )}
        />
      </Styledinput>

      <Stack direction="column" gap={2.5}>
        <Stack direction="row" gap={2.5}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Price"
              size="small"
            />
          </FormControl>

     <Box width={1}>

     <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
        //   helperText="Please select your currency"

          size="small"

        //   sx={{width:"20px"}}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>


     </Box>
        </Stack>
        <Autocomplete
      options={booleanoptions}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
        name="inStock"
          {...params}
          label="Stock"
          variant="outlined"
          onChange={getData}
        />
      )}
    />
      </Stack>
    </StyledRoot>
  );
}
interface Option {
  label: string;
  value: boolean;
}
const booleanoptions: Option[] = [
  { label: 'True', value: true },
  { label: 'False', value: false },
];
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
