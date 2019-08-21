import {GET_SEARCH_DATA,GET_DEFALUT_DATA} from '../mutations-type'

import {reqSearch,reqDefalut} from '../../api'


const state = {
  searchContent : [],
  defalutData : []
}

const mutations = {
  [GET_SEARCH_DATA] (state,searchContent){
    state.searchContent = searchContent
  },
  [GET_DEFALUT_DATA] (state,defalutData){
    state.defalutData = defalutData
  },
}

const actions = {
  async getSearch ({commit},data){
    let result = await reqSearch(data)
    // console.log(result.data)
    if(result.code==="200"){
      let searchContent = result.data
      commit(GET_SEARCH_DATA,searchContent)
    }
  },
  async getDefalut ({commit}){
    let result =await reqDefalut()
    if(result.code==="200"){
      let defalutData = result.data.hotKeywordVOList
      commit(GET_DEFALUT_DATA,defalutData)
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