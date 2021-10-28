  <template>
  <v-app>
    <v-navigation-drawer app :permanent="!drwaer" :expand-on-hover="!drwaer">
      <!-- profile -->
      <v-list dense>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Usuário</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
      </v-list>

      <!-- menus -->
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="secondary">
          <v-list-item v-for="(menu, index) in menus" :key="index">
            <router-link :to="{name: menu.route}" tag="div" class="d-flex">
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <!-- -->
      <v-app-bar-nav-icon
        @click="drwaer = !drwaer"
        color="white"
      ></v-app-bar-nav-icon>
      <!-- ver -->
      <!-- <search-global></search-global> -->
      <v-spacer></v-spacer>

      <v-divider vertical inset color="white"></v-divider>

      <v-menu left bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="white" text>
            <v-icon>mdi-account-circle</v-icon>
            <!-- <v-avatar color="white" size="36"></v-avatar> -->
            Usuário
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list class="mb-5" style="margin-bottom: 200px">
          <v-list-item link>
            <v-list-item-title>Meu Perfil</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="color-app">
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

  <script>
// import Search from './Components/Search.vue';
export default {
  data: () => ({
    drwaer: false,
    selectedItem: 1,
    menus: [
      {
        icon: "fas fa-house-user",
        title: "Residências",
        route: "Residencias",
      },
      {
        icon: "fas fa-search-dollar",
        title: "Média de Preços",
        route: "MediaPreco",
      },
    ],
  }),
};
</script>

  <style>
.color-app {
  background: #ecf1ff;
  background: -webkit-linear-gradient(to right, #f8f5f5, #ecf1ff);
  background: linear-gradient(to right, #f8f5f5, #ecf1ff);
}
</style>
