import { ref } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("No Data avaible");
      }
      console.log(data);
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };
  return {
    load,
    posts,
    error,
  };
};

export default getPosts;
