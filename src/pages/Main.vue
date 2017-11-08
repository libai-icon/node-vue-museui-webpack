<template>
  <div>
    <router-view></router-view>
    <mu-paper id="footer">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="/index" title="index" icon="list"/>
        <mu-bottom-nav-item value="/sendBack" title="sendback" icon="photo"/>
        <mu-bottom-nav-item value="/chooseBed" title="chooseBed" icon="books"/>
        <mu-bottom-nav-item value="/orderDetail" title="orderDetail" icon="restore"/>
        <mu-bottom-nav-item value="/orderFol" title="orderFol" icon="location_on"/>
      </mu-bottom-nav>
  </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: '/index'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val

      this.$router.push(val);


    }
  },
  //首页左右滑动换页；
    beforeRouteUpdate (to, from, next) {
     let path=to.path;
     if(path=="/")path="/index";

     this.bottomNav = path;
    next();
  },
  mounted(){
        let path=this.$route.path;
        if(path=="/")path="/index";

        this.bottomNav = path;

  }
}


</script>

<style>
#footer {
  position:fixed;
  left:0;
  right:0;
  bottom:0;
}
#footer .mu-buttom-item{
    min-width:0.62rem;
}
</style>
