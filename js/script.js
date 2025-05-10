fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        let data1 = "";
 
        data.forEach((item) => {
          data1 += `
            <div class="col-4 col-ml-6 col-m-12">
              <div class="card">
                <h2 class="title">${item.title}</h2>
                <img src="${item.image}" alt="product image" class="img-resp">
                <p class="category">${item.category}</p>
                <h2 class="price">$${item.price}</h2>
                <p class="rating">
                  <b>${item.rating.rate} &#11088;</b>
                  <small>(${item.rating.count})</small>
                </p>
                <p class="item-desc">${item.description}</p>
              </div>
            </div>`;
        });
 
        document.getElementById("product-list").innerHTML = data1;
      });