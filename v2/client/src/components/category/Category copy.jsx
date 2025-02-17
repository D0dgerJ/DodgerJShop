import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Header from "../Header/Header";
import Banners from "../Banners/Banners";
import Footer from "../Footer/Footer";

import banner1 from '../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import procat1 from '../../assets/banner/procat1.jpg';
import procat2 from '../../assets/banner/procat2.jpg';
import procat3 from '../../assets/banner/procat3.jpg';
import asus from '../../assets/brands/asus.png';
import dng from '../../assets/brands/dng.png';
import hurley from '../../assets/brands/hurley.png';
import oppo from '../../assets/brands/oppo.png';
import samsung from '../../assets/brands/samsung.png';
import zara from '../../assets/brands/zara.png';
import apparel4 from '../../assets/products/apparel4.jpg';
import slider0 from '../../assets/slider/slider0.jpg';
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';


const images = {
    banner1: banner1,
    banner2: banner2,
    procat1: procat1,
    procat2: procat2,
    procat3: procat3,
    asus: asus,
    dng: dng,
    hurley: hurley,
    oppo: oppo,
    samsung: samsung,
    zara: zara,
    apparel4: apparel4,
    slider0: slider0,
    slider1: slider1,
    slider2: slider2,
    slider3: slider3,
  };

const Category = () => {
    const [products, setProducts] = useState([]);
    const { productId } = useParams();
    const [productImages, setProductImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [perPage, setPerPage] = useState(10);
    const [totalProducts, setTotalProducts] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [additionalSortOption, setAdditionalSortOption] = useState('Default');
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
    const [discount, setDiscount] = useState(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };


  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Отправляем запрос на сервер для поиска
      const response = await axios.post('http://localhost:5001/api/search', { searchQuery });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching products', error);
    }
  };

  useEffect(() => {
    console.log('ProductDetails useEffect');

    const fetchData = async () => {
        try {
            const [productsResponse, productImagesResponse] = await Promise.all([
                axios.get('http://localhost:5000/products'),
                axios.get(`http://localhost:5000/product_images?product_id=${productId}`)
            ]);


            setProducts(productsResponse.data);
            setProductImages(productImagesResponse.data);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const fetchTotalProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            setTotalProducts(response.data.length);
        } catch (error) {
            console.error('Error fetching total products', error);
        }
    };

    const fetchBrands = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            const uniqueBrands = [...new Set(response.data.map(product => product.brand))];

            const brandsWithCount = uniqueBrands.map(brand => ({
                name: brand,
                count: response.data.filter(product => product.brand === brand).length
            }));

            setBrands(brandsWithCount);
        } catch (error) {
            console.error('Error fetching brands', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5000/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };


    fetchData();
    fetchTotalProducts();
    fetchBrands();
    fetchCategories();
}, [productId]);

useEffect(() => {
    loadProducts();
}, []);

const loadProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching products', error);
    }
};


