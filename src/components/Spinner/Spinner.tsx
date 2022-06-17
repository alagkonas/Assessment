import CircularProgress from '@mui/material/CircularProgress';
import './Spinner.css';

const Spinner: React.FC = () => {
  return (
    <div id='spinner-div'>
      <CircularProgress size='60px' />
    </div>
  );
};

export default Spinner;
