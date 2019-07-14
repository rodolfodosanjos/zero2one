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
        indeterminate />
    </div>
    <v-layout
      v-if="!isLoading"
      row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line>
            <LessonListItem
              v-for="lesson in lessons"
              :key="lesson.id"
              :lesson="lesson" />
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LessonListItem from '@/lessons/components/presentationals/LessonListItem'

export default {
  name: 'LessonsList',
  props: {
    lessons: {
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
    LessonListItem
  },
  created() {
    this.refresh()
  }
}
</script>
