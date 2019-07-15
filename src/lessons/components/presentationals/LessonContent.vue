<template>
  <div>
    <DocumentsContainer
      :lessonId="lesson.id" />
    <MessagesContainer
      :lessonId="lesson.id" />
  </div>
</template>

<script>
import DocumentsContainer from '@/documents/components/containers/DocumentsContainer'
import MessagesContainer from '@/messages/components/containers/MessagesContainer'

export default {
  name: 'LessonContent',
  props: {
    lesson: {
      required: true,
      type: Object
    }
  },
  components: {
    DocumentsContainer,
    MessagesContainer
  }
}
</script>
