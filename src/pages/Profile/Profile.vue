<template>
    <div class="profile">
        <HeaderTop title="我的"></HeaderTop>
        <div class="profile_number">
            <router-link to="Login" class="profile-link">
                <div class="profle_iamge">
                    <i class="iconfont icon-icon_geren"></i>
                </div>
                <div class="user-info">
                    <p class="user-info-top">登录/注册</p>
                    <p>
                        <span class="user-icon">
                            <i class="iconfont icon-shouji icon-icon_mobile"></i>
                        </span>
                        <span class="icon-mobile-number">暂无绑定手机号</span>
                    </p>
                </div>
                <span class="arrow">
                    <span class="iconfont icon-icon-arrow-right"></span>
                </span>
            </router-link>
        </div>
        <div class="profile_info_data">
            <ul class="info_data_list">
                <li class="info_data_item">
                    <a href="javascript:;" class="info_data_link">
                        <span class="info_data_top">0.00<span class="unit">元</span></span>
                        <span class="info_data_bottom">我的余额</span>
                    </a>
                </li>
                <li class="info_data_item">
                    <a href="javascript:;" class="info_data_link two">
                        <span class="info_data_top">0<span class="unit">个</span></span>
                        <span class="info_data_bottom">我的优惠</span>
                    </a>
                </li>
                <li class="info_data_item">
                    <a href="javascript:;" class="info_data_link three">
                        <span class="info_data_top">0<span class="unit">分</span></span>
                        <span class="info_data_bottom">我的积分</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="profile_my_order">
            <a href="javascript:;" class="my_order">
                <span>
                    <i class="iconfont icon-icon_order"></i>
                </span>
                <div class="my_order_div">
                    <span>我的订单</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-icon-arrow-right"></i>
                    </span>
                </div>
            </a>
            <a href="javascript:;" class="my_order">
                <span>
                    <i class="iconfont icon-icon-jifen"></i>
                </span>
                <div class="my_order_div">
                    <span>积分商城</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-icon-arrow-right"></i>
                    </span>
                </div>
            </a>
            <a href="javascript:;" class="my_order">
                <span>
                    <i class="iconfont icon-icon_vip"></i>
                </span>
                <div class="my_order_div">
                    <span>美团外卖会员卡</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-icon-arrow-right"></i>
                    </span>
                </div>
            </a>
        </div>
        <div class="profile_my_order">
            <a href="javascript:;" class="my_order">
                <span>
                    <i class="iconfont icon-build"></i>
                </span>
                <div class="my_order_div">
                    <span>服务中心</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-icon-arrow-right"></i>
                    </span>
                </div>
            </a>
        </div>
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
    .profile
        width 100%
        .profile_number
            margin-top 45.5px      
            height 100px                            
            .profile-link
                position relative
                display block
                height 100%
                box-sizing border-box
                background-color #02a774
                padding 20px 10px
                .profle_iamge
                    float left 
                    border-radius 50%
                    overflow hidden
                    vertical-align top
                    .icon-icon_geren
                        background-color #666
                        font-size 62px
                        color #e4e4e4
                .user-info
                    float left 
                    margin-top 8px
                    margin-left 15px
                    p
                        font-weight 700
                        font-size 18px
                        color #ffffff
                        margin-bottom 10px
                    &.user-info-top
                        padding-bottom 8px
                    .user-icon
                        display inline-block
                        margin-left -5px  
                        margin-right -5px                                            
                        width 20px
                        height 20px
                        line-height 20px
                        .icon-icon_mobile
                            margin-top 3px  
                            font-size 20px
                            vertical-align text-top
                    .icon-mobile-number
                        font-size 14px
                        color #ffffff
                .arrow
                    width 12px
                    height 12px
                    position absolute 
                    right 15px
                    top 40%
                    .icon-icon-arrow-right
                        color #ffffff
                        font-size 5px
        .profile_info_data
           bottom-border-1px(#e4e4e4) 
           width 100%
           background-color #ffffff
           overflow hidden
           .info_data_list
                clearFix()
                .info_data_item
                    .info_data_link
                        float left
                        width 33% 
                        text-align center
                        border-right 1px solid #f1f1f1
                        .info_data_top
                            display block
                            width 100%
                            font-size 14px
                            color #333
                            padding 15px 15px 10px
                            font-size 30px
                            color #ff9900
                            font-weight 700
                            line-height 30px
                            .unit
                                font-size 12px
                                color #999
                        .info_data_bottom
                            font-size 14px
                            color #666666
                            font-weight 400
                            padding-bottom 10px
                        &.two
                            .info_data_top
                                color #ff5f3e
                        &.three
                            border none 
                            .info_data_top
                                color #6ac20b
        .profile_my_order
            top-border-1px(#e4e4e4)
            margin-top 10px
            background-color #ffffff
            .my_order
                display flex
                align-items center
                padding-left 15px
                >span 
                    display flex
                    align-items center
                    width 20px
                    height 20px
                    font-size 30px
                    .icon-icon_order
                        color #02a774
                    .icon-icon-jifen
                        color #ff5f3e
                    .icon-icon_vip
                        color #ff9900
                    .icon-build
                        color #02a774
                .my_order_div
                    width 100%
                    border-bottom 1px solid #f1f1f1
                    padding 18px 10px 18px 5px
                    font-size 16px
                    color #333333
                    display flex
                    justify-content space-between
                    span 
                        display inline-block
                    .my_order_icon
                        float right
                        width 10px
                        height 10px
                        .icon-icon-arrow-right
                            color #bbbbbb
                            font-size 10px
</style>