
const products = [ 
  {
    name: "Volkswagen Golf",
    price: 25000,
    stars: 4,
    reviews: 900,
    seller: 'Concesionario',
    image: './assets/wolkswagen2.jpeg'
  },
  {
    name: "BMW Serie 3",
    price: 30000,
    stars: 4,
    reviews: 1600,
    seller: 'Compraventa',
    image: './assets/bmw.jpeg'
  },
  {
    name: "Mercedes-Benz",
    price: 40000,
    stars: 4,
    reviews: 1000,
    seller: 'Agencia',
    image: './assets/mercedes.jpeg'
  },
  {
    name: "Audi A3",
    price: 38000,
    stars: 4,
    reviews: 1300,
    seller: 'Agencia',
    image: './assets/audi.jpeg'
  },
  {
    name: "Volvo XC40",
    price: 42000,
    stars: 4,
    reviews: 450,
    seller: 'Compraventa',
    image: './assets/volvo.jpeg'
  },
  {
    name: "Jaguar F-PACE",
    price: 55000,
    stars: 4,
    reviews: 250,
    seller: 'Compraventa',
    image: './assets/jaguar.jpeg'
  },
  {
    name: "Peugeot 208",
    price: 15000,
    stars: 4,
    reviews: 3200,
    seller: 'Particular',
    image: './assets/peugeot.jpeg'
  },
  {
    name: "Renault Clio",
    price: 18000,
    stars: 4,
    reviews: 2700,
    seller: 'Particular',
    image: './assets/renault.jpeg'
  },
  {
    name: "Fiat 500",
    price: 12000,
    stars: 4,
    reviews: 1100,
    seller: 'Particular',
    image: './assets/fiat.jpeg'
  },
  {
    name: "Alfa Romeo Giulia",
    price: 48000,
    stars: 4,
    reviews: 600,
    seller: 'Agencia',
    image: './assets/alfa.jpeg'
  },
];



const printHeader = () => {

  const header = document.querySelector("header");
  header.id = "header";
  header.classList = "flex-container";
   const nav = document.createElement("div");
  nav.className = "nav";
  nav.classList.add("flex-container");
   const logo = document.createElement("div");
  logo.className = "logo";
  const imgLogo = document.createElement("img");
  imgLogo.src = "./assets/logo-nav.png";
   const ul1 = document.createElement("ul");
  ul1.classList = "ul-1";
  ul1.classList.add("flex-container");
  ul1.innerHTML = `
        <li><a class="link" href="#">Buscar</a></li>
        <li><a class="link" href="#">Pruebas e información</a></li>
        <li><a class="link" href="#">Trámites y Servicios </a></li>
        `;
   const ul2 = document.createElement("ul")
  ul2.classList = "ul-2";
  ul2.classList.add("flex-container");
  ul2.innerHTML =`
        <li><a class="linki" href="#">Mi cuenta</a></li>
        <li><a class="linked" href="#">Vende tu coche</a></li>
  `;
  
  logo.appendChild(imgLogo);
  nav.appendChild(logo);
  nav.appendChild(ul1);
  nav.appendChild(ul2);
  header.appendChild(nav);
  
}

printHeader();

const printProducts = (array) => {

  const productos = document.querySelector("#products");
  productos.innerHTML = '';

      for (const product of array) {
          const car = document.createElement("div");
          car.classList = "product";
          const name = document.createElement("h3");
          name.textContent = product.name;
          const price = document.createElement("p");
          price.textContent = product.price +" $";
          const star = document.createElement("p");
          star.textContent = product.stars;
          const reviews = document.createElement("p");
          reviews.textContent = product.reviews;
          const seller = document.createElement("p");
          seller.textContent = product.seller;
          const img = document.createElement("img");
          img.src = product.image;


          car.appendChild(name)
          car.appendChild(price)
          car.appendChild(star)
          car.appendChild(reviews)
          car.appendChild(seller)
          car.appendChild(img);
          productos.appendChild(car);

     }
}

printProducts(products);

const printFilters = () => {
    const filter = document.querySelector("#filter");
    const divFilter = document.createElement("div");
    divFilter.className = "box-filter";
    divFilter.classList.add("flex-column");
    const filtTop = document.createElement("div");
    filtTop.className = "fil-top";
    const h4 = document.createElement("h4");
    h4.innerText = "FILTRAME";
    const filtMid = document.createElement("div");
    filtMid.className = "fil-mid";
    filtMid.classList.add("flex-column");
    const input = document.createElement('input');
    input.placeholder = 'Buscar por precio';
    const select = document.createElement("select");
    select.id = "seller";
    select.innerHTML += `
          
           <select name="seller">
              <option value="All">All</option>
              <option value="Particular">Particular</option>
              <option value="Compraventa">Compraventa</option>
              <option value="Agencia">Agencia</option>
              <option value="Concesionario">Concesionario</option>
           `
    select.addEventListener('change', () => filterSeller())
    const filtBoton = document.createElement("div");
    filtBoton.className = "filt-boton";
    filtBoton.classList.add("flex-column");
    const btn1 = document.createElement("button"); 
    btn1.addEventListener('click', () => filterPrice())
    btn1.className ="button1";
    btn1.textContent = "buscar";
    const btn2 = document.createElement("button"); 
    btn2.className ="button2";
    btn2.textContent = "limpiar";

    
    filter.appendChild(divFilter);
    divFilter.appendChild(filtTop);
    divFilter.appendChild(filtMid);
    filtMid.appendChild(input);
    filtMid.appendChild(select);
    divFilter.appendChild(filtBoton);
    filtBoton.appendChild(btn1);
    filtBoton.appendChild(btn2);
    filtTop.appendChild(h4);

}

printFilters();


const filterSeller = () =>{
  
  const vendedores = document.querySelector("#seller");
  const vende = products.filter((product) =>{
      if (vendedores.value === "All") {
        return product
      }else if(vendedores.value === product.seller){
        return product
      }
  });
 
 printProducts(vende)
 
}



const filterPrice = () =>{
  const priceInput = document.querySelector("input");
  const priceProduct = products.filter((product) =>{
       if (priceInput.value >= product.price) {
         return product
       }
      });
      printProducts(priceProduct)

}





