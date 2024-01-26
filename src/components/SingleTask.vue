<script lang="ts">
import {PropType,ref,Ref} from 'vue'
export default{
    props:{
       title:{
        type:String,
        required:true
       } ,
       body:{
        type:String,
        required:true
       },
       completed:{
        type:Boolean,
        required:true
       },
       id:{
        type:Number,
        required:true
       },
       toggleCompleted:{
        type: Function as PropType<(id:number) => void>,
        required:true
       },
       deleteTask:{
        type:Function as PropType<(id:number)=>void>,
        required:true
       }
       
    },
    setup(props){
        const completed:Ref<boolean> = ref(props.completed)
        function handleChange(){
            completed.value=!completed.value
            props.toggleCompleted(props.id)
        }
        return {completed,handleChange}
    }
}
</script>


<template>
    <div  class="flex w-1/6 flex-col items-center border-4 text-white rounded-xl p-2 h-1/4 ">
        <h3 class="font-semibold">Title: {{ $props.title }}</h3>
        <p>Body: {{ $props.body }}</p>
        <button @click="handleChange" class="bg-green-600 p-1 rounded-xl mt-2" v-if="!completed">Completed</button>
        <button @click="handleChange" class="bg-red-600 p-1 rounded-xl mt-2" v-else>Uncompleted</button>
        <button class="bg-blue-400 p-1 rounded-xl mt-2" @click="$props.deleteTask($props.id)">Delete</button>
    </div>
</template>

