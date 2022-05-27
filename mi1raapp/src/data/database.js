export const products = [
  {
    id:1,
    title:"Boston ",
    stock:3,
    price:100,
    images:"/images/boston.png",
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    talle:1,
    quantity:1,
  },
  {
    id:2,
    title:"Toronto",
    stock:7,
    price:106,
    images:"/images/toronto.png",
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    talle:1,
    quantity:1,
  },
  {
    id:3,
    title:"New York",
    stock:9,
    price:109,
    images:"/images/nyk.png",
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    talle:2,
    quantity:1,
  },
  {
    id:4,
    title:"Heat",
    stock:1,
    price:105,
    images:"/images/heat2.png",
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    talle:3,
    quantity:1,
  },
]

export const promesa = new Promise((resolve, reject) => {
  let condicion = true;
  setTimeout(() => {
    if (condicion){
      resolve(products);
    }else{
      reject("La comunicacion Fallo");
    }
  }, 0);
})