const handlePerPageChange = (value) => {
    setPerPage(value);
  };
  
  const handleAdditionalSortChange = (option) => {
    setAdditionalSortOption(option);
  };
  
  const handleCategoryChange = (category) => {
    const updatedCategories = categories.map((cat) =>
      cat.category_id === category.category_id
        ? { ...cat, checked: !cat.checked }
        : cat
    );
    setCategories(updatedCategories);
    const selectedCategories = updatedCategories.filter((cat) => cat.checked).map((cat) => cat.category_id);
    setSelectedCategories(selectedCategories);
  };
  
  const handleBrandChange = (brand) => {
    const updatedBrands = brands.map((b) =>
      b.name === brand.name ? { ...b, checked: !b.checked } : b
    );
    setBrands(updatedBrands);
    const selectedBrands = updatedBrands.filter((b) => b.checked).map((b) => b.name);
    setSelectedBrands(selectedBrands);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category_id))
      .filter((product) => selectedBrands.length === 0 || selectedBrands.includes(product.brand))
      .filter((product) => product.price >= priceRange.min && product.price <= priceRange.max);
  }, [products, selectedCategories, selectedBrands, priceRange]);
  
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (additionalSortOption === 'Default') {
    } else if (additionalSortOption === 'Product Name') {
      sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (additionalSortOption === 'Price') {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (additionalSortOption === 'Brand') {
      sorted = sorted.sort((a, b) => a.brand.localeCompare(b.brand));
    }
    return sorted;
  }, [filteredProducts, additionalSortOption]);


  return (
    <div id="page" className="site page-category">

        <aside className="site-off desktop-hide">
            <div className="off-canvas">
                <div className="canvas-head flexitem">
                    <div className="logo"><a href="/"><span className="circle"></span>.DJStore</a></div>
                    <a href="#" className="t-close flexcenter"><i className="ri-close-line"></i></a>
                </div>
                <div className="departments"></div>
                <nav></nav>
                <div className="thetop-nav"></div>
            </div>
        </aside>

        <Header />

        <main>
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
                                                <input type="checkbox" name="checkbox" id={category.name} checked={category.checked || false} onChange={() => handleCategoryChange(category)}/>
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
                                                <input type="checkbox" name="checkbox" id={brand.name} checked={brand.checked} onChange={() => handleBrandChange(brand)}/>
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
                                                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}/>
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
                                                <li><a href="#">Home</a></li>
                                                <li>Shop</li>
                                            </ul>
                                        </div>
                                        <div className="page-title">
                                            <h1>Shop</h1>
                                        </div>
                                        <div className="cat-description">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ut perferendis! Vitae pariatur reiciendis quasi, omnis itaque officiis asperiores odit repellat possimus fugit labore similique libero animi? Expedita, dolores laborum. Temporibus voluptatem amet quos, magni tempora explicabo eum voluptas voluptates, sequi voluptatum incidunt molestias molestiae pariatur consectetur doloremque dolore deleniti ipsam nulla. Possimus ad velit molestias suscipit explicabo? Tenetur assumenda voluptate illo facilis neque pariatur numquam ea nemo. Ipsam vero autem libero reprehenderit sequi nobis?</p>
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
                                                    <span className="mobile-hide">Sort by {additionalSortOption}</span>
                                                    <div className="desktop-hide">{additionalSortOption}</div>
                                                    <i className="ri-arrow-down-s-line"></i>
                                                </div>
                                                <ul>
                                                    <li onClick={() => handleAdditionalSortChange('Default')}>Default</li>
                                                    <li onClick={() => handleAdditionalSortChange('Product Name')}>Product Name</li>
                                                    <li onClick={() => handleAdditionalSortChange('Price')}>Price</li>
                                                    <li onClick={() => handleAdditionalSortChange('Brand')}>Brand</li>
                                                </ul>
                                            </div>
                                            <div className="item-perpage mobile-hide">
                                                <div className="label">Item {perPage} per page</div>
                                                <div className="desktop-hide">{perPage}</div>
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
                                                    <li onClick={() => handlePerPageChange(products.length)}>ALL</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="products main flexwrap">
                                    {[...sortedProducts].slice(0, perPage).map((product) => (
                                    <div className="item" key={product.product_id}> 
                                        <div className="media">
                                        <div className="thubnail object-cover">
                                            {productImages.filter(image => image.product_id === product.product_id).map(image => (
                                                <Link to={`/products/${product.product_id}`} key={image.image_id}><img src={image.image_url} alt={`Product Image: ${image.image_id}`}/></Link>
                                            ))}
                                            </div>
                                            <div className="hoverable">
                                                <ul>
                                                    <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                                                    <li><a href=""><i className="ri-eye-line"></i></a></li>
                                                    <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="discount circle flexcenter"><span>20%</span></div>
                                        </div>
                                        <div className="content">
                                            <div className="rating">
                                                <div className="stars"></div>
                                                <span className="mini-text">(1.955)</span>
                                            </div>
                                            <h3><Link to={`/products/${product.product_id}`}>{product.name}</Link></h3>  
                                            <div className="price">
                                                <span className="current">$34</span>
                                                <span className="normal mini-text">${product.price}</span>
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
           <Banners />
        </main>

        <Footer />

        <div className="menu-bottom desktop-hide">
            <div className="container">
                <div className="wrapper">
                    <nav>
                        <ul className="flexitem">
                            <li>
                                <a href="#">
                                    <i className="ri-bar-chart-line"></i>
                                    <span>Trending</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-user-6-line"></i>
                                    <span>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ri-heart-line"></i>
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="t-search">
                                    <i className="ri-search-line"></i>
                                    <span>Search</span>
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="cart-trigger">
                                    <i className="ri-shopping-cart-line"></i>
                                    <span>Cart</span>
                                    <div className="fly-item">
                                        <span className="item-number">0</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="search-bottom desktop-hide">
            <div className="container">
                <div className="wrapper">
                    
                    <form action="" className="search">
                        <a href="#" className="t-close search-close flexcenter"><i className="ri-close-line"></i></a>
                        <span className="icon-large"><i className="ri-search-line"></i></span>
                        <input type="search" placeholder="Your email address" required/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Category;
