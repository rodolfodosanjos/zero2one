<template>
  <div>
    <DocumentsContainer
      :lessonId="lesson.id" />
  </div>
</template>

<script>
import DocumentsContainer from '@/documents/components/containers/DocumentsContainer'

export default {
  name: 'LessonContent',
  props: {
    lesson: {
      required: true,
      type: Object
    }
  },
  components: {
    DocumentsContainer
  }
}
</script>
