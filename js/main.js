var app = new Vue({
  el:"#app",
   data:{
      isShow = false
   },
   methods:{
      changeShow:function(){
         this.isShow = !this.isShow;
    }
  }
})