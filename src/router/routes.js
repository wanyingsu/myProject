import Home from '../pages/home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Discover from '../pages/discover/Discover.vue'
import ShopCart from '../pages/shopCart/ShopCart.vue'
import Personal from '../pages/personal/Personal.vue'

import Comment from '../pages/comment/Comment.vue'
import Bask from '../pages/bask/Bask.vue'

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
]