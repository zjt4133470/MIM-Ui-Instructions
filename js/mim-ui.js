$(function () {
    //最新版本号
    var versionNumber = '8.0';
    $('.versionNumber').html(versionNumber);
    //最新压缩版css
    $('#cssText').html('');
    //最新压缩版js
    $('#jsText').html('');
    //当前时间展示
    setInterval(function () {
        $('.currentTime').html(MIM.timeFilter(new Date() / 1000, "-", ":"));
        $('.currentTimeYear').html(MIM.timeFilter(new Date() / 1000, "/", false));
        $('.currentTimeDate').html(MIM.timeFilter(new Date() / 1000, false, ":"))
    }, 1000);
    //进入页面展示
    $('.homePage').show();
    var param = window.sessionStorage.getItem('searchIndex');
    if (param) {
        showPage(param);
        menuCheckShow(param);
    }


    $('mim-menu ul li').on('click', function () {
        var index = $(this).find('span').attr('index');
        window.sessionStorage.setItem("searchIndex", index);
        window.sessionStorage.setItem("searchIndexName", $(this).find('span').html());
        for (var i = 0; i < $('.selects').find('ul li').length; i++) {
            if ($(this).find('span').html() == $('.selects').find('ul li').eq(i).html()) {
                $('.selects').find('input').val($(this).find('span').html());
                $('.selects').find('ul li').eq(i).addClass('pitch-select').siblings().removeClass('pitch-select');
            }
        }
        showPage(index);
    });

    //展示页面
    function showPage(index) {
        switch (index) {
            case "homePage":
                $('.homePage').show().siblings().hide();
                break;
            case "handQuickly":
                $('.handQuickly').show().siblings().hide();
                break;
            case "newCss":
                $('.newCss').show().siblings().hide();
                break;
            case "newJs":
                $('.newJs').show().siblings().hide();
                break;
            case "layout":
                $('.layout').show().siblings().hide();
                break;
            case "container":
                $('.container').show().siblings().hide();
                break;
            case "colorHue":
                $('.colorHue').show().siblings().hide();
                break;
            case "IconIco":
                $('.IconIco').show().siblings().hide();
                break;
            case "borderRim":
                $('.borderRim').show().siblings().hide();
                break;
            case "buttonSwitch":
                $('.buttonSwitch').show().siblings().hide();
                break;
            case "inputBox":
                $('.inputBox').show().siblings().hide();
                break;
            case "navSide":
                $('.navSide').show().siblings().hide();
                break;
            case "mimLoading":
                $('.mimLoading').show().siblings().hide();
                break;
            case "mimTable":
                $('.mimTable').show().siblings().hide();
                break;
            case "mimSelect":
                $('.mimSelect').show().siblings().hide();
                break;
            case "alertSide":
                $('.alertSide').show().siblings().hide();
                break;
            case "confirmPop":
                $('.confirmPop').show().siblings().hide();
                break;
            case "notification":
                $('.notification').show().siblings().hide();
                break;
            case "drawer":
                $('.drawer').show().siblings().hide();
                break;
            case "verificationDown":
                $('.verificationDown').show().siblings().hide();
                break;
            case "timeFormatting":
                $('.timeFormatting').show().siblings().hide();
                break;
            case "likeResultStyle":
                $('.likeResultStyle').show().siblings().hide();
                break;
            case "customStyle":
                $('.customStyle').show().siblings().hide();
                break;
            case "returnTop":
                $('.returnTop').show().siblings().hide();
                break;
            case "easyDrag":
                $('.easyDrag').show().siblings().hide();
                break;
            case "easyAjax":
                $('.easyAjax').show().siblings().hide();
                break;
            case "versionUpdating":
                $('.versionUpdating').show().siblings().hide();
                break;
        }
    }

    //侧边栏被选中展示
    function menuCheckShow(index) {
        for (var i = 0; i < $('mim-menu ul li').length; i++) {
            if ($('mim-menu ul li').eq(i).find('span').attr('index') == index) {
                $('mim-menu ul li').eq(i).addClass('is-active').siblings().removeClass('is-active');
                $('mim-menu ul li').eq(i).parent().parent().siblings().removeClass('is-active');
                $('mim-menu ul li').eq(i).siblings().children().children().removeClass('is-active');
                $('mim-menu ul li').eq(i).parent().parent().siblings().children().children().removeClass('is-active')
            }
        }
    }

    //下一页
    $(".nextPage").on('click', function () {
        var index = $(this).find('span').attr('index');
        window.sessionStorage.setItem("searchIndex", index);
        window.sessionStorage.setItem("searchIndexName", $(this).find('span').html());
        $('.selects option:selected').html(window.sessionStorage.getItem('searchIndexName'));
        for (var j = 0; j < $('.selects').find('ul li').length; j++) {
            if ($(this).find('span').html() == $('.selects').find('ul li').eq(j).html()) {
                $('.selects').find('input').val($(this).find('span').html());
                $('.selects').find('ul li').eq(j).addClass('pitch-select').siblings().removeClass('pitch-select');
            }
        }
        showPage(index);
        menuCheckShow(index);

    });
    //上一页
    $(".previousPage").on('click', function () {
        var index = $(this).find('span').attr('index');
        window.sessionStorage.setItem("searchIndex", index);
        window.sessionStorage.setItem("searchIndexName", $(this).find('span').html());
        $('.selects option:selected').html(window.sessionStorage.getItem('searchIndexName'));
        for (var j = 0; j < $('.selects').find('ul li').length; j++) {
            if ($(this).find('span').html() == $('.selects').find('ul li').eq(j).html()) {
                $('.selects').find('input').val($(this).find('span').html());
                $('.selects').find('ul li').eq(j).addClass('pitch-select').siblings().removeClass('pitch-select');
            }
        }
        showPage(index);
        menuCheckShow(index);

    });
    //最新css链接
    $('.linkCss').on('click', function () {
        window.location.href = ' https://github.com/zjt4133470/MIM-common/blob/master/' + versionNumber + '/mim-common.css'
    });
    //最新js链接
    $('.linkjs').on('click', function () {
        window.location.href = ' https://github.com/zjt4133470/MIM-common/blob/master/' + versionNumber + '/mim-common.js'
    });
    //最新css下载链接
    $('.linkCss_download').on('click', function () {
        window.location.href = ' https://github.com/zjt4133470/MIM-common/blob/master/' + versionNumber + '/mim-common.css';
        // window.location.href = 'https://raw.githubusercontent.com/zjt4133470/MIM-common/master/' + versionNumber + '/mim-common.css'
    });
    //最新js下载链接
    $('.linkjs_download').on('click', function () {
        window.location.href = ' https://github.com/zjt4133470/MIM-common/blob/master/' + versionNumber + '/mim-common.js';
        // window.location.href = 'https://raw.githubusercontent.com/zjt4133470/MIM-common/master/' + versionNumber + '/mim-common.js'
    });
    //点击复制css
    $(".copyCss").on('click', function () {
        var cssText = document.getElementById("cssText");//对象是content
        cssText.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
        MIM.prompt("复制成功", "success", "3000", false);
    });
    //点击复制js
    $(".copyjs").on('click', function () {
        var jsText = document.getElementById("jsText");//对象是content
        jsText.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
        MIM.prompt("复制成功", "success", "3000", false);
    });
    //点击复制icon图标
    $(".iconIco_div mim-col").on('click', function () {
        var jsText = $(this).find("input")[0];//对象是content
        jsText.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
        MIM.prompt('复制成功', 'success', 1000, false)
    });

    //向上
    function scrollFn(className) {
        $(className).scroll(function () {
            var scroll_len = $(className).scrollTop();
            if (scroll_len > 0) {
                $(className).find('.upward .iconfont').fadeIn();
            } else {
                $(className).find('.upward .iconfont').fadeOut();
            }
        });
    }

    scrollFn('.layout');
    scrollFn('.container');
    scrollFn('.colorHue');
    scrollFn('.borderRim');
    scrollFn('.IconIco');
    scrollFn('.buttonSwitch');
    scrollFn('.inputBox');
    scrollFn('.navSide');
    scrollFn('.mimLoading');
    scrollFn('.alertSide');
    scrollFn('.notification');
    scrollFn('.drawer');
    scrollFn('.confirmPop');
    scrollFn('.verificationDown');
    scrollFn('.timeFormatting');
    scrollFn('.likeResultStyle');
    scrollFn('.customStyle');
    scrollFn('.returnTop');
    scrollFn('.easyDrag');
    scrollFn('.easyAjax');
    scrollFn('.versionUpdating');
    scrollFn('.mimTable');
    scrollFn('.mimSelect');
    $('.upward .iconfont').on('click', function () {
        $('.layout').animate({scrollTop: 0}, 'slow');
        $('.container').animate({scrollTop: 0}, 'slow');
        $('.colorHue').animate({scrollTop: 0}, 'slow');
        $('.borderRim').animate({scrollTop: 0}, 'slow');
        $('.IconIco').animate({scrollTop: 0}, 'slow');
        $('.buttonSwitch').animate({scrollTop: 0}, 'slow');
        $('.inputBox').animate({scrollTop: 0}, 'slow');
        $('.navSide').animate({scrollTop: 0}, 'slow');
        $('.alertSide').animate({scrollTop: 0}, 'slow');
        $('.notification').animate({scrollTop: 0}, 'slow');
        $('.drawer').animate({scrollTop: 0}, 'slow');
        $('.confirmPop').animate({scrollTop: 0}, 'slow');
        $('.verificationDown').animate({scrollTop: 0}, 'slow');
        $('.timeFormatting').animate({scrollTop: 0}, 'slow');
        $('.likeResultStyle').animate({scrollTop: 0}, 'slow');
        $('.customStyle').animate({scrollTop: 0}, 'slow');
        $('.returnTop').animate({scrollTop: 0}, 'slow');
        $('.easyDrag').animate({scrollTop: 0}, 'slow');
        $('.easyAjax').animate({scrollTop: 0}, 'slow');
        $('.versionUpdating').animate({scrollTop: 0}, 'slow');
        $('.mimLoading').animate({scrollTop: 0}, 'slow');
        $('.mimTable').animate({scrollTop: 0}, 'slow');
        $('.mimSelect').animate({scrollTop: 0}, 'slow');
    });
    // 代码显示
    var layoutBasicsShowBool = false, layoutIntervalBool = false, layoutMixtureBool = false, layoutOffsetBool = false,
        containerBasicsBool = false, buttonBasicsBool = false, buttonForbiddenBool = false, buttonTextBool = false,
        buttonIconBool = false, buttonLoaginBool = false, buttonSizeBool = false, inputBasics = false,
        inputDisabledBool = false, inputClearBool = false, inputPasswordBool = false, inputIconBool = false,
        inputSizeBool = false, inputWordLimitBool = false, navSideBool = false, navSideStyleBool = false,
        mimLoadingBool = false, mimLoadingStyleBool = false, mimLoadingEntiretyBool = false, mimTableBool = false,
        mimTableStripeBool = false, mimButtonborderBool = false, mimSelectBool = false, mimSelectClearableBool = false,
        mimSelectDisabledBool = false;

    function showHiddenFn(needShowButton, needshow, bool) {
        $(needShowButton).on('click', function () {
            bool = !bool;
            if (bool) {
                $(needShowButton).html('隐藏代码').css("background", '#f56c6c');
                $(needshow).fadeIn(500);
            } else {
                $(needShowButton).html('显示代码').css("background", '#409eff');
                $(needshow).fadeOut(500);
            }
        });
    }

    showHiddenFn('#layoutBasicsShow', '#layoutBasics', layoutBasicsShowBool);
    showHiddenFn('#layoutIntervalShow', '#layoutInterval', layoutIntervalBool);
    showHiddenFn('#layoutMixtureShow', '#layoutMixture', layoutMixtureBool);
    showHiddenFn('#layoutOffsetShow', '#layoutOffset', layoutOffsetBool);
    showHiddenFn('#containerBasicsShow', '#containerBasics', containerBasicsBool);
    showHiddenFn('#buttonBasicsShow', '#buttonBasics', buttonBasicsBool);
    showHiddenFn('#buttonForbiddenShow', '#buttonForbidden', buttonForbiddenBool);
    showHiddenFn('#buttonTextShow', '#buttonText', buttonTextBool);
    showHiddenFn('#buttonIconShow', '#buttonIcon', buttonIconBool);
    showHiddenFn('#buttonLoaginShow', '#buttonLoagin', buttonIconBool);
    showHiddenFn('#buttonSizeShow', '#buttonSize', buttonSizeBool);
    showHiddenFn('#inputBasicsShow', '#inputBasics', buttonSizeBool);
    showHiddenFn('#inputDisabledShow', '#inputDisabled', buttonSizeBool);
    showHiddenFn('#inputClearShow', '#inputClear', buttonSizeBool);
    showHiddenFn('#inputPasswordShow', '#inputPassword', buttonSizeBool);
    showHiddenFn('#inputIconShow', '#inputIcon', buttonSizeBool);
    showHiddenFn('#inputSizeShow', '#inputSize', buttonSizeBool);
    showHiddenFn('#inputWordLimitShow', '#inputWordLimit', buttonSizeBool);
    showHiddenFn('#navSideShow', '#navSide', buttonSizeBool);
    showHiddenFn('#navSideStyleShow', '#navSideStyle', buttonSizeBool);
    showHiddenFn('#mimLoadingShow', '#mimLoading', buttonSizeBool);
    showHiddenFn('#mimLoadingStyleShow', '#mimLoadingStyle', buttonSizeBool);
    showHiddenFn('#mimLoadingEntiretyShow', '#mimLoadingEntirety', buttonSizeBool);
    showHiddenFn('#mimTableShow', '#mimTable', buttonSizeBool);
    showHiddenFn('#mimTableStripeShow', '#mimTableStripe', buttonSizeBool);
    showHiddenFn('#mimButtonborderShow', '#mimButtonborder', buttonSizeBool);
    showHiddenFn('#mimSelectShow', '#mimSelect', buttonSizeBool);
    showHiddenFn('#mimSelectClearableShow', '#mimSelectClearable', buttonSizeBool);
    showHiddenFn('#mimSelectDisabledShow', '#mimSelectDisabled', buttonSizeBool);
});
//整页加载展示
$('#loadingClickShow').click(function () {
    $('#loadingClickShowDiv').show()
    setTimeout(function () {
        $('#loadingClickShowDiv').hide()
    }, 3000)
});
//点击复制代码
$('.basisInput .basisInput_div p mim-button').click(function () {
    var basisInputHtml = $(this).prev();
    basisInputHtml.select();
    document.execCommand("Copy");
    MIM.prompt('复制成功', 'success', 3000, false);
});
//倒计时演示
$(".countdown").countDown(5, {
    cssInit: {
        // color:'#fff',
        // background:'#409eff'
    },
    cssEnd: {
        // color:'#fff',
        // background:'#aaa'
    },
}, "再来一次");
//点我赞
$('.clickMeLike').likeResult('+1', {
    color: 'blue'
});
//点击验证(手机号)
$('.clickValidationPhone').click(function () {
    var phoneVerify = MIM.verifyReg('phone', $('.phoneNumber').val(), true);
    switch (phoneVerify) {
        case 1:
            MIM.prompt('手机号验证通过', 'success', 3000, false);
            $('.phoneNumber').css({
                borderColor: '#67C23A'
            });
            break;
        case 2:
            MIM.prompt('请输入手机号', 'warning', 3000, false);
            $('.phoneNumber').css({
                borderColor: '#E6A23C'
            });
            break;
        case 3:
            MIM.prompt('输入手机号有误', 'danger', 3000, false);
            $('.phoneNumber').css({
                borderColor: '#F56C6C'
            });
            break;
    }
});
//点击验证(邮箱)
$('.clickValidationEmail').click(function () {
    var emailVerify = MIM.verifyReg('email', $('.emailNumber').val(), false);
    switch (emailVerify) {
        case 1:
            MIM.prompt('邮箱验证通过', 'success', 3000, false);
            $('.emailNumber').css('borderColor', '#67C23A');
            break;
        case 2:
            MIM.prompt('请输入邮箱', 'warning', 3000, false);
            $('.emailNumber').css('borderColor', '#E6A23C');
            break;
        case 3:
            MIM.prompt('输入邮箱格式有误', 'danger', 3000, false);
            $('.emailNumber').css('borderColor', '#F56C6C');
            break;
    }
});
//身份证验证
$('.clickValidationIdCard').click(function () {
    var idVerify = MIM.verifyReg(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, $('.idCardNumber').val(), true);
    switch (idVerify) {
        case 1:
            MIM.prompt('身份证号验证通过', 'success', 3000, false);
            $('.idCardNumber').css('borderColor', '#67C23A');
            break;
        case 2:
            MIM.prompt('请输入身份证号', 'warning', 3000, false);
            $('.idCardNumber').css('borderColor', '#E6A23C');
            break;
        case 3:
            MIM.prompt('输入身份证号格式有误', 'danger', 3000, false);
            $('.idCardNumber').css('borderColor', '#F56C6C');
            break;
    }
});
//拖拽
$('#divDragDiv').divDrag();
//初始化select
var options = [{
    id: 'homePage',
    value: '首页',
}, {
    id: 'handQuickly',
    value: '快速上手',
}, {
    id: 'layout',
    value: 'Layout 布局',
}, {
    id: 'container',
    value: 'Container 布局'
}, {
    id: 'colorHue',
    value: 'Color 色彩'
}, {
    id: 'borderRim',
    value: 'Border 边框'
}, {
    id: 'IconIco',
    value: 'Icon 图标'
}, {
    id: 'buttonSwitch',
    value: 'Button 按钮'
}, {
    id: 'inputBox',
    value: 'Input 输入框'
}, {
    id: 'navSide',
    value: 'NavSide 导航侧栏'
}, {
    id: 'mimLoading',
    value: 'Loading 加载'
}, {
    id: 'mimTable',
    value: 'Table 表格'
}, {
    id: 'mimSelect',
    value: 'Select 下拉框'
}, {
    id: 'alertSide',
    value: 'Alert 提示框'
}, {
    id: 'confirmPop',
    value: 'MessageBox 弹窗'
}, {
    id: 'notification',
    value: 'Notification 通知'
}, {
    id: 'drawer',
    value: 'Drawer 抽屉'
}, {
    id: 'verificationDown',
    value: '倒计时'
}, {
    id: 'timeFormatting',
    value: '时间格式化'
}, {
    id: 'likeResultStyle',
    value: '点赞样式'
}, {
    id: 'customStyle',
    value: '自定义验证'
}, {
    id: 'returnTop',
    value: '返回顶部'
}, {
    id: 'easyDrag',
    value: '简易拖拽',
    // disabled: 'true'
}, {
    id: 'easyAjax',
    value: '简易AJAX封装'
}, {
    id: 'versionUpdating',
    value: '版本更新日志'
}];
$('.selects').selectInit(options);
$('.selects option:selected').html(window.sessionStorage.getItem('searchIndexName'));
for (var j = 0; j < $('.selects').find('ul li').length; j++) {
    if (window.sessionStorage.getItem('searchIndexName') === $('.selects').find('ul li').eq(j).html()) {
        $('.selects').find('ul li').eq(j).addClass('pitch-select').siblings().removeClass('pitch-select');
    }
}
$('.selects').find('ul li').on('click', function () {
    var selectOption = $('.selects option:selected').attr('idIndex');
    var selectOptionName = $('.selects option:selected').html();
    window.sessionStorage.setItem("searchIndex", selectOption);
    window.sessionStorage.setItem("searchIndexName", selectOptionName);
    $('.' + selectOption + '').show().siblings().hide();
    for (var i = 0; i < $('mim-menu ul li').length; i++) {
        if ($('mim-menu ul li').eq(i).find('span').attr('index') === selectOption) {
            $('mim-menu ul li').eq(i).addClass('is-active').siblings().removeClass('is-active');
            $('mim-menu ul li').eq(i).parent().parent().siblings().removeClass('is-active');
            $('mim-menu ul li').eq(i).siblings().children().children().removeClass('is-active');
            $('mim-menu ul li').eq(i).parent().parent().siblings().children().children().removeClass('is-active')
        }
    }
});

