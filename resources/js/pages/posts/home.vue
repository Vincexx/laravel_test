<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <!-- Body -->
      <div class="box mb-2" v-for="(post, index) in posts" :key="index">
        <h1>{{ post.title }}</h1>
        <p>
          {{ post.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  middleware: "auth",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("post", ["posts"])
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions("post", ["fetchPosts"])
  },
  metaInfo() {
    return { title: this.$t("All Posts") };
  }
};
</script>

<style scoped>
.box {
  padding: 1em;
  border: 1px solid #e5e5e5;
}

.nav-bar {
  color: black;
  text-decoration: none;
}
</style>
