<template>
  <div>
    <v-container>
      <UserInfoContainer />
    </v-container>
  </div>
</template>

<script>
import UserInfoContainer from '@/users/components/containers/UserInfoContainer'

export default {
  name: 'UserPage',
  components: {
    UserInfoContainer
  }
}
</script>
