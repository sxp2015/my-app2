/**
 * JS基础处理框架
 *
 * @company: iqweb
 * @author: jack
 * @timer: 2019-05-016
 */


var IqwXiongJs = {
    Width: $(window).width(),
    Height: $(window).height(),
    //banner切换效果
    SwiperFadeIn: 'fade',
    EventKey: 'click',
    indexBanner: null,
    scrollTop: null,
    WowJsAnimation: null,
    HeaderTrue: false,
    //banner自动切换
    SwiperAuto: true,
    imgLoad: [],
    AllImgLoad: [],
    AllImgFalse: [],
    //动画时间和切换时间
    AnimateTime: 500,
    SwitchTime: 3000,
    //banner循环播放
    SwiperLoop: 'loop',
    //移动1.5,电脑3
    SwiperN: 3,
    //导航判断
    IfNav: false,
    //头部高度
    headerH: 110,
    //banner文字效果
    bannerAnimation: 'fadeInLeft2',
    //数字滚动判断
    NumberIf: true,
    //锚点距离
    maoNumber: 0,
    //有锚点才吸顶
    maoTop: false,
    //swiper居中
    centerSwiper: false,
    //自由加入
    NewsTab: null,
    ServiceSwiper: null,
    advantageG: null,
    fzAbout: null,
    honorAbout: null,
    swiperNumber: 4,
    navSetH :0,
    //EventKey: "ontouchstart" in document.documentElement ? "touchstart" : "click",
    Init: function () {
        var that = this;
        that.AddEventList();
    },
    //banner
    BannerSwiper: function () {
        this.indexBanner = new Swiper('.banner-box', {
            effect: this.SwiperFadeIn,
            loop: this.SwiperLoop,
            autoplay:true,
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.banner-box .swiper-pagination',
                clickable: true,
            },
            loopedSlides: document.querySelectorAll('.swiper-slide').length,
            on: {
                init: function () {
                    $('.swiper-text-box .swiper-animation').removeClass('fadeInLeft2');
                    $('.swiper-text-box1 .swiper-animation').addClass('fadeInLeft2');
                },
                slideChangeTransitionEnd: function () {
                    if (this.activeIndex == (this.loopedSlides - 1)) {
                        $('.swiper-slide .swiper-text-box .swiper-animation').removeClass('fadeInLeft2');
                        $('.swiper-text-box' + this.loopedSlides + ' .swiper-animation').addClass('fadeInLeft2');
                    }
                    if (this.activeIndex == (this.loopedSlides * 2)) {
                        $('.swiper-slide .swiper-text-box .swiper-animation').removeClass('fadeInLeft2');
                        $('.swiper-text-box1 .swiper-animation').addClass('fadeInLeft2');
                    }
                    for (var i = 0; i < this.loopedSlides; i++) {
                        if ((this.activeIndex - this.loopedSlides) == i) {
                            $('.swiper-slide .swiper-text-box .swiper-animation').removeClass('fadeInLeft2');
                            $('.swiper-text-box' + (i + 1) + ' .swiper-animation').addClass('fadeInLeft2');
                            break;
                        }
                    }
                },
            },
        });
    },
    //获取TOP
    NavScroll: function () {
        var that = this;
        that.scrollTop = $(window).scrollTop();
        that.NavScrollTop();
        $(window).scroll(function () {
            that.NavScrollTop();
        });
    },
    //判断top值
    NavScrollTop: function () {
        var that = this;
        that.scrollTop = $(window).scrollTop();
        //大于导航的高度
        if (that.scrollTop > 85) {
            $('.header-wrap').addClass('header-wrap2');
            if (that.Width > 1200) {
                $('.advantage-wrap').addClass('advantage-wrap2');
                $('.banner-box .swiper-pagination-bullets').addClass('advantage-wrap2');
            }
        } else {
            $('.header-wrap').removeClass('header-wrap2');
            if (that.Width > 1200) {
                $('.advantage-wrap').removeClass('advantage-wrap2');
                $('.banner-box .swiper-pagination-bullets').removeClass('advantage-wrap2');
            }
        }
        if (that.Width > 1200) {
            if (that.scrollTop > $('.read-banner-wrap').height()) {
                $('.read-nav').addClass('read-position');
            }
            else {
                $('.read-nav').removeClass('read-position');
            }
        } else {
            $('.search-input input').blur()
        }

        //回到顶部按钮出现
        if (that.Width > 1200) {
            if (that.scrollTop > (that.Height / 2)) {
                $('.return-top').fadeIn()
            }
            else {
                $('.return-top').fadeOut()
            }
        }

        // //定住导航
        // if (that.Width > 1200) {
        //     var navSetOf = $('.read-banner-img img').height() - 35;
        //     if (that.scrollTop > navSetOf) {
        //         $('.product-read-animation').addClass('product-read-fixed width-auto');
        //     } else {
        //         $('.product-read-animation').removeClass('product-read-fixed width-auto');
        //     }
        // }
        //
        // //定住导航
        // if (that.Width > 1200) {
        //
        //     var navSetOf2 = ($('.read-banner-img img').height() + $('.faq-read-box').height() + 50)- that.navSetH;
        //     console.log(that.navSetH);
        //     console.log(that.scrollTop);
        //     console.log(navSetOf2);
        //     if (that.scrollTop > navSetOf2) {
        //         $('.product-read-animation').fadeOut();
        //     } else {
        //         $('.product-read-animation').fadeIn();
        //     }
        // }
    },
    //获取底部top值
    footerTop: function () {
        //窗口滚动
        var FooterLogo = $('.footer-logo-wrap').offset().top;
        var windowH = $(window).height();
        var FooterTop = FooterLogo - windowH;
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= FooterTop) {
            $('.footer-logo-wrap').removeClass('footer-animation').addClass('footer-animation');
        }
        $(window).scroll(function () {
            var FooterLogo = $('.footer-logo-wrap').offset().top;
            var windowH = $(window).height();
            var FooterTop = FooterLogo - windowH;
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= FooterTop) {
                $('.footer-logo-wrap').removeClass('footer-animation').addClass('footer-animation');
            }
        });
    },
    //移动端滑动 or PC端渐现
    ifWidth: function () {
        var that = this;
        if (that.Width < 1200) {
            that.SwiperFadeIn = '';
            that.headerH = 65;
            that.SwiperN = 1;
            that.swiperNumber = 1.5;
            that.centerSwiper = true;
            that.maoNumber = -60;
            $('.swiper-fz-text .swiper-fz-span:nth-child(1) span').addClass('wow fadeInLeft d2');
            $('.swiper-fz-text .swiper-fz-span:nth-child(2)').addClass('wow fadeInRight d2');

            $('.advantage-li').addClass('wow fadeInUp');
        } else {
            $('.swiper-fz-wrap').addClass('wow fadeInUp d4');
        }

        // that.footerTop();
    },
    //动画启动
    WowJs: function () {
        this.WowJsAnimation = new WOW({
            animateClass: 'animated',
            offset: 50
        });
        this.WowJsAnimation.init();
    },

    //事件
    AddEventList: function () {
        var that = this;


        function return_false() {
            return false;
        }

        // $('html,body,.black-box').on('mousewheel DOMMouseScroll wheel', return_false);

        for (var i = 0; i < $('.data1').length; i++) {
            that.imgLoad.push(
                $('.data1').eq(i).attr('data-src')
            )
        }
        for (var j = 0; j < $('.data2').length; j++) {
            that.AllImgLoad.push(
                $('.data2').eq(j).attr('data-src')
            )
        }
        for (var l = 0; l < $('.data3').length; l++) {
            that.AllImgFalse.push(
                $('.data3').eq(l).attr('data-src')
            )
        }
        if (that.imgLoad.length > 0) {
            that.indexImgLoad();
        }

        //导航遮罩出现
        $('.m-header-nav').on('click', function (e) {
            e.preventDefault();
            if (!that.IfNav) {
                $('html,body, .black-box').on('mousewheel DOMMouseScroll wheel', return_false);
                $('.m-header-nav span:first-child').removeClass('first-rotate2').addClass('first-rotate');
                $('.m-header-nav span:last-child').removeClass('last-rotate2').addClass('last-rotate');
                $('.m-header-nav span:nth-child(2)').removeClass('navOpacity2').addClass('navOpacity');
                $('.m-header-nav').addClass('header-click-nav');
                for (var i = 0; i < $('.header-m-a').length; i++) {
                    $('.header-m-a').eq(i).addClass('fadeInUp2');
                    $('.header-m-a').eq(i).css({
                        animationDelay: (i * 200) + 'ms',
                        webkitAnimationDelay: (i * 200) + 'ms'
                    });
                }
                $('.header-language').removeClass('fadeInUp2 d7').addClass('fadeInUp2 d7');
                $('.header-wrap').removeClass('header-position').addClass('header-position');
                $('.header-nav').removeClass('header-nav-show').addClass('header-nav-show');
                $('.black-box').stop();
                $('.black-box').fadeIn();
                $('.header-wrap').addClass('header-height');
                that.IfNav = true;
            } else {
                $('html,body, .black-box').off('mousewheel DOMMouseScroll wheel', return_false);
                $('.m-header-nav span:first-child').removeClass('first-rotate').addClass('first-rotate2');
                $('.m-header-nav span:last-child').removeClass('last-rotate').addClass('last-rotate2');
                $('.m-header-nav span:nth-child(2)').removeClass('navOpacity').addClass('navOpacity2');
                $('.m-header-nav').removeClass('header-click-nav');
                $('.header-language').addClass('fadeInUp2 d7').removeClass('fadeInUp2 d7');
                for (var j = 0; j < $('.header-m-a').length; j++) {
                    $('.header-m-a').eq(i).removeClass('fadeInUp2');
                }
                $('.header-wrap').addClass('header-position').removeClass('header-position');
                $('.header-nav').addClass('header-nav-show').removeClass('header-nav-show');
                $('.black-box').stop();
                $('.black-box').fadeOut();
                $('.header-wrap').removeClass('header-height');
                that.IfNav = false;
            }
        });

        //搜索框
        $('.search-button').on('click', function (e) {
            e.preventDefault();
            $('.nav-list .header-li .header-a').addClass('header-a-scale');
            $('.nav-list').addClass('header-zindex');
            $('.header-en').addClass('header-a-scale header-zindex');
            $('.header-search').addClass('header-a-scale');
            $('.header-wrap').addClass('header-back');
            $('.header-search2').addClass('header-a-scale2');
            $('.search-input').addClass('input-left');
            $('.header-search-button').addClass('input-left');
            $('.search-input input').focus();
        });
        //关闭搜索框
        $('.search-hide').on('click', function (e) {
            e.preventDefault();
            $('.nav-list .header-li .header-a').removeClass('header-a-scale');
            $('.nav-list').removeClass('header-zindex');
            $('.header-en').removeClass('header-a-scale header-zindex');
            $('.header-search').removeClass('header-a-scale');
            $('.header-wrap').removeClass('header-back');
            $('.header-search2').removeClass('header-a-scale2');
            $('.search-input').removeClass('input-left');
            $('.header-search-button').removeClass('input-left');
            $('.search-input input').val('');
            $('.search-input input').blur();
        });
        //回到顶部
        $('#top').on('click', function () {
            that.TopHtml();
        });
        //悬浮窗口
        var FloatNav = $(".float-nav");
        FloatNav.hover(function () {
            $('.float-nav').addClass('float-max');
        }, function () {
            $('.float-nav').removeClass('float-max');
        });
        //二维码
        $('.footer-ewm-show').hover(function () {
            $('.footer-contact-ewm').addClass('fadeInUp3');
        }, function () {
            $('.footer-contact-ewm').removeClass('fadeInUp3');
        });
        //点击下拉
        if (that.Width < 1200) {
            var IfPro = false;
            $('.pro-down').on('click', function (e) {
                e.preventDefault();
                if (!IfPro) {
                    $('.pro-list-wrap').stop(true, true).slideDown(600);
                    $('.pro-current-icon').addClass('rotate-icon');
                    IfPro = true;
                }
                else {
                    $('.pro-list-wrap').stop(true, true).slideUp(600);
                    $('.pro-current-icon').removeClass('rotate-icon');
                    IfPro = false;
                }
            });
        }
        //联系我们下拉
        $('.join-top').on('click', function (e) {
            e.preventDefault();
            var joinThis = $(this);
            if (joinThis.hasClass('join-blue')) {
                $(this).removeClass('join-blue');
                $(this).siblings('.join-bottom').stop(true, true).slideUp(600);
                $(this).find('.join-read:nth-child(4) span').html('+');
            } else {
                $(this).addClass('join-blue');
                $(this).siblings('.join-bottom').stop(true, true).slideDown(600);
                $(this).find('.join-read:nth-child(4) span').html('-');
            }
        });
    },
    //标签选择
    lableList: function () {
        var lableClick = $('.mbx-nav span');
        lableClick.on('click', function () {
            var lableThis = $(this);
            var lableIndex = lableThis.index();
            console.log(lableIndex);
            if (lableThis.hasClass('max-hover')) {
                lableClick.eq(lableIndex).removeClass('max-hover');
            } else {
                lableClick.eq(lableIndex).addClass('max-hover');
            }
        });
    },
    //图文下拉
    imgDown: function () {
        var that = this;
        var imgName = $('.banner-img-down');
        var arr = [
            'easeInQuad',
            'easeOutQuad',
            'easeInOutQuad',
            'easeInCubic',
            'easeOutCubic',
            'easeInOutCubic',
            'easeInQuart',
            'easeOutQuart',
            'easeInOutQuart',
            'easeInQuint',
            'easeOutQuint',
            'easeInOutQuint',
            'easeInSine',
            'easeOutSine',
            'easeInOutSine',
            'easeInExpo',
            'easeOutExpo',
            'easeInOutExpo',
            'easeInCirc',
            'easeOutCirc',
            'easeInOutCirc',
            'easeInElastic',
            'easeOutElastic',
            'easeInOutElastic',
            'easeInBack',
            'easeOutBack',
            'easeInOutBack',
            'easeInBounce',
            'easeOutBounce',
            'easeInOutBounce'
        ];
        var Down = $(window).scrollTop();
        var Blur = $(window).scrollTop() - imgName.height();
        var Blur2 = imgName.height() + (Blur);
        var BlurPX = imgName.height() - Blur2;
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var t;
        if (Down <= 0) {
            t = setTimeout(function () {
                $(document.body).animate({
                    'scrollTop': imgName.height() - that.headerH
                }, {duration: 1500, easing: arr[18]});
                $('html').animate({
                    'scrollTop': imgName.height() - that.headerH
                }, {duration: 1500, easing: arr[18]});
            }, 2000);
        }
        if (BlurPX > 100) {
            imgName.css({
                filter: 'blur(' + (Blur2 * 0.021) + 'px)'
            })
        }

        $(window).scroll(function () {
            clearTimeout(t);
            Blur = $(window).scrollTop() - imgName.height();
            Blur2 = imgName.height() + (Blur);
            BlurPX = imgName.height() - Blur2;
            if (BlurPX > 100) {
                imgName.css({
                    filter: 'blur(' + (Blur2 * 0.021) + 'px)'
                })
            }

        });
    },
    //导航下拉
    navDown: function () {
        var that = this;
        $('.nav-show').hover(function () {
            $('.header-down').stop(true, true).slideDown();
            $('.nav-show').addClass('header-down-hover');

        }, function () {
            $('.header-down').stop(true, true).slideUp();
            $('.nav-show').removeClass('header-down-hover');
        });
    },
    //地图
    IsMap: function () {
        var that = this;
        var map_ico = $('#allmap').attr('data-icon');
        if (that.Width < 1200) {
            var map = new BMap.Map("allmap");
            // 百度地图API功能
            var point = new BMap.Point(116.919008, 36.810857);
            map.centerAndZoom(point, 19);

            //创建覆盖点
            var pt = new BMap.Point(116.919821, 36.810572);
            var myIcon = new BMap.Icon(map_ico, new BMap.Size(130, 48));
            var marker2 = new BMap.Marker(pt, {icon: myIcon});  // 创建标注
            map.addOverlay(marker2);              // 将标注添加到地图中
        }
        else {
            var map = new BMap.Map("allmap");
            // 百度地图API功能
            var point = new BMap.Point(116.91824, 36.811204);
            map.centerAndZoom(point, 19);

            //创建覆盖点
            var pt = new BMap.Point(116.919821, 36.810572);
            var myIcon = new BMap.Icon(map_ico, new BMap.Size(130, 48));
            var marker2 = new BMap.Marker(pt, {icon: myIcon});  // 创建标注
            map.addOverlay(marker2);              // 将标注添加到地图中
        }
    },
    //选项卡
    tabList: function () {
        $('.service-index-button li').hover(function () {
            $(".service-index-button li").eq($(this).index()).addClass("service-active").siblings().removeClass('service-active');
            $(".service-index-button li").eq($(this).parents('.service-index-height').find('.service-animation').addClass('fadeInLeft2')).siblings().removeClass('fadeInLeft2');
            $(".service-position").hide().eq($(this).index()).show();
        })
    },
    //数字滚动
    numberRoll: function () {
        var that = this;
        //窗口滚动
        var dataTop = $('.data-number').offset().top;
        var dataH = dataTop - that.Height;
        var scrollTop = $(window).scrollTop();
        if (scrollTop > dataH && scrollTop < dataTop) {
            that.NumberCount();
        }
        $(window).scroll(function () {
            var dataTop = $('.data-number').offset().top;
            var dataH = dataTop - that.Height;
            var scrollTop = $(window).scrollTop();
            if (scrollTop > dataH && scrollTop < dataTop) {
                that.NumberCount();
            }
        });
    },
    NumberCount: function () {
        var that = this;
        if (that.NumberIf) {
            $("#number1").numberRock({
                lastNumber: $("#number1").data('num'),
                duration: 2000,
                easing: 'swing',
            });
            $("#number2").numberRock({
                lastNumber: $("#number2").data('num'),
                duration: 2000,
                easing: 'swing',
            });
            $("#number3").numberRock({
                lastNumber: $("#number3").data('num'),
                duration: 2000,
                easing: 'swing',
            });
            that.NumberIf = false;
        }
    },
    //新闻
    newsTab: function () {
        var that = this;
        that.NewsTab = new Swiper('.news-swiper', {
            slidesPerView: 1.5,
            initialSlide: 0,
            centeredSlides: true,//居中
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: '.news-pagination',
                clickable: true,
            },
            // navigation: {
            //     nextEl: '.news-swiper-next',
            //     prevEl: '.news-swiper-prev',
            // },
        });
    },
    //发展历程
    FzSwiper: function () {
        var that = this;
        that.fzAbout = new Swiper('.fz-about-swiper', {
            slidesPerView: 3,
            spaceBetween: 0,
            navigation: {
                nextEl: '.fz-swiper-next',
                prevEl: '.fz-swiper-prev',
            }
        });
    },
    //荣誉资质
    honorSwiper: function () {
        var that = this;
        that.honorAbout = new Swiper('.honor-about-swiper', {
            slidesPerView: that.swiperNumber,
            centeredSlides: that.centerSwiper,
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: '.honor-swiper-next',
                prevEl: '.honor-swiper-prev',
            }
        });
    },
    //底部布局
    footerNav: function () {
        var FooterNav = $('.footer-nav').width();
        var NavWidth = $('.footer-nav .footer-ul').width();
        var NavLi = (FooterNav - NavWidth) / 4;
        $('.footer-nav .footer-ul .footer-li').css({
            paddingRight: parseInt(NavLi) - .1
        });
        $('.footer-nav .footer-ul .footer-li:last-child').css({
            paddingRight: 0
        });
    },
    //回到顶部
    TopHtml: function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        $(document.body).animate({
            scrollTop: 0
        }, 700);
        $('html').animate({
            scrollTop: 0
        }, 700)
    },
    //锚点特效
    maoAnimate: function () {
        var that = this;
        that.maoTop = true;
        that.aboutNav();
        var _hash = window.location.hash;
        //锚点滑动
        $('.about-mao').click(function () {
            var $target = $(this.hash);
            if ($target && $target.get(0)) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset + that.maoNumber
                    },
                    700);
                return false;
            }
        });
        setTimeout(function () {
            if (_hash && $(_hash).get(0)) {
                $('html,body').animate({
                        scrollTop: $(_hash).offset().top + that.maoNumber
                    },
                    700);
            }
        }, 500);

    },
    //内导航吸顶
    aboutNav: function () {
        var that = this;
        var top = $(window).scrollTop();

        var aCurrent = $('.read-about');
        for (var i = 0; i < aCurrent.length - 1; i++) {
            if ((top + 1) >= aCurrent.eq(i).offset().top && top < aCurrent.eq(i + 1).offset().top) {
                $('.read-nav ul li').eq(i).addClass('read-hover').siblings().removeClass('read-hover');
            }
        }
        if (top > aCurrent.eq(aCurrent.length - 1).offset().top) {
            $('.read-nav ul li').eq(aCurrent.length - 1).addClass('read-hover').siblings().removeClass('read-hover');
        }

        $(window).scroll(function () {
            var top = $(window).scrollTop() + 1;
            var aCurrent = $('.read-about');
            for (var i = 0; i < aCurrent.length - 1; i++) {
                if ((top + 1) >= aCurrent.eq(i).offset().top && top < aCurrent.eq(i + 1).offset().top) {
                    $('.read-nav ul li').eq(i).addClass('read-hover').siblings().removeClass('read-hover');
                }
            }
            if (top > aCurrent.eq(aCurrent.length - 1).offset().top) {
                $('.read-nav ul li').eq(aCurrent.length - 1).addClass('read-hover').siblings().removeClass('read-hover');
            }
        })

    },
    //默认方法
    HtmlInit: function () {
        var that = this;
        $('html, body').show();
        that.imgDown();
        that.ifWidth();
        that.WowJs();
        that.footerNav();
        //加载荣誉swiper
        that.honorSwiper();
        that.navSetH=$('.product-read-animation').height();
        //PC端导航下拉
        if (that.Width > 1200) {
            that.navDown();
            that.FzSwiper();

        }
        that.NavScroll();
        $('.video').trigger('play');
    },

    //预加载第一屏的图片
    indexImgLoad: function () {
        var that = this;
        var len = that.imgLoad.length;
        //图片预加载
        $.preload(that.imgLoad, {
            // 是否有序加载
            order: true,
            minTimer: 500,
            //每加载完一张执行的方法
            each: function (count) {
                var percent = Math.round((count + 1) / len * 100) + '%';
                $('.data1').eq(count).append('<img src="' + that.imgLoad[count] + '"/>');
            },
            // 加载完所有的图片执行的方法
            end: function () {
                console.log('加载首屏');
                that.HtmlInit();
                //首屏图片太多按顺序加载，少于1张不加载
                if (that.AllImgLoad.length > 0) {
                    //加载首屏剩下的banner
                    that.indexImages();
                }
                if (that.AllImgLoad.length == 0) {
                    that.allImages();
                    that.BannerSwiper();
                }
                // //修改标题
                // document.title = (index + 1) + '/' + len;
            }
        });
    },
    //加载首屏剩下的banner
    indexImages: function () {
        var that = this;
        //图片预加载
        $.preload(that.AllImgLoad, {
            // 是否有序加载
            order: true,
            minTimer: 0,
            //每加载完一张执行的方法
            each: function (count) {
                $('.data2').eq(count).append('<img src="' + that.AllImgLoad[count] + '"/>');
            },
            // 加载完首屏剩下的图片执行的方法
            end: function () {
                console.log('加载完了首屏其他banner');
                that.BannerSwiper();
                if (that.AllImgFalse.length > 0) {
                    //无序加载网站全部的图片，少于1张不加载
                    that.allImages();
                }
            }
        });
    },
    //网站全部图片无序加载
    allImages: function () {
        var that = this;

        //图片预加载
        $.preload(that.AllImgFalse, {
            // 是否有序加载
            order: false,
            minTimer: 0,
            //每加载完一张执行的方法
            each: function (count) {
                $('.data3').eq(count).append('<img src="' + that.AllImgFalse[count] + '"/>');
            },
            // 加载完首屏剩下的图片执行的方法
            end: function () {
                console.log('加载完了全部');

            }
        });
    }
};

$(function () {
    IqwXiongJs.Init();
});


