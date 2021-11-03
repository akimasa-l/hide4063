<template>
  <vue-typed-js
    :loopCount="Number.MAX_SAFE_INTEGER"
    :strings="display"
    :typeSpeed="50"
    :loop="true"
    :backSpeed="50"
  >
    <div><span class="typing"></span></div>
  </vue-typed-js>
  <!-- {{ display }} -->
</template>
<script lang="js">
// vue-typed-jsがtypescriptに対応していないでの(無理やり)componentsに回してここではjavascriptを書きpagesのところでtypescriptを書く
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);
export default {
  props: ["display"],

};
</script>
