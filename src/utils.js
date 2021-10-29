export const text_truncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export function seo(data = {}) {
  data.title = data.title || "Default title";
  data.metaDescription = data.metaDescription || "Default description";

  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
}
