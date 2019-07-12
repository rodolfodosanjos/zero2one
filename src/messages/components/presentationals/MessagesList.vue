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
    <v-layout
      v-if="!isLoading"
      row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line>
            <MessageListItem
              v-for="message in messages"
              :key="message.id"
              :message="message" />
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MessageListItem from '@/messages/components/presentationals/MessageListItem'

export default {
  name: 'MessagesList',
  props: {
    messages: {
      required: true,
      type: Array
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
    MessageListItem
  },
  created() {
    this.refresh()
  }
}
</script>
