import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { QueryClientProvider } from 'react-query';
import { client } from '../../../services';
import SignIn from '../SignIn';

const MockSignIn: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <SignIn />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

describe('Sign in page functionality', () => {
  it('should render sign in form', async () => {
    render(<MockSignIn />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('user should be able to type', async () => {
    render(<MockSignIn />);
    const emailInputElement = screen.getByPlaceholderText(/johndoe@gmail.com/i);
    const passwordInputElement = screen.getByPlaceholderText(/password/i);

    fireEvent.change(emailInputElement, {
      target: { textContent: 'alekos@test.com' },
    });
    fireEvent.change(passwordInputElement, {
      target: { textContent: '123456' },
    });

    expect(emailInputElement.textContent).toBe('alekos@test.com');
    expect(passwordInputElement.textContent).toBe('123456');
  });
});
