export const homeData = response => {
  return {
    product: {
      ...response[0].data
    },
    cart: {
      ...response[1].data.carts
    }
  };
};

export const filterData = (componentName, response) => {
  if (componentName === 'home' || componentName === 'product') {
    return homeData(response);
  } else {
    return null;
  }
};
