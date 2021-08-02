package agency.repair.services.abstraction;

import agency.repair.entities.Order;
import agency.repair.entities.User;

import java.util.List;

public interface OrderService {

    List<Order> getUserOrders(User user);

    Order getOrderById(int id);

}
