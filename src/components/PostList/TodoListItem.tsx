import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TodoType } from '../../@types';

const PostListItem: React.FC<TodoType> = ({ completed, title }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300, height: 450, alignContent: 'center' }}>
        <CardContent sx={{ alignContent: 'center' }}>
          <Typography
            sx={{ alignContent: 'center', fontWeight: 'bold' }}
            gutterBottom
            variant='h5'
            component='div'
          >
            {title}
          </Typography>
          <Typography
            sx={{ alignContent: 'center' }}
            gutterBottom
            variant='h5'
            component='div'
          >
            {completed ? 'active' : 'done'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostListItem;
