import React from 'react'; 
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostCard from './PostCard';

test('renders PostCard with title and body', () => {
  const title = 'Test Post';
  const body = 'This is a test post body.';
  
  render(<PostCard title={title} body={body} />);
  
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(body)).toBeInTheDocument();
});
