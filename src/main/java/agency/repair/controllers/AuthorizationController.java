package agency.repair.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AuthorizationController extends BaseController {

    @Override
    protected String getLayout() {
        return "layouts/no-content";
    }

    @RequestMapping("/")
    public String login() {
        return this.render("login");
    }

}
