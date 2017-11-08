<template>
  <div class="bg">
    <_header></_header>
    <div style="margin-top: .6rem;padding: .1rem;background-color: #ffffff">
      <div class="logic" >
        <div><span>所在城市</span></div>
        <div><mu-flat-button :label="defaultCity" @click="cityClick" class="w100"></mu-flat-button></div>
      </div>
      <div class="logic" >
        <div><span class="fontSizes centerClass">用床地址</span><mu-flat-button :label="defaultAdress" labelClass="leftClass" @click="cityClick" class="w100"></mu-flat-button></div>
        <div><span class="fontSizes centerClass">还床地址</span><mu-flat-button :label="defaultAdress" labelClass="leftClass" @click="cityClick" class="w100"></mu-flat-button></div>
      </div>
      <div class="logic3">
        <div><span class="fontSizes">用床时间</span><mu-date-picker container="dialog" :fullWidth="fullW" hintText="开始时间" hintTextClass="hintClass" ></mu-date-picker></div>
        <div class="centerClass">1天</div>
        <div><span class="fontSizes">还床时间</span><mu-date-picker container="inline" :fullWidth="fullW" hintText="结束时间" hintTextClass="hintClass"></mu-date-picker></div>
      </div>
    </div>
    <div style="text-align: center;">
      <mu-flat-button  slot="left" class="demo-flat-button" labelPosition="before" label="去选床"  secondary style="background-color: #2483e0;color: #fffdef;width: 100%;"/>
    </div>
    <picker v-model="visible" :data-items="items" @change="onValuesChange">
      <div class="top-content" slot="top-content"></div>
      <div class="bottom-content" slot="bottom-content"></div>
    </picker>
  </div>
</template>
<script>
  import Vue from 'vue'
  import _header from '@/components/header';
  import MuPicker from "../../../node_modules/muse-ui/src/picker/picker.vue";
  import picker from 'vue-3d-picker';
  import MuFlatButton from "../../../node_modules/muse-ui/src/flatButton/flatButton.vue";
  import MuDatePicker from "../../../node_modules/muse-ui/src/datePicker/datePicker.vue";

  Vue.component(picker.name, picker);
  export default {

    components:{
      MuDatePicker,
      MuFlatButton,
      MuPicker,
      _header
    },
    methods: {
      onValuesChange(result1, result2) {
        console.log(result1, result2);
      },
      cityClick(){
        this.visible = true;
      }
    },
    data(){
      return{
        slo:[
          {divider:'-'},
          {content:'111'},
          {values:[{北京:['1',2,3,4]},{北京:['1',2,3,4]}]},
        {width:100},
        {textAlign:'left'}
        ],
        val:[1],
        visible: false,
        items: [
          {
            values: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'],
          }, {
            values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          }
        ],
        mod:true,
        defaultCity:'请选择城市',
        defaultAdress:'店地址',
        fullW:true
      }

    }

  }
</script>
<style scoped>
  .logic{
    display: -moz-box;
    display: -webkit-box;
    display: box;
    border-bottom: 1px solid #e0d0d0;
  }
  .logic div:first-child{display: block;width: 50%;padding-right: .1rem;}
  .logic div:nth-child(2){display: block;width:50%;}
  .logic3{
    display: -moz-box;
    display: -webkit-box;
    display: box;
    /*border-bottom: 1px solid #e0d0d0;*/
    background-color: #ffffff;
  }
  .logic3 div:first-child{display: block;width: 25%;padding-right: .1rem;}
  .logic3 div:nth-child(2){display: block;width:50%;}
  .logic3 div:nth-child(3){display: block;width:25%;}

  span{
    line-height: .25rem;
  }
  .w100{
    width: 100%;
  }
  .bg{
    background-color: #d8d8d8;
  }
  .fontSizes{
    display: block;
    font-size: 12px;
    color: #d8d8d8;
  }
  .leftClass{
    text-align: left;
  }
  .centerClass{
    text-align: center;
  }
  .mu-date-picker{
    width: 100% !important;
  }
  .mu-dialog{
    width:80% !important;
  }
  .hintClass{
    font-size: 12px;
    color: #3E3D32;
  }
  .mu-dialog-wrapper > mu-dialog{
    width: 80% !important;
  }
</style>
