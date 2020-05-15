//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todoList: ['a', 'b', 'c'],
    aaa: ''
  },
  add: function() {
    let tt = this.data.todoList
    tt.push(this.data.aaa)
    this.setData({
      todoList: tt
    })
  },
  bindinput: function(e) {
    this.setData({
      aaa: e.detail.value
    })
  }
})