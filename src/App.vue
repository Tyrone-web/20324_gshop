
<template>
    <div id="app">
        <router-view></router-view>
        <footer-guide></footer-guide>
    </div>
</template>

<script>
//引入底部组件
import  FooterGuide from './components/FooterGuite/FooterGuide.vue';

export default {
    //将底部组件映射成标签
    components: {
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>