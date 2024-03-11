import { fireEvent, render, waitFor } from '@testing-library/react';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import movies from './movies.json';
import '@testing-library/jest-dom';
import { MoviePage } from './MoviePage';
import { act } from 'react-dom/test-utils';

const server = setupServer(
  http.get('http://localhost:8080/movies', () => {
    return HttpResponse.json(movies);
  }),
  http.post('http://localhost:8080/movies', () => {
    return HttpResponse.json({ id: 4, name: 'Sample Movie' });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MoviePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoviePage />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the movie list', async () => {
    const { getByText, getByTestId } = render(<MoviePage />);
    await waitFor(() => {
      expect(getByText('The Dark Knight')).toBeTruthy();
      expect(getByTestId('table')).toBeTruthy();
    });
  });

  it('should add a movie', async () => {
    const { getByTestId, getByText } = render(<MoviePage />);
    act(() => {
      const input = getByTestId('name');
      const submit = getByTestId('submit');
      fireEvent.change(input, { target: { value: 'Sample Movie' } });
      submit.click();
    });
    await waitFor(() => {
      expect(getByText('Sample Movie')).toBeTruthy();
    });
  });
});
