 <template>
  <v-dialog v-model="dialog" max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text icon color="error" small v-bind="attrs" v-on="on">
        <!-- <v-icon>mdi-delete</v-icon> -->
        <v-icon>fas fa-trash</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 d-flex flex-column">
        <v-icon color="error" x-large>mdi-alert</v-icon>
        <span> Tem certeza disso ? </span>
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          text
          @click="
            dialog = false;
            confirmRemove();
          "
        >
          Sim
        </v-btn>
        <v-btn color="primary" text @click="dialog = false"> Não </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

 <script>
export default {
  data: () => ({
    dialog: false,
  }),

  methods: {
    confirmRemove() {
      this.$emit("on-deleted", true);
    },
  },
};
</script>

 <style>
</style>
