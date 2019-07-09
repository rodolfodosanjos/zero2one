<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <Logo class="ma-1" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Logo from '@/commons/components/presentationals/Logo'

  export default {
    name: 'App',
    components: {
      Logo
    }
  }
</script>
