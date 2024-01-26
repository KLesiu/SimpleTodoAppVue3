<script lang="ts">
import { Task } from '../App.vue';
import {PropType} from 'vue';
import SingleTask from './SingleTask.vue';


    export default{
    props: {
        tasks: {
            type: Object as PropType<Task[]>,
            default: () => { }
        },
        toggleCompleted:{
            type: Function as PropType<(id:number) => void>,
            required:true

        },
        deleteTask:{
            type: Function as PropType<(id:number)=>void>,
            required:true
        }
    },
    setup(props) {
        const tasksArray = props.tasks;
        return { tasksArray };
    },
    components: { SingleTask }
}
</script>
<template>
    <h2 class="text-white text-4xl w-full text-center mb-2">List of Tasks</h2>
    <h3 class="text-white">Number of tasks:  <strong>{{tasksArray.length}}</strong></h3>
    <section class="w-4/5 h-3/4 border-2 rounded-2xl p-2 flex flex-wrap gap-x-2">
        <SingleTask v-for="({title,body,completed,id},index) in $props.tasks " :key="index" :title="title" :body="body" :completed="completed" :id="id" :toggleCompleted="$props.toggleCompleted" :deleteTask="$props.deleteTask" />
        
    </section>
</template>