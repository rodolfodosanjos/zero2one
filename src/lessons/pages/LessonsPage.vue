<template>
  <div>
    <v-container>
      <ZrPageTitle>Aulas</ZrPageTitle>
      <LessonsContainer />
    </v-container>
  </div>
</template>

<script>
import ZrPageTitle from '@/commons/components/ZrPageTitle'
import LessonsContainer from '@/lessons/components/containers/LessonsContainer'

export default {
  name: 'LessonsPage',
  components: {
    LessonsContainer,
    ZrPageTitle
  }
}
</script>
