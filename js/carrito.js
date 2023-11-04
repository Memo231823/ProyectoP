let todasComprasCarrito = document.querySelector('.productos');
let contineComprasCarrito = document.querySelector('.card-item');
let PrecioTotal = document.querySelector('.price-total');
let sumaProductos = document.querySelector('.count-product');

let Compras = [];
let TotalCompras = 0;
let ContarProductos = 0;

// funciones 
CargandoEventos();
function CargandoEventos(){
    todasComprasCarrito.addEventListener('click',addProductos);
    contineComprasCarrito.addEventListener('click',deleteProductos);
}

function addProductos(e){
   e.preventDefault();
   if(e.target.classList.contains('btn-add-carrito')){
     const selectProductos = e.target.parentElement;
     readTheContent(selectProductos);
   }

function deleteProductos(e){
 if(e.target.classList.contains('delete-product')){
    const deleteId = e.target.getAttibute('data-id');

    Compras.forEach(value => {
        if(value.id == deleteId){
          let ReducirPrecio = parseFloat(value.price)* parseFloat(value.amount);
          TotalCompras = TotalCompras-ReducirPrecio;
          TotalCompras = TotalCompras.toFixed(2);
        }
    });

    Compras = Compras.filter(product => product.id !== deleteId);
    ContarProductos --;

 }
}   
// eventos de calculo 
}