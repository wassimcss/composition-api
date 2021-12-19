<template>
  <h1>Post List</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: {
    SinglePost,
  },
  setup(props) {
    console.log(props.posts);
    onMounted(() => console.log("onMounted()"));
    onUnmounted(() => console.log("onUNMounted()"));
    onUpdated(() => console.log("onUPdated()"));

    return {};
  },
};
</script>

<style></style>
