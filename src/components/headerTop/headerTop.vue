<template>
    <header class="msite_header">
        <slot name="left"></slot>
        <span class="header_title_text ellipsis">{{title}}</span>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    
    props: {
        title: String
    }
}
</script>

<style lang="stylus">
.msite_header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        heigth 50%
        .icon-search
            font-size 25px
            color #ffffff
    .header_title_text
        position absolute 
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #ffffff
        text-align center
        font-size 20px
        color #ffffff
    .header_login
        font-size 14px
        color #ffffff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
            color #ffffff
</style>