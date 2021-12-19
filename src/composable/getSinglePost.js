import { ref } from "vue";
const getSinglePost = (id) => {
  const error = ref(null);
  const post = ref(null);
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("this post dosn't exist");
      }

      post.value = await data.json();
    } catch (err) {
      error.value = err;
      console.log(err);
    }
  };
  return { error, load, post };
};
export default getSinglePost
