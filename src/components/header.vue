<template>
  <div class="con">
    <mu-appbar title="">
      <mu-flexbox>
        <mu-flexbox-item style="width: 15%;"><i class="icon iconfont" @click="goBack" style="font-size: 28px;font-weight: bold">&#xe697;</i></mu-flexbox-item>
        <mu-flexbox-item style="width: 70%; text-align: center">标题</mu-flexbox-item>
        <mu-flexbox-item style="width: 15%; text-align: center"><i class="icon iconfont" @click="toggle(true)" style="font-size: 28px;font-weight: bold;">&#xe699;</i></mu-flexbox-item>

      </mu-flexbox>
      <!--<mu-flat-button  slot="left" label="" class="demo-flat-button" labelPosition="before" @click="goBack"  icon="expand_more" iconClass="iClass" secondary/>-->
      <!--<mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="标题"  secondary style="width: 180%;"/>-->
      <!--<mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="标题"  secondary/>-->
    </mu-appbar>
    <div>
      <!--<mu-raised-button label="toggle drawer" @click="toggle()"/>-->
      <!--<mu-raised-button label="undocked drawer" @click="toggle(true)"/>-->
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-list @itemClick="docked ? '' : toggle()">
          <mu-list-item title="Menu Item 1"/>
          <mu-list-item title="Menu Item 2"/>
          <mu-list-item title="Menu Item 3"/>
          <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        </mu-list>
      </mu-drawer>
    </div>
  </div>
</template>
<script>


  export default{
    data () {
      return {
        open: false,
        docked: true
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      goBack(){
        //window.alert(111);
        this.loGOBack();
      }
    }
  }
</script>
<style scoped>
  .con{
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index:22
  }
  .iClass{
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
  }
</style>
