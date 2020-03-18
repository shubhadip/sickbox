export const filterData = (url, response) => {
  if (url === '/') {
    const data = response
      .filter(todo => todo.id <= 10)
      .map(todo => {
        return todo;
      });
    return {
      todo: {
        list: data,
      },
    };
  } else {
    return null;
  }
};
