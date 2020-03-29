export const homeData = response => {
  const data = response
    .filter(todo => todo.id <= 10)
    .map(todo => {
      return todo;
    });
  return {
    todo: {
      list: data
    }
  };
};

export const filterData = (url, response) => {
  if (url === '/') {
    return homeData(response);
  } else {
    return null;
  }
};
