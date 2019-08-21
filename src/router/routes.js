import Home from '../pages/home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Discover from '../pages/discover/Discover.vue'
import ShopCart from '../pages/shopCart/ShopCart.vue'
import Personal from '../pages/personal/Personal.vue'
import PhoneLogin from '../pages/personal/phoneLogin/PhoneLogin.vue'
import EmailLogin from '../pages/personal/emailLogin/EmailLogin.vue'
import FastLogin from '../components/FastLogin/FastLogin.vue'
import Comment from '../pages/comment/Comment.vue'
import Bask from '../pages/bask/Bask.vue'
import Search from '../pages/home/search/Search.vue'

export default [
  {
   path:'/home',
   component:Home
  },
  {
    path:'/classify',
    component:Classify
   },
   {
    path:'/discover',
    component:Discover,
    children:[
      {
        path:'/discover/comment',
        component:Comment
      },
      {
        path:'/discover/bask',
        component:Bask
      },
      {
        path:'',
        redirect:'/discover/comment'
    },
    ]
   },
   {
    path:'/shopCart',
    component:ShopCart
   },
   {
    path:'/personal',
    component:Personal
   },
   {
    path:'/search',
    component:Search
   },
   {
    path:'/phonelogin',
    component:PhoneLogin
   },
   {
    path:'/emaillogin',
    component:EmailLogin
   },
   {
    path:'/fastlogin',
    component:FastLogin
   },
]