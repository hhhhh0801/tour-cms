import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'

import BookList from '@/components/book/list'
import BookCategoryList from '@/components/bookcategory/list'

import UserList from '@/components/user/list'
import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'



import Spot from '@/components/spot'


// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
// mode: 'history',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/spot',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        // {path: '/dashboard', component: Dashboard, name: '景点管理', menuShow: true}
        {path: '/spot', component: Spot, name: '景点管理', menuShow: true}


      ]
    },
    // {
    //   path: '/',
    //   component: Home,
    //   name: '景点管理',
    //   menuShow: true,
    //   leaf: true, // 只有一个节点
    //   iconCls: 'iconfont icon-users', // 图标样式class
    //   children: [
    //     {path: '/user/list', component: UserList, name: '用户列表', menuShow: true}
    //   ]
    // },
    {
      path: '/',
      component: Home,
      name: '线路管理',
      menuShow: true,
      leaf: true, // 只有一个节点

      iconCls: 'iconfont icon-books',
      children: [
        {path: '/book/list', component: BookList, name: '线路管理', menuShow: true},
        // {path: '/book/category', component: BookCategoryList, name: '图书分类', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导游管理',
      leaf: true, // 只有一个节点

      menuShow: true,
      iconCls: 'iconfont icon-setting1',
      children: [
        {path: '/user/profile', component: UserProfile, name: '导游管理', menuShow: true},
        // {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // console.log('to:' + to.path)
//   if (to.path.startsWith('/login')) {
//     window.localStorage.removeItem('access-user')
//     next()
//   } else {
//     let user = JSON.parse(window.localStorage.getItem('access-user'))
//     if (!user) {
//       next({path: '/login'})
//     } else {
//       next()
//     }
//   }
// })

export default router
