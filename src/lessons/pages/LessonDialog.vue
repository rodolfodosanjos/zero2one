<template>
  <v-dialog
    v-model="isOpen"
    width="700">
    <v-card v-if="isOpen">
      <LessonContent
        :lesson="lesson" />
    </v-card>
  </v-dialog>
</template>

<script>
import LessonContent from '@/lessons/components/presentationals/LessonContent'

export default {
  name: 'LessonDialog',
  components: {
    LessonContent
  },
  data () {
    return {
      isOpen: false,
      lesson: {}
    }
  },
  methods: {
    open(lesson) {
      this.lesson = lesson
      this.isOpen = true
    },
    close() {
      this.isOpen = false
      this.lesson = {}
    }
  }
}
</script>
