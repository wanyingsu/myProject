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

 //发送请求获取商品导航列表
 export const reqCommodityNav = () => ajax('/mock/category')

//  reqCommodityNav().then((result)=>{
//     console.log(result)
//  })


//home组件的请求
 export const reqHomeList = ( ) => ajax('/mock/home')

 reqComment({page:1,size:5}).then((result)=>{
    console.log(result)
 })
  
