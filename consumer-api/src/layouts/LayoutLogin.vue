<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="d-flex justify-center align-center min-height"
      >
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.min-height {
  min-height: 100%;
}

.login-app-color {
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
}
</style>
