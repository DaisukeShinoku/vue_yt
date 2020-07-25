var app = new Vue({
  el: "#app",
  data: {
    now: "00:00:00"
  },
  methods: {
    time: function(e){
      var data = new Date();

      this.now = data.getHours() + ":"
      + data.getMinutes() + ":"
      + data.getSeconds();
    }
  }
});