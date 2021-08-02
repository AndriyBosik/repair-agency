package agency.repair.controllers;

public abstract class BaseController {
    protected String getLayout() {
        return "layouts/main/main";
    }

    protected String render(String layout, String page) {
        return layout + " :: content(page='" + page + "')";
    }

    protected String render(String page) {
        return render(getLayout(), page);
    }
}
