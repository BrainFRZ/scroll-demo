import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f5f5',
  },
  statusBox: {
    fontFamily: 'Spartan',
    fontSize: '20px',
  },
  lorem: {
    height: 300,
    width: 500,
    fontSize: '16px',
    lineHeight: '1.25',  // 20px lines
    padding: '0px 5px', // 5px sides pad
    overflow: 'auto',
    fontFamily: 'Roboto Mono',
  },
  snapBox: {
  },
});
export default useStyles;