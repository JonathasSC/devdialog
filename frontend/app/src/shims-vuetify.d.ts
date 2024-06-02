declare module "vuetify/lib/framework" {
  import Vuetify from "vuetify";
  export default Vuetify;
}

declare module "@/plugins/vuetify" {
  import { Vuetify } from "vuetify";
  const vuetify: Vuetify;
  export default vuetify;
}
