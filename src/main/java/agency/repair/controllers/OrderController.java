package agency.repair.controllers;

import agency.repair.entities.Order;
import agency.repair.services.abstraction.OrderService;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@Log4j
public class OrderController extends BaseController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders/{orderId}")
    public String showOrder(Model model, @PathVariable int orderId) {
        Order order = orderService.getOrderById(orderId);
        model.addAttribute("order", order);

        return this.render("order");
    }

}
