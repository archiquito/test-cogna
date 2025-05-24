import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Products } from "../../Products";

describe("Products Integration", () => {
  const mockProducts = [
    {
      id: 1,
      title: "Test Product",
      price: 99.99,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      category: "electronics",
      description: "Test description",
    },
  ];

  it("renders product with all its components", () => {
    render(<Products data={mockProducts} />);

    // Verify that the product card is present
    const productCard = screen.getByRole("article");
    expect(productCard).toBeInTheDocument();

    // Verify that all elements of the card are present
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("R$ 99,99")).toBeInTheDocument();

    // Verify image is present with correct alt text
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Test Product");
    expect(image.src).toContain(
      encodeURIComponent(
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      )
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/product/1/Test_Product"
    );
  });

  it("renders multiple products in a grid layout", () => {
    const multipleProducts = [
      ...mockProducts,
      {
        id: 2,
        title: "Another Product",
        price: 149.99,
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        category: "clothing",
        description: "Another description",
      },
    ];

    render(<Products data={multipleProducts} />);

    // Verify that the grid is present
    const grid = screen.getByTestId("products-grid");
    expect(grid).toHaveClass("grid");

    // Verify that all products are in the grid
    const productCards = screen.getAllByRole("article");
    expect(productCards).toHaveLength(2);
  });

  it("handles empty product list gracefully", () => {
    render(<Products data={[]} />);
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
  });
});
