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

export const getArticles = (topic, sortBy) => {
  return axios.get(
    `https://kirstys-nc-news.herokuapp.com/api/articles?topic=${topic}&sort_by=${sortBy}`
  );
};

export const getComments = (id, topic, author, sort_by, order) => {
  return axios
    .get(`https://kirstys-nc-news.herokuapp.com/api/articles/${id}/comments`, {
      params: {
        topic: topic,
        author: author,
        sort_by: sort_by,
        order: order
      }
    })
    .then(res => {
      return res.data.comments;
    });
};

export const postComment = (requestBody, id) => {
  return axios
    .post(
      `https://kirstys-nc-news.herokuapp.com/api/articles/${id}/comments`,
      requestBody
    )
    .then(({ data }) => {
      console.log(data);
      return data.comment;
    });
};

export const deleteComment = comment_id => {
  return axios
    .delete(`https://kirstys-nc-news.herokuapp.com/api/comments/${comment_id}`)
    .then(response => {
      console.log(response);
      return response.data;
    });
};

// export default { getTopics, getArticles };

// module.exports = getArticles;

// module.exports = { getArticles };

// exports.getArticles = () => {};
