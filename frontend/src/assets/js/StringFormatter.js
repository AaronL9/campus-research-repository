
export const limitString = (str, maxLength) => {
  if (str.length <= maxLength || window.outerWidth <= 750) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
};

export const limitAbstract = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
};
