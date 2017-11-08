export default{
  install(Vue,options)
  {
    Vue.prototype.loGOBack = function () {
      console.log('返回android')
      window.history.back()
    }
  }
}
