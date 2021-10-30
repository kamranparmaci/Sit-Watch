import { Helmet } from "react-helmet";

export const text_truncate = (str, length, ending) => {
  if (length === null) {
    length = 100;
  }
  if (ending === null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Sit Watch | Find your favorit movies and tv shows",
};
