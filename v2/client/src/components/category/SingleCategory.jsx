import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleCategory = () => {
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [additionalSortOption, setAdditionalSortOption] = useState("Default");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });

  useEffect(() => {
    // Загрузка данных при монтировании
    const fetchData = async () => {
      try {
        const [productsResponse, productImagesResponse] = await Promise.all([
          axios.get("http://localhost:5000/products"),
          axios.get("http://localhost:5000/product_images"),
        ]);

        setProducts(productsResponse.data);
        setProductImages(productImagesResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const uniqueBrands = [...new Set(response.data.map((product) => product.brand))];
        const brandsWithCount = uniqueBrands.map((brand) => ({
          name: brand,
          count: response.data.filter((product) => product.brand === brand).length,
        }));

        setBrands(brandsWithCount);
      } catch (error) {
        console.error("Error fetching brands", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchData();
    fetchBrands();
    fetchCategories();
  }, []);

  const handlePerPageChange = (value) => {
    setPerPage(value);
  };

  const handleAdditionalSortChange = (option) => {
    setAdditionalSortOption(option);
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = categories.map((cat) =>
      cat.category_id === category.category_id ? { ...cat, checked: !cat.checked } : cat
    );
    setCategories(updatedCategories);
    const selected = updatedCategories.filter((cat) => cat.checked).map((cat) => cat.category_id);
    setSelectedCategories(selected);
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = brands.map((b) =>
      b.name === brand.name ? { ...b, checked: !b.checked } : b
    );
    setBrands(updatedBrands);
    const selected = updatedBrands.filter((b) => b.checked).map((b) => b.name);
    setSelectedBrands(selected);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          selectedCategories.length === 0 || selectedCategories.includes(product.category_id)
      )
      .filter(
        (product) =>
          selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      )
      .filter(
        (product) => product.price >= priceRange.min && product.price <= priceRange.max
      );
  }, [products, selectedCategories, selectedBrands, priceRange]);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (additionalSortOption === "Default") {
      return sorted;
    } else if (additionalSortOption === "Product Name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (additionalSortOption === "Price") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (additionalSortOption === "Brand") {
      sorted.sort((a, b) => a.brand.localeCompare(b.brand));
    }
    return sorted;
  }, [filteredProducts, additionalSortOption]);

  return (
    <div className="single-category">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="holder">
              <div className="row sidebar">
                <div className="filter">
                  <div className="filter-block">
                    <h4>Category</h4>
                    <ul>
                      {categories.map((category) => (
                        <li key={category.category_id}>
                          <input
                            type="checkbox"
                            name="checkbox"
                            id={category.name}
                            checked={category.checked || false}
                            onChange={() => handleCategoryChange(category)}
                          />
                          <label htmlFor={category.name}>
                            <span className="checked"></span>
                            <span>{category.name}</span>
                          </label>
                          <span className="count">{category.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="filter-block">
                    <h4>Brands</h4>
                    <ul>
                      {brands.map((brand) => (
                        <li key={brand.name}>
                          <input
                            type="checkbox"
                            name="checkbox"
                            id={brand.name}
                            checked={brand.checked}
                            onChange={() => handleBrandChange(brand)}
                          />
                          <label htmlFor={brand.name}>
                            <span className="checked"></span>
                            <span>{brand.name}</span>
                          </label>
                          <span className="count">{brand.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="filter-block pricing">
                    <h4>Price</h4>
                    <div className="byprice">
                      <div className="range-track">
                        <input
                          type="range"
                          value={priceRange.max}
                          min={0}
                          max={100000}
                          onChange={(e) =>
                            setPriceRange({
                              ...priceRange,
                              max: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                      <div className="price-range">
                        <span className="price-form">${priceRange.min}</span>
                        <span className="price-to">${priceRange.max}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="row">
                  <div className="cat-head">
                    <div className="breadcrumb">
                      <ul className="flexitem">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>Shop</li>
                      </ul>
                    </div>
                    <div className="page-title">
                      <h1>Shop</h1>
                    </div>
                    <div className="cat-description">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Possimus, ut perferendis! Vitae pariatur reiciendis quasi,
                        omnis itaque officiis asperiores odit repellat possimus
                        fugit labore similique libero animi? Expedita, dolores
                        laborum.
                      </p>
                    </div>
                    <div className="cat-navigation flexitem">
                      <div className="item-filter desktop-hide">
                        <a href="#" className="filter-trigger label">
                          <i className="ri-menu-2-line ri-2x"></i>
                          <span>Filter</span>
                        </a>
                      </div>
                      <div className="item-sortir">
                        <div className="lable">
                          <span className="mobile-hide">
                            Sort by {additionalSortOption}
                          </span>
                          <div className="desktop-hide">{additionalSortOption}</div>
                          <i className="ri-arrow-down-s-line"></i>
                        </div>
                        <ul>
                          <li onClick={() => handleAdditionalSortChange("Default")}>
                            Default
                          </li>
                          <li
                            onClick={() => handleAdditionalSortChange("Product Name")}
                          >
                            Product Name
                          </li>
                          <li onClick={() => handleAdditionalSortChange("Price")}>
                            Price
                          </li>
                          <li onClick={() => handleAdditionalSortChange("Brand")}>
                            Brand
                          </li>
                        </ul>
                      </div>
                      <div className="item-options">
                        <div className="lable">
                          <span className="mobile-hide">Show {perPage} per page</span>
                          <div className="desktop-hide">{perPage}</div>
                          <i className="ri-arrow-down-s-line"></i>
                        </div>
                        <ul>
                          <li onClick={() => handlePerPageChange(10)}>10</li>
                          <li onClick={() => handlePerPageChange(20)}>20</li>
                          <li onClick={() => handlePerPageChange(30)}>30</li>
                          <li onClick={() => handlePerPageChange(sortedProducts.length)}>
                            ALL
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products main flexwrap">
                  {sortedProducts.slice(0, perPage).map((product) => (
                    <div className="item" key={product.product_id}>
                      <div className="media">
                        <div className="thubnail object-cover">
                          {productImages
                            .filter((image) => image.product_id === product.product_id)
                            .map((image) => (
                              <Link
                                to={`/products/${product.product_id}`}
                                key={image.image_id}
                              >
                                <img
                                  src={image.image_url}
                                  alt={`Product Image: ${image.image_id}`}
                                />
                              </Link>
                            ))}
                        </div>
                      </div>
                      <div className="content">
                        <h3>
                          <Link to={`/products/${product.product_id}`}>
                            {product.name}
                          </Link>
                        </h3>
                          <div className="price">
                            {product.discount_percentage ? (
                              <>
                                <span className="current">
                                  ${(
                                    product.price -
                                    (product.price * product.discount_percentage) / 100
                                  ).toFixed(2)}
                                </span>
                                <span className="normal mini-text">${product.price}</span>
                              </>
                            ) : (
                              <span className="current">${product.price}</span>
                            )}
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
