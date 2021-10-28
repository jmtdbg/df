<template>
  <v-form @submit="doSearch">
    <v-input
      v-model="term"
      class="bg-white col"
      type="search"
      placeholder="O que está procurando hoje?"
      dense
      outlined
      square
    >
      <template v-slot:prepend>
        <v-icon name="search" />
      </template>
    </v-input>

    <v-btn
      type="submit"
      class="search__toolbar-input-btn"
      color="positive"
      label="BUSCAR"
      unelevated
    />
  </v-form>
</template>

 <script>
export default {
  name: "Search",
  // props: {
  //   title: String,
  // },

  data: () => {
    return {
      term: "",
    };
  },

  methods: {
    doSearch() {
      this.$emit("doSearch", { term: this.term });
    },
  },
};
</script>

 <style>
</style>
