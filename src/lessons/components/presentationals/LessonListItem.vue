<template>
  <div>
    <v-list-tile
      :key="lesson.title"
      avatar>
      <v-list-tile-avatar>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="lesson.name" />
        <v-list-tile-sub-title v-html="lesson.description" />
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'LessonListItem',
  props: {
    lesson: {
      required: true,
      type: Object
    }
  }
}
</script>
