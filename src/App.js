import { useState } from "react";

import allProducts from "./data";

function App() {
  // const [imageIndex, setImageIndex] = useState(0);
  // const images = [
  //   "./images/2.jpg",
  //   "./images/3.jpg",
  //   "./images/4.jpg",
  //   "./images/1.jpg",
  // ];

  // const oldingaClick = () => {
  //   const newIndex = (imageIndex + 1) % images.length;
  //   setImageIndex(newIndex);
  // };
  // const orqagaClick = () => {
  //   const newIndex = (imageIndex - 1) % images.length;
  //   setImageIndex(newIndex);
  // };

  const [products, setProducts] = useState(allProducts);
  console.log(products);

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(filteredProducts);
  };

  const filterByBrand = (brand) => {
    if (brand == "all") {
      setProducts(allProducts);
    } else {
      const filterBrand = allProducts.filter((product) => {
        return product.brand == brand;
      });

      setProducts(filterBrand);
    }
  };

  const filterById = (id) => {
    if (id == "all-id") {
      setProducts(allProducts);
    } else {
      const filterId = allProducts.filter((product) => {
        return product.id == id;
      });

      setProducts(filterId);
    }
  };

  const filterByPrice = (price) => {
    if (price == "all-id") {
      setProducts(allProducts);
    } else {
      const filterId = allProducts.filter((product) => {
        return product.price == price;
      });

      setProducts(filterId);
    }
  };

  const filterByRating = (rating) => {
    if (rating == "all-id") {
      setProducts(allProducts);
    } else {
      const filterId = allProducts.filter((product) => {
        return product.rating == rating;
      });

      setProducts(filterId);
    }
  };

  return (
    // <div>
    //   <img src={images[imageIndex]} alt="Rasm" width={400} />
    //   <button onClick={oldingaClick}>Start</button>
    //   <button onClick={orqagaClick}>Back</button>
    // </div>

    <div>
      <div className="filter-container">
        <select onChange={(e) => filterByBrand(e.target.value)}>
          <option value="all">All</option>
          {allProducts.map((product) => {
            return (
              <option key={product.id} value={product.brand}>
                {product.brand}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => filterById(e.target.value)}>
          <option value="all">Id✅</option>
          {allProducts.map((product) => {
            return (
              <option key={product.id} value={product.id}>
                {product.id}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => filterByPrice(e.target.value)}>
          <option value="all">Price $</option>
          {allProducts.map((product) => {
            return (
              <option key={product.id} value={product.price}>
                {product.price}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => filterByRating(e.target.value)}>
          <option value="all">Rating📊</option>
          {allProducts.map((product) => {
            return (
              <option key={product.id} value={product.rating}>
                {product.rating}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="products-grid">
        {products.map((product) => {
          const {
            id,
            thumbnail,
            description,
            title,
            price,
            discountPercentage,
            rating,
            brand,
          } = product;
          return (
            <li key={id}>
              <img src={thumbnail} alt="" />
              <div className="card-body">
                {" "}
                <h3>{title}</h3>
                <p>
                  <b>Brand</b>: {brand}
                </p>
                <p>
                  <b>discription</b>: {description}
                </p>
                <p>
                  <b>Price</b>: ${price}
                </p>
                <p>
                  <b>Discpunt</b>: {discountPercentage}
                </p>
                <p>
                  <b>Rating</b>: {rating}
                </p>
                <button
                  onClick={() => deleteProduct(id)}
                  className="btn snip1457"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
