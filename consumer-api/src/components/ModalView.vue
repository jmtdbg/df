<template>
  <v-dialog v-model="dialog" width="800">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text icon color="primary" small v-bind="attrs" v-on="on">
        <v-icon>fas fa-eye</v-icon>
      </v-btn>
    </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Visualizar {{ title }}
        </v-card-title>

        <v-card-text>
          <slot></slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false; save()"> Salvar </v-btn>
          <v-btn color="secondary" text @click="dialog = false"> Sair </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

 <script>
export default {
  props: {
    title: String,
  },

  data: () => ({
    dialog: false,
  }),

  methods: {
    save() {
        this.$emit('save', true)
    },
    exit() {
      this.$emit("exit", true);
    },
  },
};
</script>

 <style>
</style>
