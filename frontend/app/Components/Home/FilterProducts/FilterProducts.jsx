"use client";
import React, { useState, useEffect, useCallback } from "react";
import FilterSection from "./FilterSection";
import FilteredProduct from "./FilteredProduct";
import baby_fashion from "@/public/img/Home/Caregory/baby-fashion.jpg";
import men_fashion from "@/public/img/Home/Caregory/men-fashion.jpeg";
import gadget_img from "@/public/img/Home/Caregory/gadget_img.jpg";
import girls_bag from "@/public/img/Home/Caregory/girls-bag.jpeg";
import girls_fashion from "@/public/img/Home/Caregory/girs-fashion-dress.jpeg";
import cosmatic from "@/public/img/Home/Caregory/cosmatic.jpg";

const productData = [
  {
    name: "Cotton Fabric T-Shirt for Kids",
    category: "T-Shirt",
    image: baby_fashion,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description:
      "A comfortable and stylish 100% cotton t-shirt, perfect for everyday wear for kids.",
    price: 12.0,
    originalPrice: 15.0,
    currency: "USD",
    sizes: "S M XL",
    colors: [
      { name: "Purple", hex: "#a855f7" },
      { name: "Pink", hex: "#ec4899" },
      { name: "Gray", hex: "#9ca3af" },
    ],
    sku: "TSHIRT-COTTON-KID-001",
    brand: "Issl Commerce Apparel",
    slug: "cotton-fabric-t-shirt-for-kids",
  },
  {
    name: "Denim Jeans for Toddlers",
    category: "Jeans",
    image: men_fashion,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description: "Durable denim jeans with elastic waistband for comfort.",
    price: 18.0,
    originalPrice: 25.0,
    currency: "USD",
    sizes: "S M L",
    colors: [
      { name: "Blue", hex: "#3b82f6" },
      { name: "Black", hex: "#000000" },
    ],
    sku: "JEANS-DENIM-TOD-002",
    brand: "Issl Commerce Apparel",
    slug: "denim-jeans-for-toddlers",
  },
  {
    name: "Winter Jacket for Kids",
    category: "Jacket",
    image: gadget_img,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description: "Warm winter jacket with waterproof outer layer.",
    price: 35.0,
    originalPrice: 45.0,
    currency: "USD",
    sizes: "S M L XL",
    sku: "JACKET-WINTER-KID-003",
    brand: "Issl Commerce Apparel",
    slug: "winter-jacket-for-kids",
  },
  {
    name: "Stylish Girls Bag",
    category: "Accessories",
    image: girls_bag,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description: "Fashionable bag for girls with multiple compartments.",
    price: 22.0,
    originalPrice: 30.0,
    currency: "USD",
    sizes: "One Size",
    sku: "BAG-GIRLS-004",
    brand: "Issl Commerce Apparel",
    slug: "stylish-girls-bag",
  },
  {
    name: "Girls Fashion Dress",
    category: "Dress",
    image: girls_fashion,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description: "Beautiful summer dress for girls with floral pattern.",
    price: 28.0,
    originalPrice: 35.0,
    currency: "USD",
    sizes: "S M L",
    sku: "DRESS-GIRLS-005",
    brand: "Issl Commerce Apparel",
    slug: "girls-fashion-dress",
  },
  {
    name: "Cosmetic Set",
    category: "Beauty",
    image: cosmatic,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description: "Complete cosmetic set with natural ingredients.",
    price: 42.0,
    originalPrice: 55.0,
    currency: "USD",
    sizes: "Set",
    sku: "COSMETIC-SET-006",
    brand: "Issl Commerce Beauty",
    slug: "cosmetic-set",
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    image: gadget_img,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description: "Feature-rich smart watch with health monitoring.",
    price: 89.0,
    originalPrice: 120.0,
    currency: "USD",
    sizes: "Standard",
    sku: "WATCH-SMART-007",
    brand: "Issl Commerce Tech",
    slug: "smart-watch",
  },
  {
    name: "Men's Fashion Shirt",
    category: "Shirt",
    image: men_fashion,
    imageUrl: "/img/Home/Caregory/baby-fashion.jpg",
    description: "Premium quality shirt for men with slim fit.",
    price: 32.0,
    originalPrice: 45.0,
    currency: "USD",
    sizes: "S M L XL",
    sku: "SHIRT-MEN-008",
    brand: "Issl Commerce Apparel",
    slug: "mens-fashion-shirt",
  },
];

const FilterProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: { min: 0, max: 1000 },
    sort: "",
  });

  // Memoized filter function
  const applyFilters = useCallback(() => {
    let result = [...productData];

    // Apply category filter
    if (filters.category) {
      result = result.filter(
        (product) => product.category === filters.category
      );
    }

    // Apply price range filter
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
    );

    // Apply sorting
    if (filters.sort) {
      switch (filters.sort) {
        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;
        case "name-asc":
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }
    }

    setFilteredProducts(result);
  }, [filters]);

  // Only apply filters when they change
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Stable callback for filter changes
  const handleFilterChange = useCallback((newFilters) => {
    setFilters((prev) => {
      // Only update if something actually changed
      if (JSON.stringify(prev) !== JSON.stringify(newFilters)) {
        return newFilters;
      }
      return prev;
    });
  }, []);

  return (
    <div className="py-10 md:py-16">
      <FilterSection onFilterChange={handleFilterChange} />
      <FilteredProduct productData={filteredProducts} />
    </div>
  );
};

export default FilterProducts;
