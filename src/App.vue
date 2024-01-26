<script lang="ts">
import HeaderApp from './components/HeaderApp.vue';
import NavApp from './components/NavApp.vue';
import {computed,ComputedRef, ref,Ref } from 'vue';
export interface Task{
    title:string,
    body:string,
    completed:boolean,
    id:number
}

export default{
    setup(){
      const tasksData:Ref<Task[]>=ref([])
      const tasks:ComputedRef<Task[]>=computed(()=> tasksData.value)
      
        function addTask(title:string,body:string):void{
            const task:Task = {
                title: title,
                body: body,
                completed:false,
                id: Math.floor(Math.random()*10000)
            }
            tasksData.value.push(task)
            alert("Added!")
        }
        function toggleCompleted(id:number):void{
            const currentTask = tasksData.value.find(task=>task.id===id)
            currentTask!.completed=!currentTask?.completed
        }
        function deleteTask(id:number):void{
            const currentTaskIndex = tasksData.value.findIndex(task=>task.id===id)
            tasksData.value.splice(currentTaskIndex,1)

        }
        return {tasks,addTask,toggleCompleted,deleteTask}
    },
    components:{
        HeaderApp,
        NavApp
    },

}
</script>

<template>
    <main class="w-screen h-screen bg-black flex flex-col items-center flex-wrap">
        <HeaderApp/>
        <NavApp />
        <RouterView :tasks="tasks" :addTask="addTask" :toggleCompleted="toggleCompleted" :deleteTask="deleteTask"/>
    </main>
    
</template>