<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <logo />
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <DocumentsPage />
    </v-content>
  </v-app>
</template>

<script>
import DocumentsPage from '@/documents/pages/DocumentsPage';
import Logo from '@/commons/components/presentationals/Logo';

export default {
  name: 'App',
  components: {
    DocumentsPage,
    Logo
  },
};
</script>
