import PostList from '../../components/PostList';
import FilterBar from '../../components/FilterBar';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Todos</h1>
      <FilterBar />
      <PostList />
    </div>
  );
};

export default Home;
