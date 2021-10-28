 <template>
  <v-form class="mt-4">
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field :value="`Nº ${form.id}`" solo readonly></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          label="Nome"
          v-model="form.nome"
          v-bind="{ ...$input }"
          @input="$emit('form', form)"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          label="Apresentação"
          v-model="form.apresentacao"
          v-bind="{ ...$input }"
          @input="$emit('form', form)"
        ></v-text-field>
      </v-col>

      <v-col>
        <v-text-field
          label="Depósito"
          v-model="form.deposito"
          v-bind="{ ...$input }"
          @input="$emit('form', form)"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

 <script>
export default {
  mounted() {
    this.isEditForm();
    this.$emit("form", this.form);
  },

  props: {
    medicamento: Object,
  },

  data() {
    return {
      form: this.$inertia.form({
        nome: null,
        apresentacao: null,
        deposito: false,
      }),
    };
  },

  methods: {
    isEditForm() {
      let record = false;
      Object.values(this.medicamento || {}).forEach((item) => {
        if (item) {
          record = true;
        }
      });

      if (record) {
        this.form = this.medicamento;
        return true;
      } else return false;
    },
  },
};
</script>

 <style>
</style>
