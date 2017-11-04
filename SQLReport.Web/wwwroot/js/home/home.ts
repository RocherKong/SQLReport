class HomeManage {
    constructor() {
        this.BindEvent();
    }
    BindEvent() {
        $(document).on("click", "input[data-role=btn_export]", function () {
            window.location.href = "/Home/Export?ComandText=" + $("#CommandText").val();

        });
    }
}

let homeManage: HomeManage = new HomeManage();