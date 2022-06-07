import {makeStyles} from '@mui/styles';
import Paper from '@mui/material/Paper';
import {
  createTheme,
  styled,
} from '@mui/material/styles';

export const useAppStyles = makeStyles({
  headText: {
    color: '#b64949',
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '25px',
    marginTop: '10px',
  },
  layout: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: '95%',
    borderRadius: 10,
    backgroundColor: '#f0f0f0 !important',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #b64949',
  },
  header: {
    height: '150px',
  },
  content: {
    'display': 'flex',
    'overflow': 'scroll',
    'flexDirection': 'column',
    'margin': 30,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  smallContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  startButton: {
    minWidth: '150px !important',
    backgroundColor: '#b64949 !important',
  },
  levelSelector: {
    maxWidth: '150px !important',
    marginRight: '30px !important',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 15,
    marginBottom: 15,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const Item = styled(Paper)(({
  theme,
}) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

