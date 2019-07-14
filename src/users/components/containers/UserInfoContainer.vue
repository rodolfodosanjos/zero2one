<template>
  <UserInfo
    :user="user"
    :isLoading="isLoading"
    :refresh="refresh" />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GET_USER } from '@/users/actions/usersActionTypes'
import { USERS_MODULE } from '@/users/store/usersModules'
import UserInfo from '@/users/components/presentationals/UserInfo'

export default {
  name: 'UserInfoContainer',
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
