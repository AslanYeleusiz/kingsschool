<template>
    <button class="btn my_btn">
        <ex />
    </button>
</template>


<script>
    import ex from '@/components/svg/ex.vue'

    export default {
        components: {
            ex
        }
    }

</script>


<style scoped lang="scss">
    .my_btn{
        padding: 5px;
        svg{
            fill: #909090;
            transition: 0.2s;
        }
        &:hover{svg{fill: #0045CB;}}
        &:active{svg{fill: #0037A1;}}

    }
</style>
