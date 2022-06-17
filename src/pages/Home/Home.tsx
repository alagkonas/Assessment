import PostList from '../../components/PostList';
import FilterBar from '../../components/FilterBar';

const Home: React.FC = () => {
  return (
    <div>
      <FilterBar />
      <PostList />
    </div>
  );
};

export default Home;
