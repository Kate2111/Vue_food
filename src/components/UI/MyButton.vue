<template>
    <a class="button" 
        :href= href 
        target="_blank"
    >
        <slot></slot>
    </a>
</template>

<script>

export default{
    name: 'my-button',
     props: {
        href: String
     }
}
</script>

<style  scoped>

.button{
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 10px;
    box-shadow: 1px 1px 3px grey;
}
  
.button:hover{
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.3);
  
}

</style>