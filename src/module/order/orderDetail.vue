<template>
  <div>
    <_header></_header>
    <div style="margin-top: .6rem">
      <mu-flexbox class="mfb">
        <mu-flexbox-item class="flex-demo">
          <img src="./../../../static/shoplog/1.jpg" style="width: 80%;height: 100%">
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <ol style="font-size: 14px;color: #0c82df;">折叠床1号</ol>
          <ol style="font-size: 12px;color: #d0d0d0">单人|海绵</ol>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <ol style="color: #0c82df;font-size: 16px;">预定<span style="font-size: 18px;color: red;">1</span>个</ol>
        </mu-flexbox-item>
      </mu-flexbox>
      <mu-flexbox class="mfb">
        <mu-flexbox-item class="flex-demo">
          <ol style="font-size: 12px">北京</ol>
          <ol style="font-size: 16px;">朝阳医院</ol>
          <ol style="font-size: 12px;">20171107</ol>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <ol style="font-size: 12px"></ol>
          <ol style="font-size: 16px;">1天</ol>
          <ol style="font-size: 12px;"></ol>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <ol style="font-size: 12px">北京</ol>
          <ol style="font-size: 16px;">朝阳医院</ol>
          <ol style="font-size: 12px;">20171107</ol>
        </mu-flexbox-item>
      </mu-flexbox>
      <mu-card>
        <mu-card-title title="总费用" subTitle="300"/>
        <mu-card-actions>
          <mu-flexbox>
            <mu-flexbox-item>租床费用：¥120</mu-flexbox-item>
            <mu-flexbox-item>租床费用：¥120</mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox>
            <mu-flexbox-item>租床费用：¥120</mu-flexbox-item>
            <mu-flexbox-item>租床费用：¥120</mu-flexbox-item>
          </mu-flexbox>
        </mu-card-actions>
      </mu-card>
    </div>
    <div style="text-align: center;">
      <mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="确定"  secondary style="background-color: #2483e0;color: #fffdef;width: 100%;"/>
    </div>
  </div>
</template>
<script>
  import _header from '@/components/header';
  import MuCard from "../../../node_modules/muse-ui/src/card/card.vue";
  import MuFlexbox from "../../../node_modules/muse-ui/src/flexbox/flexbox.vue";
  import MuFlexboxItem from "../../../node_modules/muse-ui/src/flexbox/flexboxItem.vue";
  export default {
    components:{
      MuFlexboxItem,
      MuFlexbox,
      MuCard,
      _header
    },
  }
</script>
<style scoped>
  .flex-demo{
    width: 100%;
    height: .6rem;
    text-align: center;
  }
  .mfb{
    margin-top: .2rem;
  }
</style>
