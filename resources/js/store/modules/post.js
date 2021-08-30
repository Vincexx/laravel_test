import axios from "axios";

export const state = {
  posts: [],
  usersPosts: [],
  post: {
    title: "",
    body: ""
  }
};
export const getters = {
  posts: state => state.posts,
  usersPosts: state => state.usersPosts,
  post: state => state.post
};
export const actions = {
  // fetch all Posts
  async fetchPosts({ commit }) {
    await axios
      .get("/api/posts")
      .then(response => {
        commit("setPosts", response.data);
      })
      .catch(error => console.log(error));
  },

  // Fetch Users Posts
  async fetchUsersPosts({ commit }) {
    await axios
      .get("/api/user-posts")
      .then(response => {
        commit("setUsersPosts", response.data);
      })
      .catch(error => console.log(error));
  },

  // Add User
  async addUser({ commit, dispatch }, data) {
    await axios
      .post("/api/posts", data)
      .then(response => {
        dispatch("fetchUsersPosts");
        dispatch("hideModal");
        commit("clearPost");
      })
      .catch(error => console.log(error));
  },

  // Fetch Post
  async fetchUsersPost({ commit, dispatch }, id) {
    await axios
      .get("/api/posts/" + id)
      .then(response => {
        dispatch("showModal");
        commit("setPost", response.data);
      })
      .catch(error => console.log(error));
  },

  // Delete
  async deleteUser({ commit, dispatch }, id) {
    await axios.delete("/api/posts/" + id).then(response => {
      dispatch("fetchUsersPosts");
    });
  },

  // Modals
  showModal({}) {
    $("#addPost").modal("show");
  },
  hideModal({}) {
    $("#addPost").modal("hide");
  }
};
export const mutations = {
  setPosts(state, payload) {
    return (state.posts = payload);
  },
  setUsersPosts(state, payload) {
    return (state.usersPosts = payload);
  },
  setPost(state, payload) {
    return (state.post = payload);
  },
  clearPost() {
    return (state.post = {
      title: "",
      body: ""
    });
  }
};
