import React from 'react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import { Products } from './Products';

// Mock of components and functions
vi.mock('next/image', () => ({
  default: ({ src, alt }) => (
    <img src={src} alt={alt} data-testid="product-image" />
  ),
}));

vi.mock('next/link', () => ({
  default: ({ children, href }) => (
    <a href={href} data-testid="product-link">
      {children}
    </a>
  ),
}));

vi.mock('@/utils/formatPrice', () => ({
  formatPrice: (price) => `R$ ${price.toFixed(2)}`,
}));

vi.mock('@/utils/replaceWhiteSpaceToUnderscore', () => ({
  replaceWhiteSpaceToUnderscore: (text) => text.replace(/\s+/g, '_'),
}));

describe('Products', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Test Product',
      price: 99.99,
      image: 'test-image.jpg',
      category: 'electronics',
    },
  ];

  it('renders product card with correct information', () => {
    render(<Products data={mockProducts} />);

    // Verify that the product title is present
    expect(screen.getByText('Test Product')).toBeInTheDocument();

    // Verify that the price is formatted correctly
    expect(screen.getByText('R$ 99.99')).toBeInTheDocument();

    // Verify that the image is present with the correct attributes
    const image = screen.getByTestId('product-image');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Product');

    // Verify that the product link is correct
    const link = screen.getByTestId('product-link');
    expect(link).toHaveAttribute('href', '/product/1/Test_Product');
  });

  it('renders multiple products correctly', () => {
    const multipleProducts = [
      ...mockProducts,
      {
        id: 2,
        title: 'Another Product',
        price: 149.99,
        image: 'another-image.jpg',
        category: 'clothing',
      },
    ];

    render(<Products data={multipleProducts} />);

    // Verify that all products are rendered
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Another Product')).toBeInTheDocument();
    expect(screen.getByText('R$ 99.99')).toBeInTheDocument();
    expect(screen.getByText('R$ 149.99')).toBeInTheDocument();
  });

  it('renders empty state when no products are provided', () => {
    render(<Products data={[]} />);
    expect(screen.queryByTestId('product-image')).not.toBeInTheDocument();
  });
});
