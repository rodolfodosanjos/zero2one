<template>
  <v-list-tile
    :key="lesson.title"
    avatar
    @click="openLesson()">
    <v-list-tile-avatar>
      <v-avatar
        size="40"
        color="green lighten-1 white--text">
        {{ lessonIndex + 1 }}
      </v-avatar>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title v-html="lesson.name" />
      <v-list-tile-sub-title v-html="formattedLessonDate" />
    </v-list-tile-content>

    <LessonDialog
      ref="LessonDialog"
      :lesson="lesson" />
  </v-list-tile>
</template>

<script>
import moment from 'moment'
import LessonDialog from '@/lessons/pages/LessonDialog'

export default {
  name: 'LessonListItem',
  props: {
    lesson: {
      required: true,
      type: Object
    },
    lessonIndex: {
      required: true,
      type: Number
    }
  },
  components: {
    LessonDialog
  },
  computed: {
    formattedLessonDate() {
      const DATE_FORMAT = 'DD/MM/YYYY'
      return moment(this.lesson.date).format(DATE_FORMAT)
    }
  },
  methods: {
    openLesson() {
      this.$refs.LessonDialog.open(this.lesson)
    }
  }
}
</script>
