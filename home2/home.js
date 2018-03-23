/**
 * home.js
 * Created by dsky on 18/3/20.
 */

import Vue from 'vue';
import { Input, Select, Button, Form, FormItem, Option, row, col, Radio, RadioGroup, Checkbox, CheckboxGroup,
  Autocomplete, DatePicker, Upload, Dialog, Alert, MessageBox, Message, Loading,RadioButton } from 'element-ui';

import hometemplate from './home.vue';

Vue.use(Input);
Vue.use(Select);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Option);
Vue.use(row);
Vue.use(col);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Autocomplete);
Vue.use(DatePicker);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Alert);
Vue.use(Loading);
Vue.use(RadioButton);


Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const vm = new Vue({
  el: '#app',
  template: '<hometemplate />',
  components: { hometemplate },
  computed: {},
  mounted() {
  }
});
window.rns = {};
