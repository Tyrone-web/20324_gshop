<template>
    <div class="msite">
        <!-- 首页头部 -->
       <HeaderTop title="重庆市巴南区重庆理工大学（花溪校区）">
            <span class="header_search" slot="left">
               <i class="iconfont icon-search"></i>
           </span>
           <span class="header_login" slot="right">
               <span class="header_login_text">登录|注册</span>
           </span>
       </HeaderTop>
       <!-- 首页导航 -->
       <nav class="msite_nav">
           <div class="swiper-container">
               <div class="swiper-wrapper">
                   <div class="swiper-slide">
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/1.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/2.jpg" alt="">
                           </div>
                           <span>超市便利</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/3.jpg" alt="">
                           </div>
                           <span>美食</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/4.jpg" alt="">
                           </div>
                           <span>简餐</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/5.jpg" alt="">
                           </div>
                           <span>新店特惠</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/6.jpg" alt="">
                           </div>
                           <span>准时到达</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/7.jpg" alt="">
                           </div>
                           <span>预定早餐</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/8.jpg" alt="">
                           </div>
                           <span>土豪推荐</span>
                       </a>
                   </div>
                   <div class="swiper-slide">
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/1.jpg" alt="">
                           </div>
                           <span>甜品饮品</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/2.jpg" alt="">
                           </div>
                           <span>超市便利</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/3.jpg" alt="">
                           </div>
                           <span>美食</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/4.jpg" alt="">
                           </div>
                           <span>简餐</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/5.jpg" alt="">
                           </div>
                           <span>新店特惠</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/6.jpg" alt="">
                           </div>
                           <span>准时到达</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/7.jpg" alt="">
                           </div>
                           <span>预定早餐</span>
                       </a>
                       <a href="javascript:;" class="link_to_food">
                           <div class="food_container">
                               <img src="./images/nav/8.jpg" alt="">
                           </div>
                           <span>土豪推荐</span>
                       </a>
                   </div>
               </div>
               <!-- 分页器 -->
              <div class="swiper-pagination"></div>
           </div>
       </nav>
       <!-- 首页商家列表 -->
       <div class="msite_shop_list">
           <div class="shop_header">
               <i class="iconfont icon-liebiao1"></i>         
               <span class="shop_header_title">附近商家</span>
           </div>
           <ShopList></ShopList>
       </div>
    </div>
</template>

<script>
//引入swiper库
import swiper from 'swiper'
import 'swiper/css/swiper.min.css'

//引入headerTop组件
import HeaderTop from '../../components/headerTop/headerTop'
//引入shopList组件
import ShopList from '../../components/shopList/shopList'

export default {
    mounted() {
        //创建一个swiper对象实现轮播
        new swiper('.swiper-container', {
            loop: true, //循环轮播
            //分页器
            pagination: {
                el: '.swiper-pagination'
            }
        });
    },
    //将组件映射成标签
    components: {
        HeaderTop,
        ShopList
    }
}
</script>
<style lang="stylus">
 @import '../../common/stylus/mixins.styl'
    .msite
        width 100%
        .msite_nav
            // bottom-border-1px(#f00)
            margin-top 45px
            height 200px
            background #ffffff
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                    width 100%
                    height 100%
                    .swiper-slide
                        display flex
                        justify-content center
                        align-items flex-start
                        flex-wrap wrap
                        height 100%
                        .link_to_food
                            width 25%
                            .food_container
                                display block
                                width 100%
                                text-align center
                                padding-bottom 10px                
                                font-size 0
                                img 
                                    display inline-block
                                    width 50px
                                    height 50px
                            span 
                                display block
                                width 100%
                                text-align center
                                font-size 14px
                                color #666
        .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
                padding 10px 10px 0 10px
                .iconfont
                    margin-left 3px
                    font-size 12px
                    color #666
                .shop_header_title
                    color #999
                    font-size 14px
                    line-height 20px
</style>