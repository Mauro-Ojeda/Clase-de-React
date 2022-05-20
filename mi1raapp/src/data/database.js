export const products = [
  {
    id:1,
    title:"Boston ",
    stock:3,
    price:100,
    images:"images/boston.png",
    descripcion:"id 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    category:1,
  },
  {
    id:2,
    title:"Toronto",
    stock:7,
    price:106,
    images:"images/toronto.png",
    descripcion:"id 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    category:1,
  },
  {
    id:3,
    title:"New York",
    stock:9,
    price:109,
    images:"images/nyk.png",
    descripcion:"id 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    category:2,
  },
  {
    id:4,
    title:"Heat",
    stock:1,
    price:105,
    images:"images/heat2.png",
    descripcion:"id 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam voluptatum consequuntur quia ipsum iure sequi exercitationem blanditiis aperiam maiores. Consequatur dolorum odio temporibus explicabo saepe, cumque reiciendis provident doloremque.",
    category:3,
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
  }, 1000)
})