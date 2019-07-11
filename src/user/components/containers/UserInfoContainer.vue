<template>
  <UserInfo
    :user="user"
    :isLoading="isLoading"
    :refresh="refresh" />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GET_USER } from '@/user/actions/userActionTypes'
import { USERS_MODULE } from '@/user/store/usersModules'
import UserInfo from '@/user/components/presentationals/UserInfo'

export default {
  name: 'DocumentsContainer',
  components: {
    UserInfo
  },
  computed: {
    ...mapState({
      user: state => state[USERS_MODULE].user.item,
      isLoading: state => state[USERS_MODULE].user.isLoading
    })
  },
  methods: {
    ...mapActions(USERS_MODULE, {
      refresh: GET_USER
    })
  }
}
</script>
