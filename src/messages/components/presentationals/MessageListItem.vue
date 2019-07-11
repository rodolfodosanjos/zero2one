<template>
  <div>
    <v-list-tile
      :key="message.title"
      avatar>
      <v-list-tile-avatar>
        <img :src="message.avatar">
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="message.title"></v-list-tile-title>
        <v-list-tile-sub-title v-html="message.message"></v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'MessageListItem',
  props: {
    message: {
      required: true,
      type: Object
    }
  }
}
</script>
