import React from 'react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryFilter } from './CategoryFilter';

describe('CategoryFilter', () => {
  const mockCategories = ['electronics', 'clothing', 'books'];
  const mockOnSelectCategory = vi.fn();

  it('renders all categories and "Todos" button', () => {
    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="all"
        onSelectCategory={mockOnSelectCategory}
      />,
    );

    expect(screen.getByText('Todos')).toBeInTheDocument();
    mockCategories.forEach((category) => {
      expect(
        screen.getByText(category.charAt(0).toUpperCase() + category.slice(1)),
      ).toBeInTheDocument();
    });
  });

  it('calls onSelectCategory when a category is clicked', () => {
    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="all"
        onSelectCategory={mockOnSelectCategory}
      />,
    );

    fireEvent.click(screen.getByText('Electronics'));
    expect(mockOnSelectCategory).toHaveBeenCalledWith('electronics');
  });

  it('applies correct styles to selected category', () => {
    render(
      <CategoryFilter
        categories={mockCategories}
        selectedCategory="electronics"
        onSelectCategory={mockOnSelectCategory}
      />,
    );

    const selectedButton = screen.getByText('Electronics');
    expect(selectedButton).toHaveClass('bg-emerald-600');
  });
});
