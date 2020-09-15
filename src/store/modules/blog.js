import db from "@/services/nodeApi.service.js";
import router from "@/router";

export const namespaced = true;

export const state = {
  blogPosts: {},
  blogPost: {}
};

export const mutations = {
  ADD_BLOG_POST(state, blogPost) {
    state.blogPost = { ...state.blogPost, ...blogPost };
  },
  SET_BLOG_POSTS(state, blogPosts) {
    state.blogPosts = blogPosts;
  },
  SET_BLOG_POST(state, blogPost) {
    state.blogPost = blogPost;
  },
  UPDATE_BLOG_POST(state, blogPost) {
    const blogPostIndex = state.blogPosts.findIndex(
      item => item.id === blogPost._id
    );
    state.blogPosts[blogPostIndex] = blogPost;
  },
  REMOVE_BLOG_POSTS(state, ids) {
    const updatedBlogPosts = state.blogPosts.filter(
      item => !ids.includes(item._id)
    );
    state.blogPosts = updatedBlogPosts;
  }
};

// Post blogPost to blogPost api and commit the change in vuex
export const actions = {
  createBlogPost({ commit, dispatch, rootGetters }, blogPost) {
    console.log(rootGetters["auth/isAdmin"]);
    if (!rootGetters["auth/isAdmin"]) {
      return dispatch(
        "notification/createNotification",
        {
          action: "Create Blog Post",
          message: "You don't have the permissions to do that!",
          type: "failure"
        },
        { root: true }
      );
    }
    return db
      .postBlogPost(blogPost)
      .then(blogPost => {
        commit("ADD_BLOG_POST", blogPost);
        router.push({ name: "blog-post-show", params: { id: blogPost._id } });
        dispatch(
          "notification/createNotification",
          {
            action: "Create Blog Post",
            message: "Your blogPost has been posted!",
            type: "success"
          },
          { root: true }
        );
      })
      .catch(err => {
        return dispatch(
          "notification/createNotification",
          {
            action: "Create Blog Post",
            message: err.data.message,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  // Get all blog posts from the api
  fetchBlogPosts({ commit, dispatch }) {
    return db
      .getAllBlogPosts()
      .then(blogPosts => {
        commit("SET_BLOG_POSTS", blogPosts);
        return blogPosts;
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Get Blog Posts",
            message: err.data.message,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  fetchFeaturedBlogPosts({ commit, dispatch }) {
    return db
      .getFeaturedBlogPosts()
      .then(blogPosts => {
        commit("SET_BLOG_POSTS", blogPosts);
        return blogPosts;
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Get Featured Blog Posts",
            message: err.data.message,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  fetchBlogPost({ commit, getters, dispatch }, id) {
    let blogPost = getters.getBlogPostById(id);
    if (blogPost) {
      commit("SET_BLOG_POST", blogPost);
      return blogPost;
    } else {
      return db
        .getBlogPost(id)
        .then(blogPost => {
          commit("SET_BLOG_POST", blogPost);
        })
        .catch(err => {
          dispatch(
            "notification/createNotification",
            {
              action: "Get Blog Post",
              message: err.data.message,
              type: "failure"
            },
            { root: true }
          );
        });
    }
  },
  updateBlogPost({ commit, dispatch, rootGetters }, blogPost) {
    if (!rootGetters["auth/isAdmin"]) {
      return dispatch(
        "notification/createNotification",
        {
          action: "Create Blog Post",
          message: "You don't have the permissions to do that!",
          type: "failure"
        },
        { root: true }
      );
    }
    return db
      .updateBlogPost(blogPost)
      .then(blogPost => {
        commit("UPDATE_BLOG_POST", blogPost);
        dispatch(
          "notification/createNotification",
          {
            action: "Blog Post Updated",
            message: "This blogPost has been updated!",
            type: "success"
          },
          { root: true }
        );
      })
      .catch(err => {
        dispatch(
          "notification/createNotification",
          {
            action: "Update Blog Post",
            message: err.data.message,
            type: "failure"
          },
          { root: true }
        );
      });
  },
  deleteBlogPost({ commit, dispatch, rootGetters }, blogPost) {
    if (!rootGetters["auth/isAdmin"]) {
      return dispatch(
        "notification/createNotification",
        {
          action: "Delete Blog Post",
          message: "You don't have the permissions to do that!",
          type: "failure"
        },
        { root: true }
      );
    }
    return db
      .deleteBlogPost(blogPost._id)
      .then(blogPost => {
        commit("REMOVE_BLOG_POSTS", [blogPost._id]);
        dispatch(
          "notification/createNotification",
          {
            action: "Deleted Blog Post",
            message: "The Blog Post has been deleted",
            type: "caution"
          },
          { root: true }
        );
      })
      .catch(err => {
        console.log(err);
        dispatch(
          "notification/createNotification",
          {
            action: "Delete Blog Post",
            message: err.data.message,
            type: "failure"
          },
          { root: true }
        );
      });
  }
};

export const getters = {
  getBlogPostById: state => id => {
    return state.blogPosts[id];
  }
};
