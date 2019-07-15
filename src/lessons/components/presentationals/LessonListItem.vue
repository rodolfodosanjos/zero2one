<template>
  <v-list-tile
    :key="lesson.title"
    avatar>
    <v-list-tile-avatar>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title v-html="lesson.name" />
      <v-list-tile-sub-title v-html="lesson.description" />
    </v-list-tile-content>

    <LessonDialog
      ref="LessonDialog"
      :lesson="lesson" />
  </v-list-tile>
</template>

<script>
import LessonDialog from '@/lessons/pages/LessonDialog'

export default {
  name: 'LessonListItem',
  props: {
    lesson: {
      required: true,
      type: Object
    }
  },
  components: {
    LessonDialog
  },
  mounted() {
    if (this.lesson.id === 1) {
      this.$refs.LessonDialog.open()
    }
  }
}
</script>
