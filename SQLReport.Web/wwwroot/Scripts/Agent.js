/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var Agent = (function () {
    function Agent() {
    }
    Agent.Api = function (fullCode, reqMsg, successCallBack, errorCallBack) {
        var reqMsgStr = JSON.stringify(reqMsg);
        var agentUrl = '/Agent/Api';
        this.Post(agentUrl, { fullCode: fullCode, reqMsg: reqMsgStr }, successCallBack, errorCallBack);
    };
    Agent.Post = function (url, data, successCallBack, errorCallBack) {
        $.post(url, data, function (resp) {
            if (resp.IsSuccess) {
                successCallBack(resp);
            }
            else {
                errorCallBack(resp);
            }
        });
    };
    return Agent;
}());
;
var Supplier = (function () {
    function Supplier() {
        this.BindEvent();
    }
    Supplier.prototype.BindEvent = function () {
        $(document).on('click', '[data-role=btn_show_buyerinfo]', function (event) {
            var $this = $(event.currentTarget);
            Agent.Api('T.Report.GetBuyerInfo', { MemberId: $this.attr("data-buyerid") }, function (resp) {
                var report = resp.Body;
                var tempHtml = "<div class=\"demanderInfo\"><div>\u6CE8\u518C\u65F6\u95F4\uFF1A<span>" + report.OnlineTime.substr(0, 10) + "</span></div><div>\u4E0B\u5355\u6570\uFF1A<span>" + report.OrderTotal + "</span></div><div>\u8FDD\u7EA6\u6B21\u6570\uFF1A<span>" + 0 + "</span></div></div>";
                layer.tips(tempHtml, $this, {
                    tips: [3, '#fff']
                });
            }, function (resp) { });
        });
    };
    Supplier.prototype.Init = function (enterpriseId) {
        this.EnterpriseId = enterpriseId;
        this.SubscribeToDoTimer();
    };
    /**
     * 订阅待处理---定时器
     */
    Supplier.prototype.SubscribeToDoTimer = function () {
        var _this = this;
        this.SubscribeToDo();
        var interval = setInterval(function () {
            _this.SubscribeToDo();
        }, 3000);
    };
    /**
     * 订阅待处理
     */
    Supplier.prototype.SubscribeToDo = function () {
        var $enquiry_badge = $('[data-role=enquiry_badge]');
        var $bargain_badge = $('[data-role=bargain_badge]');
        var $order_badge = $('[data-role=order_badge]');
        Agent.Api('T.Report.GetToHandleForSupplier', { SupplierId: this.EnterpriseId }, function (resp) {
            var respBody = resp.Body;
            $enquiry_badge.html(respBody.ToHandleEnquiryNum);
            $bargain_badge.html(respBody.ToHandleBargainNum);
            $order_badge.html(respBody.OrderNum);
        }, function (resp) {
        });
    };
    return Supplier;
}());
var CurrentSupplier = new Supplier();
