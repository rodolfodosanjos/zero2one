<template>
  <v-container
    grid-list-md
    text-xs-center>
    <div
      v-if="isLoading"
      class="text-xs-center">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate>
      </v-progress-circular>
    </div>
    <div v-if="!isLoading">
      <ZrPageTitle>{{user.name}}</ZrPageTitle>
      <div class="font-weight-thin title text-lg-center mb-2 text-uppercase">{{user.profile.name}}</div>
    </div>
  </v-container>
</template>

<script>
import ZrPageTitle from '@/commons/components/ZrPageTitle'

export default {
  name: 'UserInfo',
  props: {
    user: {
      required: true,
      type: Object
    },
    isLoading: {
      required: true,
      type: Boolean
    },
    refresh: {
      required: true,
      type: Function
    }
  },
  components: {
    ZrPageTitle
  },
  created() {
    this.refresh()
  }
}
</script>
