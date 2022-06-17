import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { useFetchTodos } from '../../hooks/fetchTodos';
import TodoListItem from './TodoListItem';
import Grid from '@mui/material/Grid';
import { TodoType } from '../../@types';
import './TodoList.css';

const TodoList: React.FC = () => {
  const { data: apiTodos, isLoading: todosLoading } = useFetchTodos();
  const { filteredUser, isLoading } = useAppSelector((state) => state.user);

  let todos = apiTodos;

  if (filteredUser) {
    todos = apiTodos.filter((todo: TodoType) => {
      return todo.userId === filteredUser?.id;
    });
  }
  if (!filteredUser) {
    todos = apiTodos;
  }

  if (todosLoading) return <p>Loading...</p>;

  return (
    <div id='items-grid'>
      <Grid
        container={true}
        spacing={{ xs: 2, md: 4 }}
        columns={{ md: 12, lg: 16 }}
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {todos?.map((todo: TodoType) => {
          return (
            <Grid id='item-grid' item xs={2} sm={4} md={4} key={todo.id}>
              <TodoListItem completed={todo.completed} title={todo.title} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TodoList;
