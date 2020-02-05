import axios from "axios";

export const getTopics = () => {
  return axios.get("https://kirstys-nc-news.herokuapp.com/api/topics");
};

export const getArticle = id => {
  return axios.get(`https://kirstys-nc-news.herokuapp.com/api/articles/${id}`);
};

export const getArticles = topic => {
  return axios.get(
    `https://kirstys-nc-news.herokuapp.com/api/articles?topic=${topic}`
  );
};

// export default { getTopics, getArticles };

// module.exports = getArticles;

// module.exports = { getArticles };

// exports.getArticles = () => {};
