Vue.component('alert-box',{
  template: `
  <div class="alert" v-on:click="caution">
    <strong>Error!</strong>
    <slot></slot>
  </div>
  `,
  methods: {
    caution: function(){
      alert('クリックされました');
    }
  }
});

var app = new Vue({
  el: "#app",
});