<script lang="ts">
import { PropType,ref,Ref } from 'vue';
export default{
    props:{
        addTask:{
            type:Function as PropType<(title:string,body:string) => void>,
            required:true
        }
    },
    setup(props){
        const title:Ref<string> = ref("")
        const body:Ref<string> = ref("")
        function submit(){
            props.addTask(title.value,body.value)
            title.value=""
            body.value=""
        }
        return{
            title,
            body,
            submit
        }
        
        
    }

}
</script>

<template>
    <form class="w-[50%] ml-[25%] mr-[25%] flex flex-col text-white text-3xl text-center items-center mt-20">
        <h2 class="text-5xl border-b-2 w-[60%] p-2 mb-5">Add new task</h2>
        <label class="mb-5 mt-5 ">Title</label>
        <input v-model="title" class="w-[50%] text-black" type="text">
        <label class="mb-5 mt-5">Body</label>
        <input v-model="body" class="w-[50%] text-black" type="text">
        <button @click="submit" type="button" class="bg-gray-600 p-5 rounded-lg mt-10 hover:bg-gray-500">ADD</button>
    </form>
</template>