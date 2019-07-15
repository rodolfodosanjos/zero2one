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
  props: {
    lesson: {
      required: true,
      type: Object
    }
  },
  components: {
    LessonContent
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  }
}
</script>
