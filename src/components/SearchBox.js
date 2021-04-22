import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

//style of the Search input
const useStyles = makeStyles((theme) => ({
  root: {
    width: '35ch',
  },
  input: {
    marginLeft: theme.spacing(2),
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBox = ({ searchValue, setSearchValue }) => {
  const { root, input, iconButton } = useStyles();

  return (
    <>
      <Paper
        component="form"
        className={root}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBase
          type="text"
          className={input}
          value={searchValue}
          placeholder="Search for a movie"
          inputProps={{ 'aria-label': 'Search for a movie' }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IconButton type="submit" className={iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};
export default SearchBox;
