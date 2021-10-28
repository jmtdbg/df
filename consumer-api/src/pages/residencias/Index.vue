 <template>
  <v-card>
    <v-card-title primary-title> RESIDÊNCIAS </v-card-title>

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
        :items="residencias"
        item-key="id"
        :items-per-page="5"
        :search="search"
        dense
      >
        <template v-slot:[`item.actions`]="{ item }">
            <v-btn text icon color="primary" small :to="`residencia/${item.id}`">
              <v-icon>fas fa-eye</v-icon>
            </v-btn>
          <modal-edit title="Residencia" @save="save()">
            <Form :residencia="item" @form="residencia = $event" />
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
      "http://127.0.0.1:5000/residencias/all/page/1"
    );
    this.residencias = response.data.residencias 
  },

  data: () => {
    return {
      residencias: [],

      columns: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Host Name",
          align: "start",
          sortable: false,
          value: "host_name",
        },
        {
          text: "Neighbourhood Group",
          align: "start",
          sortable: false,
          value: "neighbourhood_group",
        },
        { text: "Ações", value: "actions", sortable: false },
      ],
      search: "",
    };
  },

  methods: {
    remove(id) {
      const index = this.residencias.findIndex(
        (residencia) => residencia.id === id
      );
      this.residencias.splice(index, 1);
    },

    save() {
      this.residencia = this.$inertia.form(this.residencia);
      console.log("dados editados", this.residencia);
    },
  },
};
</script>

 <style>
</style>
