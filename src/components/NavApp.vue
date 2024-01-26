<script lang="ts">
export default{
    setup(){}
}
</script>

<template>
    <nav class="w-full h-16">
        <RouterLink to="/addTask"><button class="bg-green-500 p-3 rounded-lg text-xl font-semibold ml-10">Add task</button></RouterLink>
        <RouterLink to="/"><button class="bg-blue-500 p-3 rounded-lg text-xl font-semibold ml-10">Tasks</button></RouterLink>
    </nav>
</template>