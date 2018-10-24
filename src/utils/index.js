import format from "date-fns/format/";
export { default as cache } from "./cache";

/**
 *
 * debounce function
 * @param {any} fn
 * @param {any} delay
 * @returns
 */
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

/**
 *
 * Formate date
 * @param {object} date
 */
export const formatDate = date => format(date, "dddd, MMMM Do, YYYY hh:mm A");
