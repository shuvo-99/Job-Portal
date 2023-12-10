import { getApplicationCart } from "../LocalStorage/LocalStorage";

const loadAppliedData = async () => {
  const loadedData = await fetch("jobs.json");
  const jobs = await loadedData.json();
  // step-1: get the stored products from local storage
  const storedCart = getApplicationCart();
  const savedCart = [];
  // step-2: get the id
  for (const id in storedCart) {
    // step-3: get the product by using the id from json file
    const addedJob = jobs.find((job) => job.id === parseInt(id));
    if (addedJob) {
      // sep-6: add the added product to the saved cart
      savedCart.push(addedJob);
    }
  }
  return savedCart;
};

export default loadAppliedData;
