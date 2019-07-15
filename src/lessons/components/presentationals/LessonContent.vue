<template>
  <v-container>
    <div>
      <span class="headline">{{lesson.name}}</span>
    </div>
    <span class="title">Mensagens</span>
    <MessagesContainer
      :lessonId="lesson.id" />
    <span class="title">Documentos</span>
    <DocumentsContainer
      :lessonId="lesson.id" />
  </v-container>
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
