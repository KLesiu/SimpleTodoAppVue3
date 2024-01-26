import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: Tasks
    },
    {
     path: '/addTask',
     name: 'addtask',
     component: AddTask
    }
    
  ]
})

export default router