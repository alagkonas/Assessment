import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { QueryClientProvider } from 'react-query';
import { client } from '../../../services';
import Home from '../Home';

const MockHome: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Home />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

describe('Home page functionality', () => {
  it('should render the home page', async () => {
    render(<MockHome />);
    const headerElement = screen.getByRole('heading', { name: /todos/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('search input should display filtered user', async () => {
    render(<MockHome />);
    const searchInputElement = screen.getByRole('combobox', {
      name: /filter by users/i,
    });

    fireEvent.change(searchInputElement, {
      target: { textContent: 'Leanne Graham' },
    });
    expect(searchInputElement.textContent).toBe('Leanne Graham');
  });

  it('search input should clear after CloseIcon', async () => {
    render(<MockHome />);
    const searchInputElement = screen.getByRole('combobox', {
      name: /filter by users/i,
    });
    const closeIconElement = screen.getByTestId('CloseIcon');

    fireEvent.click(closeIconElement);
    expect(searchInputElement.textContent).toBe('');
  });
});
