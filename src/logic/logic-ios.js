export default{
  install(Vue,options)
  {
    Vue.prototype.loGOBack = function () {
      console.log('返回ios')
      window.history.back()
    }
  }
}

