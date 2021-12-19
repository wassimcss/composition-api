<template>
  <h1>Detail</h1>
  <p v-if="error">{{ error }}</p>
  <h3 v-if="post">{{ post.title }}</h3>
  <p v-if="post">{{ post.body }}</p>
</template>

<script>
import getSinglePost from "../composable/getSinglePost";
export default {
  name: "Detail",
  props: ["id"],
  setup(props) {
    const { post, error, load } = getSinglePost(props.id);
    load();
    return { error, post };
  },
};
</script>

<style></style>
