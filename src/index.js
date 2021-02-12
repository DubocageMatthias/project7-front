// @ts-ignore
var app = new Vue({ 
    el: '#app',
    data () {
        return {
        message: 'Hello Vue!',
        info:null
        }
    },
  mounted () {
    axios
      .get('http://grp7.360medics.com:8080/')
      .then(response => (this.info = response))
      .catch(e => {console.log(e)}); 

  }
});
