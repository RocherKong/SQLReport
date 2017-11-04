var HomeManage = (function () {
    function HomeManage() {
        this.BindEvent();
    }
    HomeManage.prototype.BindEvent = function () {
        $(document).on("click", "input[data-role=btn_export]", function () {
            window.location.href = "/Home/Export?ComandText=" + $("#CommandText").val();
        });
    };
    return HomeManage;
}());
var homeManage = new HomeManage();
