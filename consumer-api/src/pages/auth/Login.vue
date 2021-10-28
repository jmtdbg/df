 <template>
  <layout-login>
    <v-card width="100%" class="py-5" tile elevation="0">
      <v-list-item three-line>
        <v-list-item-content class="text-center">
          <v-list-item-title class="text-h5 mb-1 text-uppercase">
            Bem Vindo
          </v-list-item-title>
          <v-list-item-subtitle>
            Preencha os campos abaixo para entrar
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <div class="d-flex align-center">
        <v-card-text>
          <v-card-text>
            <v-form>
              <v-text-field
                name="email"
                label="E-mail"
                type="text"
                v-model="credentials.email"
                clearable
              ></v-text-field>
              <v-text-field
                name="password"
                label="Senha"
                type="password"
                v-model="credentials.password"
                clearable
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions class="d-flex justify-space-between">
            <v-checkbox v-model="checkbox" label="Lembrar-me"></v-checkbox>

            <Link :href="$route('dashboard')">
              Esqueceu a senha ou e-mail?</Link
            >
          </v-card-actions>

          <v-card-actions class="d-flex justify-end">
            <v-btn color="primary" outlined rounded dark medium @click="login">
              Entrar
            </v-btn>
          </v-card-actions>
        </v-card-text>

        <v-divider vertical class="mx-2" height="50"></v-divider>

        <v-card-text :style="isMobile ? 'width: 200px' : ''">
          <v-card-text class="d-flex justify-center">
            <img
              src="img/login_mobile.svg"
              :height="!isMobile ? 500 : 200"
              :width="!isMobile ? 500 : 200"
              alt=""
            />
          </v-card-text>
        </v-card-text>
      </div>
    </v-card>
  </layout-login>
</template>

 <script>
import LayoutLogin from "../../Layouts/LayoutLogin.vue";

export default {
  data: () => ({
    checkbox: false,
    credentials: {
      email: "jmtdbg@gmail.com",
      password: "12345",
    },
  }),

  layout: LayoutLogin,

  methods: {
    login() {
      this.$inertia.post(this.$route("login.post"), this.credentials);
    },
  },
};
</script>

 <style>
</style>
