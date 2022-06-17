import { useAppSelector } from '../../app/hooks';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TodoType } from '../../@types';

const PostListItem: React.FC<TodoType> = ({ completed, title, userId }) => {
  const { users } = useAppSelector((state) => state.user);

  const name = users?.filter((user) => userId === user.id);

  const userName = name![0].name;

  return (
    <div>
      <Card sx={{ maxWidth: 300, height: 350, alignContent: 'center' }}>
        <CardContent sx={{ alignContent: 'center' }}>
          <Typography
            sx={{ alignContent: 'center', fontWeight: 600 }}
            gutterBottom
            variant='h5'
            component='div'
          >
            {userName}
          </Typography>
          <Typography
            sx={{ alignContent: 'center', marginTop: '2rem' }}
            gutterBottom
            variant='h5'
            component='div'
          >
            Title: {title}
          </Typography>
          <Typography
            sx={{ alignContent: 'start', marginTop: '5rem' }}
            gutterBottom
            variant='h5'
            component='div'
          >
            Status: {completed ? 'active' : 'done'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostListItem;
