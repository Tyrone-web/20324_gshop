<template>
    <div class="search">
        <HeaderTop title="搜索"></HeaderTop>
        <form action="#" class="search_form">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" autofocus>
            <input type="submit" class="search_submit">
        </form>
    </div>
</template>

<script>
//映入headerTop组件
import HeaderTop from '../../components/headerTop/headerTop'
export default {
    //将组件映射成标签
    components: {
        HeaderTop
    }
}
</script>
<style lang="stylus">
    .search
        width 100%
        height 100%
        .search_form
            clearFix()
            margin-top 45px
            background-color #ffffff
            padding 12px 8px
            input
                height 35px
                padding 0 4px
                border-radius 2px
                font-weight bold
                outline none 
                &.search_input
                    float left
                    width 79%
                    border 4px solid  #f2f2f2
                    font-size 14px
                    color #333333
                    background-color #f2f2f2
                &.search_submit
                    float right
                    width 18%
                    border 4px solid #02a774
                    font-size 16px
                    color #ffffff
                    background-color #02a774
</style>