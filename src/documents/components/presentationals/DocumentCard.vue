<template>
  <v-card>
    <v-img
      :src="document.imgUrl"
      aspect-ratio="2.75" />

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{document.name}}</h3>
        <div>{{document.description}}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn
        flat
        @click="download(document)"
        color="primary">Baixar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DocumentCard',
  props: {
    document: {
      required: true,
      type: Object,
    },
    download: {
      required: true,
      type: Function,
    },
  },
};
</script>
