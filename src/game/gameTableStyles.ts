import {makeStyles} from '@mui/styles';

export const useGameTableStyles = makeStyles({
  cell: {
    width: 30,
    height: 30,
    borderRadius: '0px !important',
    backgroundColor: '#bdbdbd !important'
  },
  cellClicked: {
    width: 40,
    height: 40,
    minWidth: '40px !important',
    borderRadius: '0px !important',
    backgroundColor: '#bdbdbd !important',
    borderLeft: 'solid 2px #7b7b7b !important',
    borderTop: 'solid 2px #7b7b7b !important',
    borderBottom: 'none !important',
    borderRight: 'none !important',
  },
  cellNotClicked: {
    width: 40,
    height: 40,
    minWidth: '40px !important',
    borderRadius: '0px !important',
    backgroundColor: '#bdbdbd !important',
    borderBottom: 'solid 3px #7b7b7b !important',
    borderRight: 'solid 3px #7b7b7b !important',
    borderTop: 'solid 3px #fff !important',
    borderLeft: 'solid 3px #fff !important',
  },
  text: {
    fontWeight: 'bold',
    margin: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
