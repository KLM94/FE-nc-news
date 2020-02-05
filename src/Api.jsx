import axios from "axios";

export const getTopics = () => {
  return axios.get("https://kirstys-nc-news.herokuapp.com/api/topics");
};

export const getArticle = (id, topic, author, sort_by, order) => {
  return axios.get(`https://kirstys-nc-news.herokuapp.com/api/articles/${id}`, {
    params: {
      topic: topic,
      author: author,
      sort_by: sort_by,
      order: order
    }
  });
};

export const getArticles = topic => {
  return axios.get(
    `https://kirstys-nc-news.herokuapp.com/api/articles?topic=${topic}`
  );
};

export const getComments = (comments, id, topic, author, sort_by, order) => {
  return axios.get(
    `https://kirstys-nc-news.herokuapp.com/api/articles/${id}/${comments}`,
    {
      params: {
        topic: topic,
        author: author,
        sort_by: sort_by,
        order: order
      }
    }
  );
};

// export default { getTopics, getArticles };

// module.exports = getArticles;

// module.exports = { getArticles };

// exports.getArticles = () => {};
