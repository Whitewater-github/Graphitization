import Vue from 'vue'
import VueRouter from 'vue-router'
//引入
import Form from '../views/Form.vue'//石墨化报表
import Press from '../views/Press.vue'//压型看板
import Graying from '../views/Graying.vue'//石墨化看板

Vue.use(VueRouter)

const routes =[
      { path:'/',component :Form},//石墨化报表
      { path:'/press',component :Press},//压型看板
      { path:'/graying',component :Graying},//石墨化看板
 ]
 
 const router = new VueRouter({
       routes
 })

 export default router