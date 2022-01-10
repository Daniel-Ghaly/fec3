import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from './Reviews.jsx';
import { results } from './sampleData';
const rating = metadata.rating;


const renderComponent = () => render(
  <Reviews
    reviewCount={ results.length }
  />
);

it('displays the number of reviews', () => {
  renderComponent();
  expect(document.body).toHaveTextContent(`Read all ${results.length} reviews`);
});