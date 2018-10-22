import format from "date-fns/format/";
export { default as cache } from './cache';
// export const getRandomImage = () => {
//   const rand = Math.floor(Math.random() * 205646 + 1);
//   return `https://photos.bandsintown.com/thumb/${rand}.jpeg`;
// };

export const debounce = (fn, delay) => {
  let timer = null;

  return function(...args) {
    clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const formatDate = date => format(date, "dddd, MMMM Do, YYYY hh:mm A");
