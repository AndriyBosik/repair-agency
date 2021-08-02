package agency.repair.controllers;

import agency.repair.config.ProjectURL;
import agency.repair.entities.User;
import agency.repair.services.abstraction.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.getAll();
    }

//    @GetMapping("/profile")
//    public String profile() {
//        return this.render("profile");
//    }
//
//    @GetMapping("/orders")
//    public String orders() {
//        return this.render("orders");
//    }

}