var options_two = [{
    id: '1',
    value: '黄金糕',
}, {
    id: '2',
    value: '双皮奶'
}, {
    id: '3',
    value: '蚵仔煎'
}, {
    id: '4',
    value: '龙须面'
}, {
    id: '5',
    value: '北京烤鸭'
}];
var options_four = [{
    id: '1',
    value: '黄金糕',
}, {
    id: '2',
    value: '双皮奶'
}, {
    id: '3',
    value: '蚵仔煎'
}, {
    id: '4',
    value: '龙须面',
    disabled: 'true'
}, {
    id: '5',
    value: '北京烤鸭'
}];
$('.selects_two').selectInit(options_two);
$('.selects_three').selectInit(options_two);
$('.selects_four').selectInit(options_four);

//缩放侧边栏
$(".retreat").on("click", function () {
    if ($(this).attr("bool") === "false") {
        $("aside").css("display", "none");
        $(".mim-main").css("left", "0");
        $(this).attr("bool", "true").css("left", "0").find("i").css("transform", "rotate(180deg)")
    } else if ($(this).attr("bool") === "true") {
        $("aside").css("display", "block");
        $(".mim-main").css("left", "200px");
        $(this).attr("bool", "false").css("left", "200px").find("i").css("transform", "rotate(0deg)")
    }
});
//notification通知演示
$('#notification').notification('$notify', {
    title: '标题名称',
    message: '我是一段提示的话',
    duration: 3000,
    type: 'danger',
    position: 'top-right',
    showClose: true
});
//Drawer 抽屉演示
$("#drawer").drawerInit("mimDrawer");



