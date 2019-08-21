import {GET_HOMES_DATA} from '../mutations-type'

import {reqHomeList} from '../../api/index'
const state = {
  policyDescList:[],    //服务策略
  kingKongModule:{},    //商品导航
  Shopping:[],          //购物导航榜单
  personalShop:[],      //私人定制
  flashSaleModule:{},   //限时购
  newItemList:[],       //新品首发
  popularItemList:[],    //人气推荐
  topicList:[],         //专题精选
  zhongChouList:[],      //众筹
  categoryModule:[],    //展示列表
}

const mutations = {
  [GET_HOMES_DATA](state,{homeArr}){
    let {
      policyDescList,
      kingKongModule,
      Shopping,       
      personalShop,    
      flashSaleModule,  
      newItemList,
      popularItemList,   
      topicList,    
      zhongChouList,
      categoryModule  
    } = homeArr
    state.policyDescList = policyDescList
    state.kingKongModule = kingKongModule
    state.Shopping = Shopping
    state.personalShop = personalShop
    state.flashSaleModule = flashSaleModule
    state.newItemList = newItemList
    state.popularItemList = popularItemList
    state.topicList = topicList
    state.zhongChouList = zhongChouList
    state.categoryModule = categoryModule
  }

}

const actions = {
  async getHomeData({commit}){
    // const {policyDescList,}
    let result = await reqHomeList()
    // console.log(result.data)
    const homeArr = result.data
    commit(GET_HOMES_DATA,{homeArr})

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