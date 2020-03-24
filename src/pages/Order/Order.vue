<template>
    <div class="order">
       <HeaderTop title="订单列表"></HeaderTop>
       <div class="order_no_login">
           <img src="./images/person.png" alt="">
           <h3 class="order_tips">登陆后查看订单</h3>
           <button class="order_linkTo_login">立即登录</button>
       </div>
    </div>
</template>

<script>
//引入headerTop组件
import HeaderTop from '../../components/headerTop/headerTop'
export default {
    //将组件映射成标签
    components: {
        HeaderTop
    }
}
</script>
<style lang="stylus">
    .order
        .order_no_login
            padding-top 140px
            width 60%
            margin 0 auto 
            text-align center
            img
                display block
                width 100%
                height 30%
            .order_tips
                padding 10px 0
                font-size 17px
                color #6a6a6a
            .order_linkTo_login
                display inline-block
                background #02a774
                font-size 14px
                color #ffffff
                border 0
                outline none 
                border-radius 5px
                padding 10px 20px
</style>