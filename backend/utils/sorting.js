const sort = (sortBy) => {
  switch (sortBy) {
    case "Newest to Oldest":
      return { year: -1 };
    case "Oldest to Newest":
      return { year: 1 };
    case "Title: A-Z":
      return { title: 1 };
    case "Title: Z-A":
      return { title: -1 };
    default:
      return { year: -1 };
  }
};

module.exports = { sort };
