import React from "react";

export default function BuyerDashBoard() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Fresh Horizons
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container mt-5">
        <h1 class="text-center">Buyer Dashboard</h1>

        <div class="row mb-4">
          <div class="col-md-6 offset-md-3 text-center">
            <label for="currency">Select Currency: </label>
            <select
              id="currency"
              class="form-select currency-selector"
              aria-label="Currency"
            >
              <option value="USD" selected>
                USD
              </option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        <h3>Available Bananas</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="product-card">
              <h3>Premium Banana</h3>
              <p>Grade: A</p>
              <p>
                Price: <span id="price1">USD 15</span>
              </p>
              <p>Stock: 100</p>
              <button class="btn btn-success">Place Order</button>
            </div>
          </div>

          <div class="col-md-4">
            <div class="product-card">
              <h3>Standard Banana</h3>
              <p>Grade: B</p>
              <p>
                Price: <span id="price2">USD 10</span>
              </p>
              <p>Stock: 200</p>
              <button class="btn btn-success">Place Order</button>
            </div>
          </div>

          <div class="col-md-4">
            <div class="product-card">
              <h3>Organic Banana</h3>
              <p>Grade: A</p>
              <p>
                Price: <span id="price3">USD 20</span>
              </p>
              <p>Stock: 50</p>
              <button class="btn btn-success">Place Order</button>
            </div>
          </div>
        </div>

        <h3 class="mt-5">Your Orders</h3>
        <ul class="list-group">
          <li class="list-group-item">Premium Banana - USD 15 x 1</li>
          <li class="list-group-item">Standard Banana - USD 10 x 2</li>
          <li class="list-group-item">Organic Banana - USD 20 x 1</li>
        </ul>
      </div>
    </div>
  );
}
