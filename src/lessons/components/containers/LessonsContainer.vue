<template>
  <LessonsList
    :lessons="lessons"
    :isLoading="isLoading"
    :refresh="refresh" />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GET_LESSONS } from '@/lessons/actions/lessonsActionTypes'
import { LESSONS_MODULE } from '@/lessons/store/lessonsModules'
import LessonsList from '@/lessons/components/presentationals/LessonsList'

export default {
  name: 'DocumentsContainer',
  components: {
    LessonsList
  },
  computed: {
    ...mapState({
      lessons: state => state[LESSONS_MODULE].lessons.items,
      isLoading: state => state[LESSONS_MODULE].lessons.isLoading
    })
  },
  methods: {
    ...mapActions(LESSONS_MODULE, {
      refresh: GET_LESSONS
    })
  }
}
</script>
