import {GET_CATEGORY_DATA,GET_COMMENT_DATA} from '../mutations-type'

import {reqCommodityNav,reqComment} from '../../api/index'


const state = {
  categoryArr : [],
  atIndex:0,
  commentArr : [],
  page:1,
  size:5,
}

const mutations = {
  [GET_CATEGORY_DATA] (state, {categoryArr}) {
    state.categoryArr = categoryArr    // mutation直接操作状态
  },
  [GET_COMMENT_DATA] (state, {commentArr}) {
    state.commentArr = commentArr    // mutation直接操作状态
  }
}

const actions = {
 async getCategoryData ({commit}){
    
    let result = await reqCommodityNav()

    const categoryArr = result.data.categoryL1List
    console.log('请求先')
    if(result.code===0){
      commit(GET_CATEGORY_DATA,{categoryArr})
    }
  },

  async getComment ({commit,state}){
    let {page,size} = state
    // console.log(page,size)
    let result = await reqComment({page,size})
    // console.log(result)
    const commentArr = result.data.result
    // console.log(commentArr)
    if(result.code==="200"){
      commit(GET_COMMENT_DATA,{commentArr})
    }
  }
}

const getters = {
  
}


export default {
  state,
  actions,
  mutations,
  getters
}