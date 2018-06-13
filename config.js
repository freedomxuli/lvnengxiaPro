var config = {
    server: 'http://test.lvnengxia.cn/api.php/',
    apiversion: 'admin1', //系统api版本
    apiname: '', //系统配置的api名称
    pagesize: 10, // 分页组件每页显示数量
    cpage: 1, //分页当前页
    apimethod: { //接口method集合
        home: 'theme.modules', //首页
        category: 'category.itemCategory', //分类
        vcode: 'user.vcode', //图片验证码
        usersendSms: 'sms.send.smsCode', //注册发送验证码
        userVerifySms: 'password.forget.verifi.smsCode', //找回密码短信
        changepsw:'password.forget.reset',
        verifyAccount: 'user.verifyAccount', //校验注册用户名
        signup: 'agentOrder.reg.save', //用户注册
        signupcom: 'register.business.apply', //企业注册
        member: 'member.info.get', //会员中心
        signin:'member.sign.in',//首页签到
        picshow:'image.carousel.list.get',//首页轮播图
        pertzinfo:'profit.priviate.setting.get',//个人投资收益配置信息获取
        pertzdetail:'profit.priviate.calc',//个人投资收益计算收益和明细
        comtzinfo:'profit.qy.setting.get',//企业投资收益配置信息获取
        comtzdetail:'profit.qy.calc',//企业投资收益计算
        comtzmblist:'vague.offer.qy.template.list',//企业模糊报价模版列表
        comtzmbdetail:'vague.price.qy.template.info.get',//企业模糊报价模版信息获取
        perjzinfo:'apply.build.personal.initData.get',//个人一键申请建站初始数据获取
        perjzsave:'apply.build.personal.save',//个人申请建站保存
        imageupload:'image.upload',//上传图片
        comjzinfo:'apply.build.qy.initData.get',//企业一键申请建站初始数据获取
        comjzsave:'apply.build.qy.save',//企业一键申请建站初始数据获取
        isinfoget:'is.perfect.infomation.get',//获取是否已经完善个人资料
        perjzjd:'apply.personal.progress.list',//个人建站进度查询
        comjzjd:'apply.qy.progress.list',//企业建站进度查询
        grjdzl:'project.schedule.report',//个人进度总览
        xmjdmxcx:'project.schedule.view.get',//项目进度明细查询
        changetel:'telphone.update',//更换手机号
        changepwd:'password.update',//修改会员密码
        savecom:'infomation.perfect.qy.save',//企业信息完善
        saveper:'infomation.perfect.personal.save',//个人信息完善
        roofget:'archives.roof.list.get',//获取屋顶结构选择项信息
        tileget:'archives.tileKind.list.get',//获取瓦片选择项信息
        headimgup:'headimg.upload.confirm',//上传头像图片
        getpointlist:'point.logs.list',//会员积分日志列表
        ewmget:'invitation.info.get',//获取邀请二维码
        gethylist:'invitation.member.list',//获取邀请二维码
        homemsglist:'comment.list.home.get',//首页留言列表信息
        msglist:'comment.list.get',//留言评论列表
        addmsg:'comment.add.save',//发表评论
        followup:'comment.follow.up',//留言评论点赞
        msgsend:'comment.reply.send',//对留言发表评论
        singlemsg:'comment.single.info.get',//获取单条留言评论最新状态
        customerlist:'customer.list.get',//客服列表
        activitylist:'activity.list.get',//活动专属列表
        getshopurl:'shop.point.url.get',//获取积分商城地址
        znxlist:'mail.list',
        znxdetail:'mail.detail.get',
        login: 'login.user.account', //用户登录
        logout: 'login.out', //用户登出
        agreement: 'user.license', //注册协议
        useProtocol: 'user.protocol', //使用协议
        trustDcloudLogin:'user.trust.dcloudlogin', //dcloud第三方信任登录信息验证
        trustBindUser:'user.trust.bindUser', //信任登录绑定用户
        userinfo: 'member.basics.get', //用户信息
        updateuserinfo: 'member.basics.update', //更新用户信息
        addresslist: 'member.address.list', //收获地址
        setdefaultadd: 'member.address.setDefault', //设置默认收货地址
        adddel: 'member.address.delete', //删除收获地址
        addupdate: 'member.address.update', //编辑收货地址
        addcreate: 'member.address.create', //新增收货地址
        addrupdate: 'member.address.update', //新增收货地址
        returns: 'member.aftersales.list', //退换货信息
        returnsdetail: 'member.aftersales.get', //退换货详情
        returnsform: 'member.aftersales.apply', //申请退换货
        returnsforminfo: 'member.aftersales.applyInfo.get', //获取申请退换货页面信息
        arealocation: 'region.json', //省市区信息
        goodslist: 'item.search', //商品列表
        goodsdetail: 'item.detail', //商品详情
        goodsdesc: 'item.desc', //商品描述
        goodsrate: 'item.rate.list', //商品评价
        goodappendrate: 'member.rate.append', //商品追评
        pointdetail: 'member.point.detail', //积分明细
        favoriteitemadd: 'member.favorite.item.add', //新增收藏商品
        favoriteitemlist: 'member.favorite.item.list', //商品收藏列表
        favoriteitemremove: 'member.favorite.item.remove', // 删除商品收藏
        favoriteshopadd: 'member.favorite.shop.add', //新增收藏商品
        favoriteshoplist: 'member.favorite.shop.list', //店铺收藏列表
        favoriteshopremove: 'member.favorite.shop.remove', //删除店铺收藏
        ratelist: 'member.rate.list', //会员评价列表
        complaintslist: 'member.complaints.list', //订单投诉列表
        complaintsdetail: 'member.complaints.get', //订单投诉详情
        complaintsclose: 'member.complaints.close', //撤销投诉
        activitydetaillist: 'promotion.activity.detail', //活动详情及其商品列表
        projectPageInfo: 'promotion.page.info', //营销活动详情页
        activityitemdetail: 'promotion.activity.itemdetail', //活动商品详情
        activitylist: 'promotion.activity.list', //活动列表
        usercoupon: 'member.coupon.list', //会员优惠券
        uservoucher: 'member.voucher.list', //会员优惠券
        cartlist: 'cart.get', //购物车列表
        cartadd: 'cart.add', //添加商品到购物车
        cartdel: 'cart.del', //删除购物车中的商品
        cartupdate: 'cart.update', //更新购物车
        shop: 'shop.index', //店铺首页信息
        checkout: 'cart.checkout', //结算页信息
        checkoutpoint: 'cart.user.point', //结算使用积分
        cartGetVoucher:'cart.get.voucher', //结算页获取购物券
        checkouttotal: 'cart.total', //结算总价计算
        tradelist: 'trade.list', //会员订单
        tradeDetail: 'trade.get', //订单详情
        tradecancelreason: 'trade.cancel.reason.get', //获取取消订单原因
        tradecancel: 'trade.cancel.create', //取消订单
        tradecancellist: 'trade.cancel.list', //会员取消订单列表
        tradecanceldetail: 'trade.cancel.get', //会员取消订单详情
        tradeconfirm : 'trade.confirm ', //会员确认收货交易完成
        traderate: 'member.rate.add', //评价订单
        tradechild: 'trade.order.get', //获取子订单
        usecoupon: 'promotion.coupon.use', //使用优惠券
        useVoucher:'promotion.voucher.use', //结算页使用购物券
        cancelcoupon: 'promotion.coupon.cancel', //取消使用优惠券
        getcoupon: 'promotion.coupon.code.get', //获取优惠券
        checkpassword: 'member.security.checkLoginPassword', //验证登录密码
        updateloginpwd: 'member.security.updateLoginPassword', //修改登录密码
        paypwdset: 'member.security.setPayPassword ', //设置支付密码
        checkpaypwd: 'member.security.checkPayPassword',//验证支付密码
        updatepaypwd: 'member.security.updatePayPassword', //修改支付密码
        userconfig: 'member.security.userConf', //获取会员安全中心相关所有配置
        updatemobile: 'member.security.updateMobile', //验证手机号
        savemobile: 'member.security.saveMobile', //绑定手机号
        setpwdbymobile:'member.security.setPayPasswordByMoblie', //忘记预存款密码的短信验证
        logisticsget: 'logistics.get', //显示物流信息
        createtrade: 'trade.create', //创建订单
        shopcoupon: 'promotion.coupon.list.get', //店铺优惠券列表
        shopcouponget: 'promotion.coupon.code.get', //获取店铺优惠券
        shopinfo: 'shop.basic', //店铺基础信息
        payment: 'payment.pay.paycenter', //订单选择支付类型
        createpayment: 'payment.pay.create', //创建支付单
        tradepay: 'payment.pay.do', //订单支付
        promotiondetail: 'promotion.shop.cartpromotion.detail', //促销聚会页
        coupondetail: 'promotion.shop.coupon.detail', //优惠券促销聚会页
        ratetradeget: 'member.ratetrade.get', //获取评价订单
        setaccount: 'member.setAccount', //设置用户名
        complaintscreate: 'member.complaints.create', //投诉商家
        userforgotresetpwd: 'user.forgot.resetpassword', //忘记密码重置密码
        favoriteall: 'member.favorite.all', //获取用户的所有收藏
        express: 'logistics.list.get', //获取快递公司
        logisticsback: 'logistics.send', //回寄物流信息提交
        contentnodelist: 'content.node.list', //获取文章目录
        contentlist: 'content.list', //获取文章列表
        contentinfo: 'content.info', //获取文章内容
        remindinfo: 'promotion.activity.remindinfo', //获取订阅信息
        remindsubmit: 'promotion.activity.remindsubmit', //提交订阅信息
        packages: 'item.packageInfo', //组合营销商品
        imgupload: 'image.upload', //图片上传
        redparkets: 'promotion.hongbao.list', //会员红包
        vilidatepaypassword: 'member.security.validatePayPassword',
        logisticszitilist: 'logistics.ziti.list', //根据收货地区id获取自提点列表
        messagePushRegister:'message.push.register',  //第一次启动的时候注册机器用的接口
        filteritems: 'item.filterItems', //根据搜索条件，列出渐进式的筛选项
        getcommonsetting: 'common.getsetting', //根据配置名获取配置值
        arealist:'get.area.list',//获取地区列表
        areachildlist:'get.area.children',//获取地区列表
        getsidver:'verifiIdentity.user.sid',//获取sid
        getwddzurl:'ems.url.get',//获取我的电站
        userinfo:'user.info.detail.get',//获取个人信息
        homemenu:'home.menu.auth.get',//首页权限
        memberslist:'get.members.list',//会员列表
        regType:'member.kind.list.get',//获取会员类别档案
        saveregType:'member.kind.edit.save',//获取会员类别档案
    }
}
