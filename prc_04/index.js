var app = new Vue({
  el: "#app",
  data: {
    prefs: [
      { name: '北海道'},
      { name: '秋田県'},
      { name: '福島県'},
      { name: '山形県'},
      { name: '沖縄'}
    ]
  },
  methods: {
    shuffle: function(){
      this.prefs = _.shuffle(this.prefs);
    }
  }
});