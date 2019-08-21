import ajax from './ajax'

// const prefix = 'http://m.you.163.com'

const prefix = '/api'
//发送请求获取评论列表
 export const reqComment = ({page,size}) => ajax({
   url:`${prefix}/topic/v1/find/recAuto.json`,
   params:{
    page,
    size
   }
 })
 

//关键字搜索
 export const reqSearch = (data) => ajax.get(
   `${prefix}/xhr/search/searchAutoComplete.json?keywordPrefix=${data}`
 )

 //发送请求获取商品导航列表
 export const reqCommodityNav = () => ajax('/mock/category')

//home组件的请求
 export const reqHomeList = () => ajax('/mock/home')

//搜索页默认显示
export const reqDefalut = ()=>ajax(`${prefix}/xhr/search/init.json`)

// reqDefalut().then(result=>{
//   console.log(result)
// })
//  reqComment({page:1,size:5}).then((result)=>{
//     console.log(result)
//  })
  
