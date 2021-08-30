<template>
  <div>
    <!-- Add Post Modal -->
    <div
      class="modal fade"
      id="addPost"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Post</h5>
            <button type="button" class="close" @click="hideModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="">Title</label>
              <input
                type="text"
                class="form-control"
                v-model="post.title"
                placeholder=""
              />
            </div>

            <div class="form-group">
              <label for="">Body</label>
              <textarea
                class="form-control"
                v-model="post.body"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="addUser(post)"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("post", ["post"])
  },

  methods: {
    ...mapActions("post", ["hideModal", "addUser"])
  }
};
</script>
