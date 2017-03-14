import Vue from 'vue'
import Vuex from 'vuex'
import { ADDPROPERTY } from './mutation-types'

Vue.use(Vuex)

let addNumberFun = function (addNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(addNumber)
    }, 2000)
  })
}

// 创建一个Vuex Store
export default new Vuex.Store({
  state: {
    count: 0,
    posts: [
      {id: 1, title: '第一篇文章'},
      {id: 2, title: '第二篇文章'},
      {id: 3, title: '第三篇文章'},
      {id: 4, title: '第四篇文章'},
      {id: 5, title: '第五篇文章'},
      {id: 6, title: '第六篇文章'}
    ],
    currentPost: {author: 'ken'},
    msg: '',
    number: 0
  },
  getters: {
    getPostCount: state => {
      return state.posts.length
    },
    getRandomPost: state => {
      return state.posts[Math.floor(Math.random() * state.posts.length)]
    },
    // 带参数
    getPostById: (state, getters) => (id) => {
      if (id) {
        return state.posts.find(post => post.id === parseInt(id))
      }
    }
  },
  mutations: {
    // Mutation只能同步执行，不可异步
    increment: state => state.count++,
    decrement: state => state.count--,
    insertPost (state, title) {
      if (title) {
        state.posts.push({
          id: state.posts[state.posts.length - 1].id + 1,
          title: title
        })
      }
    },
    insertObjPost (state, post) {
      if (typeof (post) && post.id && post.title) {
        state.posts.push(post)
      }
    },
    addProperty (state, post) {
      // 第一种方法
      Vue.set(state.currentPost, 'id', post.id)
      // 第二种方法
      state.currentPost = {...state.currentPost, title: post.title}
      console.log(state.currentPost)
    },
    [ADDPROPERTY] (state, post) {
      // 第一种方法
      Vue.set(state.currentPost, 'id', post.id)
      // 第二种方法
      state.currentPost = {...state.currentPost, title: post.title}
      console.log(state.currentPost)
    },
    updateMsg (state, msg) {
      state.msg = msg
    },
    addOne (state) {
      state.number++
    },
    addTen (state) {
      state.number += 10
    },
    addNumber (state, addNumber) {
      state.number += addNumber
    }
  },
  actions: {
    // 注册action方法一
    incrementAction (context) {
      context.commit('increment')
    },
    // 或方法二(ES6的代码解构)
    decrementAction ({commit}) {
      commit('decrement')
    },
    // 异步（Mutation只能同步执行，Action不受限制，可以异步）
    incrementAsync ({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    decrementAsync ({commit}) {
      setTimeout(() => {
        commit('decrement')
      }, 1000)
    },
    insertPostAction ({commit}, {title}) {
      console.log(title)
      commit('insertPost', title)
    },
    insertObjPostAction ({commit}, {id, title}) {
      commit('insertObjPost', {
        id: id,
        title: title
      })
    },
    insertPostShowMsgAction ({commit}, {title}) {
      commit('insertPost', title)
      commit('updateMsg', '文章插入成功')
    },
    addOneAsyncAction ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('addOne')
          resolve()
        }, 2000)
      })
    },
    addElevenAsyncAction ({dispatch, commit}) {
      return dispatch('addOneAsyncAction').then(() => {
        commit('addTen')
      })
    },
    // 使用async / await
    async addOneAsyncAction2 ({ commit }) {
      commit('addNumber', await addNumberFun(1))
    },
    async addElevenAsyncAction2 ({ dispatch, commit }) {
      await dispatch('addOneAsyncAction2')
      commit('addNumber', await addNumberFun(10))
    }
  }
})
