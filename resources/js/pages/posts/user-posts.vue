<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <button type="button" class="btn btn-primary mb-2" @click="showModal">
        Add Post
      </button>
      <!-- Body -->
      <div class="box mb-2" v-for="(post, index) in usersPosts" :key="index">
        <div class="d-flex justify-content-between">
          <h1>{{ post.title }}</h1>
          <div>
            <button
              type="button"
              class="btn btn-warning"
              @click="editTrue(), fetchUsersPost(post.id)"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteUser(post.id)"
            >
              Delete
            </button>
          </div>
        </div>
        <p>
          {{ post.body }}
          {{ edit }}
        </p>
      </div>
    </div>

    <add />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Add from './modals/Add.vue'

export default {
  components: {
    Add
  },
  middleware: 'auth',
  computed: {
    ...mapGetters('post', ['usersPosts', 'edit'])
  },
  created () {
    this.fetchUsersPosts()
  },
  methods: {
    ...mapActions('post', [
      'fetchUsersPosts',
      'showModal',
      'deleteUser',
      'fetchUsersPost',
      'editTrue'
    ])
  },
  metaInfo () {
    return { title: this.$t('User Posts') } 
  }
} 
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
