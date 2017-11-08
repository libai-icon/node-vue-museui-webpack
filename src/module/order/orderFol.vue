<template>
  <div>
  <_header></_header>
    <mu-tabs :value="activeTab" @change="handleTabChange" style="margin-top: .55rem">
      <mu-tab value="tab1" title="进行中"/>
      <mu-tab value="tab2" title="已完成" @active="handleActive"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <div class="">
        <mu-sub-header>人不能过得太安逸</mu-sub-header>
        <mu-content-block>
          现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。
        </mu-content-block>
      </div>
    </div>
    <div v-if="activeTab === 'tab2'">
      <h2>已完成</h2>
      <p>
        这是第二个 tab
      </p>
    </div>
    <div style="text-align: center;">
      <mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="确定"  secondary style="background-color: #2483e0;color: #fffdef;width: 100%;"/>
      <mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="取消"  secondary style="background-color: #ffffff;color: #000000;width: 100%;border: solid 1px #d8d8d8"/>
    </div>
    <!--弹出框-->
    <div>
      <mu-raised-button label="删除订单" @click="open"/>
      <mu-dialog :open="dialog" title="Dialog" @close="close">
        <div class="">
          <mu-sub-header>人不能过得太安逸</mu-sub-header>
          <mu-content-block>
            现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。现在得生活状态，决定着你以后得生活质量。
          </mu-content-block>
        </div>
        <mu-flat-button slot="actions" @click="close" primary label="取消"/>
        <mu-flat-button slot="actions" primary @click="close" label="删除"/>
      </mu-dialog>
    </div>
  </div>
</template>
<script>
  import _header from '@/components/header';
  export default {
    components:{
      _header
    },
    data () {
      return {
        activeTab: 'tab1',
        dialog:false
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        window.alert('tab active')
      },
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      }
    }
  }
</script>
