<template>
    <div class="loginContainer">
        <div class="loginInner">
            <div class="login_header">
                <h2 class="login_logo">移动外卖</h2>
                <div class="login_header_title">
                    <a href="javascript:;" class="on">短信登录</a>
                    <a href="javascript:;">密码登录</a>
                </div>
            </div>
            <div class="login_content">
                <form action="#">
                    <div class="on">
                        <section class="login_message">
                            <input type="tel" maxlength="11" placeholder="手机号">
                            <button disabled="disabled" class="get_verification">获取验证码</button>
                        </section>
                        <section class="login_verification">
                            <input type="tel" maxlength="8" placeholder="验证码">
                        </section>
                        <section class="login_hint">
                            温馨提示：未注册移动外卖账号，登录时将自动注册，且代表已同意
                            <a href="javascript:;">《用户服务协议》</a>
                        </section>
                    </div>
                    <div>
                        <section class="login_message">
                            <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
                        </section>
                        <section class="login_verification">
                            <input type="tel" maxlength="8" placeholder="密码">
                            <div class="switch_button off">
                                <div class="switch_circle"></div>
                                <span class="switch_text">...</span>
                            </div>
                        </section>
                        <section class="login_message">
                            <input type="tel" maxlength="11" placeholder="验证码">
                            <img src="./images/captcha.svg" alt="" class="get_verification">
                        </section>
                    </div>
                    <button class="login_submit">登录</button>
                </form>
            </div>
            <a href="javascript:;" class="goback" @click="$router.back()">
                <i class="iconfont icon-arrow-left"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
    .loginContainer
        width 100%
        height 100%
        background #ffffff
        .loginInner
            padding-top 60px
            width 80%
            margin 0 auto 
            .login_header
                .login_logo
                    font-size 40px
                    font-weight bold
                    color #02a774
                    text-align center
                .login_header_title
                    padding-top 40px
                    text-align center
                    >a
                        color #333
                        font-size 14px
                        padding-bottom 4px
                        &:first-child
                            margin-right 40px
                        &.on
                            color #02a774
                            font-weight 700
                            border-bottom 2px solid #02a774
            .login_content
                >form
                    div
                        display none 
                        &.on
                            display block
                        input
                            width 100%
                            height 100%
                            padding-left 10px
                            box-sizing border-box
                            border 1px solid #dddddd
                            border-radius 4px
                            outline none 
                            font 400 14px Arial
                            &:focus
                                border 1px solid #02a774
                        .login_message
                            position relative
                            margin-top 16px
                            height 48px
                            font-size 14px
                            background #ffffff
                            .get_verification
                                position absolute 
                                top 50%
                                right 10px
                                transform translateY(-50%)
                                border 0
                                color #cccccc
                                font-size 14px
                                background transparent
                        .login_verification
                            position relative
                            margin-top 16px
                            height 48px
                            font-size 14px
                            backgorund #ffffff
                            .switch_button
                                display block
                                font-size 12px
                                border 1px solid #dddddd
                                border-radius 8px
                                transition background-color .3s, border-color .3s
                                padding 0 6px
                                width 30px
                                height 16px
                                line-height 16px
                                color #ffffff
                                position absolute 
                                top 50%
                                right 10px
                                transform translateY(-50%)
                                &.off
                                    background #ffffff
                                    .switch_text
                                        float right
                                        color #dddddd
                                &.on
                                    bacgkround #02a774
                                >.switch_circle
                                    display block
                                    position absolute 
                                    top -1px
                                    left -1px
                                    width 16px
                                    height 16px
                                    border 1px solid #dddddd
                                    border-radius 50%
                                    background #ffffff
                                    box-shadow 0 2px 4px rgba(0, 0, 0, .1)
                                    transition transform .3s
                        .login_hint
                            margin-top 12px
                            color #999
                            font-size 14px
                            line-height 20px
                            >a
                                color #02a774
                    .login_submit
                        display block
                        width 100%
                        height 42px
                        margin-top 30px
                        border-radius 4px
                        background #4cd96f
                        color #ffffff
                        text-align center
                        font-size 16px
                        line-height 42px
                        border 0
            .goback
                position absolute 
                top 5px
                left 5px
                width 30px
                height 30px
                >.iconfont
                    font-size 25px
                    color #999

</style>