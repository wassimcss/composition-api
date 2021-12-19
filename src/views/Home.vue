<template>
  <h1>Home</h1>
  <button @click="showPosts = !showPosts">Toggle Posts</button>
  <button @click="posts.pop()">Delete Posts</button>
  <p v-if="error">{{ error }}</p>
  <div v-if="posts.length">
    <PostList :posts="posts" v-if="showPosts" />
  </div>
  <h3 v-else>Loading ....</h3>
</template>

<script>
import { computed, ref } from "vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composable/getPosts";
import { useStore } from "vuex";
import { Actions } from "../store/enums/StoreEnums";

export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const showPosts = ref(false);
    // const posts = ref([
    //   {
    //     id: 0,
    //     title: "title 1 lllll",
    //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quasi id? Eligendi ipsa, eum vitae possimus maiores doloribus nostrum delectus, totam explicabo eaque fugiat sequi praesentium itaque nulla dolor nisi",
    //   },
    //   { id: 1, title: "title 2 lllll", body: "text text text" },
    //   { id: 2, title: "title 3 lllll", body: "text text text" },
    // ]);

    // const posts = ref([]);
    // const error = ref(null);

    // const load = async () => {
    //   try {
    //     const data = await fetch("http://localhost:3000/posts");
    //     if (!data.ok) {
    //       throw Error("No Data avaible");
    //     }
    //     console.log(data);
    //     posts.value = await data.json();
    //   } catch (err) {
    //     error.value = err.message;
    //     console.log(err.message);
    //   }
    // };
    // load();

    //////////**********************composable********* */
    // const { load, posts, error } = getPosts();
    // load();
    const error = null
    

    const store = useStore();
    store.dispatch(Actions.FETCH_POSTS);
    const posts = computed(() => {
      return store.getPosts.getPosts
    })

    return {
      posts,
      showPosts,
      error,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
