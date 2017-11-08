<template>
  <div>
    <_header></_header>
    <mu-flexbox justify="center" align="center" style="margin-top: .55rem;padding: .1rem;background-color: #d7dde4;">
      <mu-flexbox-item align="center">图片</mu-flexbox-item>
      <mu-flexbox-item align="center">详情</mu-flexbox-item>
      <mu-flexbox-item align="center">价格</mu-flexbox-item>
      <mu-flexbox-item align="center">数量</mu-flexbox-item>
    </mu-flexbox>
    <div class="demo-infinite-container">
      <mu-list>
        <!--<template v-for="item in list">-->
          <!--<mu-list-item :title="item"/>-->
          <!--<mu-divider/>-->
        <!--</template>-->
        <mu-flexbox justify="center" v-for="item in list" :keys="1" align="center" style="margin-top: .1rem;padding: .1rem;">
          <mu-flexbox-item align="center">{{item}}</mu-flexbox-item>
          <mu-flexbox-item align="center">{{item}}</mu-flexbox-item>
          <mu-flexbox-item align="center">{{item}}</mu-flexbox-item>
          <mu-flexbox-item align="center"><mu-text-field type="number" style="width: 100%;"/></mu-flexbox-item>
        </mu-flexbox>
      </mu-list>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
    <div style="width: 100%;height: .55rem;"></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import _header from '@/components/header';
  import MuInfiniteScroll from "../../../node_modules/muse-ui/src/infiniteScroll/infiniteScroll.vue";
  import MuTextField from "../../../node_modules/muse-ui/src/textField/textField.vue";
  export default {
    components:{
      MuTextField,
      MuInfiniteScroll,
      _header
    },
    data () {
      const list = []
      for (let i = 0; i < 15; i++) {
        list.push('item' + (i + 1))
      }
      return {
        list,
        num: 20,
        loading: false,
        scroller: null,
        fulw:true
      }
    },
    mounted () {
      this.scroller = this.$el
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
<style scoped>
  .demo-infinite-container{
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
</style>
