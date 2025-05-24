import React from 'react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductList } from './ProductList';

// Mock of child components
vi.mock('./Products', () => ({
  Products: ({ data }) => (
    <div data-testid="products">
      {data.length}
      {' '}
      produtos
    </div>
  ),
}));

vi.mock('./CategoryFilter', () => ({
  CategoryFilter: ({ onSelectCategory }) => (
    <div data-testid="category-filter">
      <button onClick={() => onSelectCategory('electronics')}>
        Electronics
      </button>
      <button onClick={() => onSelectCategory('all')}>Todos</button>
    </div>
  ),
}));

describe('ProductList', () => {
  const mockProducts = [
    { id: 1, title: 'Product 1', category: 'electronics' },
    { id: 2, title: 'Product 2', category: 'clothing' },
    { id: 3, title: 'Product 3', category: 'electronics' },
  ];

  const mockCategories = ['electronics', 'clothing'];

  it('renders all products initially', () => {
    render(
      <ProductList initialData={mockProducts} categories={mockCategories} />,
    );
    expect(screen.getByTestId('products')).toHaveTextContent('3 produtos');
  });

  it('filters products when category is selected', () => {
    render(
      <ProductList initialData={mockProducts} categories={mockCategories} />,
    );

    // Click on the electronics category button
    fireEvent.click(screen.getByText('Electronics'));

    // Verify that only electronics products are displayed
    expect(screen.getByTestId('products')).toHaveTextContent('2 produtos');
  });

  it('shows all products when "Todos" is selected', () => {
    render(
      <ProductList initialData={mockProducts} categories={mockCategories} />,
    );

    // First filter by electronics
    fireEvent.click(screen.getByText('Electronics'));
    // Then go back to all
    fireEvent.click(screen.getByText('Todos'));

    // Verify that all products are displayed again
    expect(screen.getByTestId('products')).toHaveTextContent('3 produtos');
  });
});
