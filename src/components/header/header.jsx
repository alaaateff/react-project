import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Assuming you have a separate CSS file for styles

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
                <div className="container-sm">
                    {/* Navbar Toggler: Visible on small screens */}
                    <button
                        className="navbar-toggler border-0 order-1 d-block d-xl-none"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Sidebar: Collapsible navigation menu */}
                    {isSidebarOpen && (
                        <div className="sidebar" id="sidebar">
                            {/* Close Button */}
                            <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories">Categories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs">Blogs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pages">Pages</Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Brand Logo or Name */}
                    <Link className="navbar-brand order-2 order-md-2 order-lg-1 order-xl-1 theme-logo" to="/">
                        <img
                            src="https://minimalin-demo.myshopify.com/cdn/shop/files/logo-simple_150x.png?v=1692805162"
                            alt="Minimalin"
                            style={{ margin: 0 }}
                        />
                    </Link>

                    {/* Navigation Buttons */}
                    <div className="nav-btns d-flex py-2 mt-3 order-3 order-lg-3 order-xl-3 order-sm-3 order-xs-3 navicons">
                        {/* Dropdown for Country and Currency */}
                        <div className="d-none d-xl-block">
                            <ul className="nav-item dropdown">
                                {/* Dropdown Toggle */}
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    EG (EGP ج.م)
                                </a>

                                {/* Dropdown Menu */}
                                <ul className="dropdown-menu mega-menu-custom-for-xsmall">
                                    {/* Country and Currency Options */}
                                    <li><a className="dropdown-item listofsubtitle" href="#">Afghanistan (AFN ؋)</a></li>
                                    <li><a className="dropdown-item listofsubtitle" href="#">Åland Islands (EUR €)</a></li>
                                    <li><a className="dropdown-item listofsubtitle" href="#">Albania (ALL L)</a></li>
                                    <li><a className="dropdown-item listofsubtitle" href="#">Algeria (DZD د.ج)</a></li>
                                    <li><a className="dropdown-item listofsubtitle" href="#">Andorra (EUR €)</a></li>
                                    <li><a className="dropdown-item listofsubtitle" href="#">Angola (USD $)</a></li>
                                    <li><a className="dropdown-item listofsubtitle" href="#">Anguilla (XCD $)</a></li>
                                </ul>
                            </ul>
                        </div>

                        {/* Search Icon */}
                        <a href="#" className="iconscolor px-3">
                            <i className="bi bi-search p-0"></i>
                        </a>

                        {/* User Account Dropdown */}
                        <div className="iconscolor px-3">
                            <ul className="nav-item dropdown">
                                <i className="bi bi-person"></i>
                                <ul className="dropdown-menu mega-menu-custom-for-xsmall">
                                    <li><Link className="dropdown-item listofsubtitle" to="/account">My account</Link></li>
                                    <li><Link className="dropdown-item listofsubtitle" to="/wishlist">Wishlist</Link></li>
                                    <li><Link className="dropdown-item listofsubtitle" to="/login">Login</Link></li>
                                </ul>
                            </ul>
                        </div>
                        {/* Cart Icon with Count */}
                        <div className="cart-icon position-relative">
                            <Link to="/cart" className="iconscolor px-3">
                                <i className="bi bi-cart"></i>
                                <span className="cart-count position-absolute top-0 start-100 translate-middle badge bg-light text-dark">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="d-none d-xl-block order-xl-2">
                        <div className="collapse navbar-collapse" id="navMenu">
                            <ul className="navbar-nav mx-auto text-center">
                                <li className="nav-item dropdown">
                                    {/* Regular link for "Home" */}
                                    <a className="nav-link dropdown-toggle" href="index.html" id="categoriesDropdown" role="button" aria-expanded="false">
                                        Home
                                    </a>

                                    {/* Dropdown menu for "Home" with custom styling */}
                                    <ul className="dropdown-menu mega-menu-custom-for-small" aria-labelledby="categoriesDropdown">
                                        <li>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    {/* First column for Niche Demos */}
                                                    <div className="col-md-6">
                                                        <a href="" className="subtitle">Niche Demos</a>
                                                        <hr />
                                                        <br />
                                                        <a href="" className="listofsubtitle">Fashion 1</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">Fashion 2</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">Fashion 3</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">Beauty & cosmetics</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">Jewelry</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">T-shirts</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">Electronics</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">Single Product</a>
                                                        <br />
                                                    </div>

                                                    {/* Second column for Global Demos */}
                                                    <div className="col-md-6">
                                                        <a href="" className="subtitle">Global Demos</a>
                                                        <hr />
                                                        <br />
                                                        <a href="" className="listofsubtitle">Animations</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">Dark</a>
                                                        <br />
                                                        <a href="" className="listofsubtitle">RTL</a>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown px-3">
                                    <Link className="nav-link dropdown-toggle" to="/product-page" id="shopDropdown" role="button" aria-expanded="false">
                                        Shop
                                    </Link>
                                    <span className="menu-item-badge position-absolute top-0 text-light translate-middle">New</span>
                                    <ul className="dropdown-menu mega-menu" aria-labelledby="shopDropdown">
                                        <li>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <Link to="#" className="subtitle">Women's Fashion</Link>
                                                        <hr />
                                                        <br />
                                                        <Link to="#" className="listofsubtitle">Dresses</Link><br />
                                                        <Link to="#" className="listofsubtitle">Tops & Blouses</Link><br />
                                                        <Link to="#" className="listofsubtitle">Sweaters & Cardigans</Link><br />
                                                        <Link to="#" className="listofsubtitle">Jackets & Coats</Link><br />
                                                        <Link to="#" className="listofsubtitle">Pants & Jeans</Link><br />
                                                        <Link to="#" className="listofsubtitle">Skirts</Link><br />
                                                        <Link to="#" className="listofsubtitle">Activewear</Link><br />
                                                        <Link to="#" className="listofsubtitle">Lingerie & Sleepwear</Link><br />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link to="#" className="subtitle">Men's Fashion</Link>
                                                        <hr />
                                                        <br />
                                                        <Link to="#" className="listofsubtitle">Shirts</Link><br />
                                                        <Link to="#" className="listofsubtitle">T-shirts & Polos</Link><br />
                                                        <Link to="#" className="listofsubtitle">Sweaters & Hoodies</Link><br />
                                                        <Link to="#" className="listofsubtitle">Jackets & Blazers</Link><br />
                                                        <Link to="#" className="listofsubtitle">Pants & Chinos</Link><br />
                                                        <Link to="#" className="listofsubtitle">Jeans</Link><br />
                                                        <Link to="#" className="listofsubtitle">Suits & Formalwear</Link><br />
                                                        <Link to="#" className="listofsubtitle">Activewear</Link><br />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link to="#" className="subtitle">Accessories</Link>
                                                        <hr />
                                                        <br />
                                                        <Link to="#" className="listofsubtitle">Bags & Purses</Link><br />
                                                        <Link to="#" className="listofsubtitle">Hats & Caps</Link><br />
                                                        <Link to="#" className="listofsubtitle">Scarves & Shawls</Link><br />
                                                        <Link to="#" className="listofsubtitle">Belts & Suspenders</Link><br />
                                                        <Link to="#" className="listofsubtitle">Sunglasses</Link><br />
                                                        <Link to="#" className="listofsubtitle">Jewelry</Link><br />
                                                        <Link to="#" className="listofsubtitle">Watches</Link><br />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link to="#" className="subtitle">Footwear</Link>
                                                        <hr />
                                                        <br />
                                                        <Link to="#" className="listofsubtitle">Flats & Loafers</Link><br />
                                                        <Link to="#" className="listofsubtitle">Heels & Pumps</Link><br />
                                                        <Link to="#" className="listofsubtitle">Sneakers & Athletic</Link><br />
                                                        <Link to="#" className="listofsubtitle">Dress Shoes</Link><br />
                                                        <Link to="#" className="listofsubtitle">Casual Shoes</Link><br />
                                                        <Link to="#" className="listofsubtitle">Boots & Chukkas</Link><br />
                                                        <Link to="#" className="listofsubtitle">Sandals & Slides</Link><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                {/* Categories Dropdown */}
                                <li className="nav-item dropdown px-3">
                                    <Link className="nav-link dropdown-toggle" to="/collections" id="categoriesDropdown" role="button" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <span className="menu-item-badge position-absolute top-0 text-light translate-middle bg-primary">Hot</span>
                                    <ul className="dropdown-menu mega-menu" aria-labelledby="categoriesDropdown">
                                        <li>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">Featured Product</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_12_large.png?v=1692615909"
                                                            className="img-fluid" alt="New Arrivals"
                                                        />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">New Arrivals</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_1_large.png?v=1692616267"
                                                            className="img-fluid" alt="New Arrivals"
                                                        />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">Summer Styles</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_15_large.png?v=1692617739"
                                                            className="img-fluid" alt="Summer Styles"
                                                        />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">Winter Fashion</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_19_large.png?v=1692619758"
                                                            className="img-fluid" alt="Winter Fashion"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Additional Categories Row */}
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">Accessories</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_8_large.png?v=1692607569"
                                                            className="img-fluid" alt="Accessories"
                                                        />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">Footwear</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_20_large.png?v=1692620463"
                                                            className="img-fluid" alt="Footwear"
                                                        />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">Men</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_4_large.png?v=1692607334"
                                                            className="img-fluid" alt="Men"
                                                        />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link className="subtitle" to="#">Women</Link>
                                                        <img
                                                            src="https://minimalin-demo.myshopify.com/cdn/shop/collections/collection-banner_10_large.png?v=1692607375"
                                                            className="img-fluid" alt="Women"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                {/* Product Dropdown */}
                                <li className="nav-item dropdown px-3">
                                    <Link className="nav-link dropdown-toggle" to="/product-page" id="productDropdown" role="button" aria-expanded="false">
                                        Product
                                    </Link>
                                    <ul className="dropdown-menu mega-menu-custom-for-xsmall" aria-labelledby="productDropdown">
                                        <li><Link className="dropdown-item listofsubtitle" to="#">Variant images</Link></li>
                                        <li><Link className="dropdown-item listofsubtitle" to="#">Unit price</Link></li>
                                        <li><Link className="dropdown-item listofsubtitle" to="#">Pre-order product</Link></li>
                                        <li><Link className="dropdown-item listofsubtitle" to="#">Countdown</Link></li>
                                        <li><Link className="dropdown-item listofsubtitle" to="#">Complementary</Link></li>
                                        <li><Link className="dropdown-item listofsubtitle" to="#">Video</Link></li>
                                        <li><Link className="dropdown-item listofsubtitle" to="#">AR/3D model</Link></li>
                                        <li><Link className="dropdown-item listofsubtitle" to="#">Gift card</Link></li>
                                    </ul>
                                </li>

                                {/* Blog Dropdown */}
                                <li className="nav-item dropdown px-3">
                                    {/* Dropdown link for "Blog" */}
                                    <a className="nav-link dropdown-toggle" href="Blog-Details.html" id="categoriesDropdown" role="button" aria-expanded="false">
                                        Blog
                                    </a>

                                    {/* Dropdown menu for "Blog" with different blog layout options */}
                                    <ul className="dropdown-menu mega-menu-custom-for-xsmall">
                                        <li><a className="dropdown-item listofsubtitle" href="Blog-Details.html">Blog (Default)</a></li>
                                        <li><a className="dropdown-item listofsubtitle" href="Blog-Details.html">Blog (Service)</a></li>
                                    </ul>
                                </li>
                                {/* Add other navigation items here */}
                                <li className="nav-item dropdown px-3">
                                    {/* Dropdown link for "Pages" */}
                                    <a className="nav-link dropdown-toggle" href="Product-Page.html" id="categoriesDropdown" role="button" aria-expanded="false">
                                        Pages
                                    </a>

                                    {/* Dropdown menu for "Pages" */}
                                    <ul className="dropdown-menu mega-menu-custom-for-xsmall">
                                        <li><a className="dropdown-item listofsubtitle" href="About-us.html">Contact</a></li>
                                        <li><a className="dropdown-item listofsubtitle" href="About-us.html">About us</a></li>
                                        <li><a className="dropdown-item listofsubtitle" href="About-us.html">Service</a></li>
                                        <li><a className="dropdown-item listofsubtitle" href="frequently-asked-questions.html">FAQ</a></li>
                                        <li><a className="dropdown-item listofsubtitle" href="index.html">Size Chart</a></li>
                                        <li><a className="dropdown-item listofsubtitle" href="Product-Page.html">Purchase Now</a></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header;
