// use local storage to manage cart data
const addToDb = (id) => {
  let applicationCart = getApplicationCart();
  // add quantity
  const quantity = applicationCart[id];
  if (!quantity) {
    applicationCart[id] = 1;
  }
  localStorage.setItem("application-cart", JSON.stringify(applicationCart));
};

const removeFromDb = (id) => {
  const applicationCart = getApplicationCart();
  if (id in applicationCart) {
    delete applicationCart[id];
    localStorage.setItem("application-cart", JSON.stringify(applicationCart));
  }
};

const getApplicationCart = () => {
  let applicationCart = {};

  //get the shopping cart from local storage
  const storedApplication = localStorage.getItem("application-cart");
  if (storedApplication) {
    applicationCart = JSON.parse(storedApplication);
  }
  return applicationCart;
};

const deleteApplicationCart = () => {
  localStorage.removeItem("application-cart");
};

export { addToDb, removeFromDb, getApplicationCart, deleteApplicationCart };
