<template>
  <div class="home">
    <_header></_header>
    <div style="padding: .1rem;margin-top: 52px;">
      <input type="tel" maxlength="11" placeholder="请输入手机您的手机号" style="width: 100%;line-height: .3rem;margin-bottom: .1rem;"/>
      <div class="logic">
        <div><input type="tel" maxlength="6" placeholder="请输入图片验证码" style="width: 100%;margin-bottom: .1rem;line-height: .3rem;"/></div>
        <div><img src="./../../../static/shoplog/1.jpg" style="width:100%;height: .35rem;"/></div>
      </div>
      <div class="logic">
        <div><input type="tel" maxlength="6" placeholder="请输入图片验证码" style="width: 100%;margin-bottom: .1rem;line-height: .3rem;"/></div>
        <div><mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="发送验证码"  secondary style="background-color: #2483e0;color: #fffdef"/></div>
      </div>
      <mu-checkbox label="绑定微信"></mu-checkbox>
      <div style="text-align: center;">
        <mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="确定"  secondary style="background-color: #2483e0;color: #fffdef;width: 100%;"/>
      </div>

    </div>
  </div>

</template>

<script>

  import _header from '@/components/header';
  import MuCheckbox from "../../../node_modules/muse-ui/src/checkbox/checkbox.vue";

  export default {

    components:{
      MuCheckbox,
      _header
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    height:640px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
  .logic{
    display: -moz-box;
    display: -webkit-box;
    display: box;
  }
  .logic div:first-child{display: block;width: 69%;padding-right: .1rem;}
  .logic div:nth-child(2){display: block;width:30%;}
</style>
