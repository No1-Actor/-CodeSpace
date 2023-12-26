import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() { // 全局的data
    return {
      questionList: [],
      itemNum: 1, // 第几题
      answerId: [], // 存放选中的答案
    }
  },
  getters: { // computed
    rightAnswer(state) {
      let arr = []
      for(let question of state.questionList.length) {
        for(let answer of question.topic_answer) {
          if(answer.standard_answer == 1) {
            arr.push(answer.topic_answer_id)
          }
        }
      }
    }
  },
  mutations: { // methods 同步方式去修改数据源
    getQuestionList(state, list) {
      state.questionList = list      
    },
    recordAnswer(state, id) {
      state.answerId.push(id)
    },
    nextItem(state) {
      state.itemNum += 1
    },
  },
  actions: { // async methods
    getQuestionListAction(context) {
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri') 
      .then( res => {
        console.log(res);
        // 触发getQuestionList
        context.commit('getQuestionList', res.data)
      })
    },
    recordAnswerAction({commit, state}, id) {
      commit('recordAnswer', id)
      if(this.state.itemNum < this.state.questionList.length){
        commit('nextItem')
      }
    }
  },
  modules: {
  }
})
