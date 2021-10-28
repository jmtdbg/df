 <template>
  <v-card>
    <v-card-title primary-title> MÉDIA DE PREÇOS </v-card-title>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        clearable
      ></v-text-field>
    </v-card-title>

    <v-card-text>
      <v-data-table
        :headers="columns"
        :items="precomedios"
        item-key="id"
        :items-per-page="5"
        :search="search"
        dense
      >
        <template v-slot:[`item.actions`]="{ item }">
          <modal-edit title="Preços Médios" @save="save()">
            <Form :precomedios="item" @form="precomedios = $event" />
          </modal-edit>
          <modal-delete @on-deleted="remove(item.id)"></modal-delete>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>  
</template>

 <script>
// import Form from "./components/Form.vue";

export default {
  // components: { Form },
  
  async mounted() {
    const response = await this.axios.get(
      "http://127.0.0.1:5000/preco-medio/all"
    );
    this.precomedios = response.data.precomedios 
  },

  data: () => {
    return {
      precomedios: [],

      columns: [
        {
          text: "Neighbourhood Group",
          align: "start",
          sortable: false,
          value: "neighbourhood_group",
        },
        {
          text: "Room Type",
          align: "start",
          sortable: false,
          value: "room_type",
        },
        {
          text: "Price",
          align: "start",
          sortable: false,
          value: "price",
        },
        { text: "Ações", value: "actions", sortable: false },
      ],
      search: "",
    };
  },

  methods: {
    remove(id) {
      const index = this.precomedios.findIndex(
        (precomedio) => precomedio.id === id
      );
      this.precomedios.splice(index, 1);
    },

    save() {
      this.precomedio = this.$inertia.form(this.precomedio);
      console.log("dados editados", this.precomedio);
    },
  },
};
</script>

 <style>
</style>
