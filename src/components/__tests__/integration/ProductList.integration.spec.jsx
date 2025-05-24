import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProductList } from "../../ProductList";

describe("ProductList Integration", () => {
  const mockProducts = [
    {
      id: 1,
      title: "Product 1",
      category: "electronics",
      price: 99.99,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      category: "clothing",
      price: 149.99,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      category: "electronics",
      price: 199.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ];

  const mockCategories = ["electronics", "clothing"];

  it("renders complete product list with category filter", () => {
    render(
      <ProductList initialData={mockProducts} categories={mockCategories} />
    );

    // Verify that the category filter is present
    expect(screen.getByText("Todos")).toBeInTheDocument();
    mockCategories.forEach((category) => {
      expect(
        screen.getByText(category.charAt(0).toUpperCase() + category.slice(1))
      ).toBeInTheDocument();
    });

    // Verify that all products are displayed initially
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("filters products when category is selected", () => {
    render(
      <ProductList initialData={mockProducts} categories={mockCategories} />
    );

    // Click on the electronics category button
    fireEvent.click(screen.getByText("Electronics"));

    // Verify that only electronics products are displayed
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
  });

  it('shows all products when "Todos" is selected after filtering', () => {
    render(
      <ProductList initialData={mockProducts} categories={mockCategories} />
    );

    // First filter by electronics
    fireEvent.click(screen.getByText("Electronics"));
    // Then go back to all
    fireEvent.click(screen.getByText("Todos"));

    // Verify that all products are displayed again
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("maintains filter state when products are updated", async () => {
    const { rerender } = render(
      <ProductList initialData={mockProducts} categories={mockCategories} />
    );

    // Select category electronics
    const electronicsButton = screen.getByText("Electronics");
    fireEvent.click(electronicsButton);

    // Verify initial filter state
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();

    // Update products
    const updatedProducts = [
      ...mockProducts,
      {
        id: 4,
        title: "Product 4",
        category: "electronics",
        price: 299.99,
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      },
    ];

    // Re-render with new products and reapply the filter
    rerender(
      <ProductList initialData={updatedProducts} categories={mockCategories} />
    );
    fireEvent.click(electronicsButton);

    // Verify that the filter is still active and shows only electronics products
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
    expect(screen.getByText("Product 4")).toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
  });
});
