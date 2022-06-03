const axios = require("axios");

const getTodos = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // returning the response without userId

    if (response.status == 200) {
      return res.status(200).json(
        response.data.map(function (value) {
          return {
            id: value.id,
            title: value.title,
            completed: value.completed,
          };
        })
      );
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json("Provide An User Id");
    const user = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const value = response.data.filter((res) => res.userId == id);

    if (response.status == 200) {
      return res.status(200).json({
        id: user.data.id,
        name: user.data.name,
        email: user.data.email,
        phone: user.data.phone,
        todos: value,
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getTodos, getUsersById };
