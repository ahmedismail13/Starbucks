import { Order } from "../Entity/Order";
import { OrderDetail } from "../Entity/OrderDetail";
import { Product } from "../Entity/Product";
import { Role, User, UserSource } from "../Entity/User";

class UserService {
  public async createUser(userData: any): Promise<any> {
    // const user: User = await User.save({
    //   firstName: "Ahmed",
    //   lastName: "Ismail",
    //   email: "aismail@adam.ai",
    //   password: "123456789",
    //   role: Role.USER,
    //   userSource: UserSource.EMAIL,
    //   address: [
    //     {
    //       city: "Cairo",
    //       area: "Masr El gdeda",
    //       street: "Hegaz st.",
    //       building: 34,
    //       floor: 1,
    //       apartment: 103,
    //       zipCode: 11757,
    //     },
    //   ],
    // } as User);

    // const product1: Product = await Product.save({
    //   name: "Product 1",
    //   description: "Product 1 description",
    //   unitPrice: 100,
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //   type: "Electronics",
    //   category: "Mobile",
    //   availableStock: 10,
    // } as Product);

    // const product2: Product = await Product.save({
    //   name: "Product 2",
    //   description: "Product 2 description",
    //   unitPrice: 200,
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //   type: "Electronics",
    //   category: "Mobile",
    //   availableStock: 10,
    // } as Product);

    // const orderDetails: OrderDetail[] = [
    //   {
    //     productId: product1.id,
    //     productName: product1.name,
    //     productImageUrl: product1.imageUrl,
    //     unitPrice: product1.unitPrice,
    //     quantity: 2,
    //   } as OrderDetail,
    //   {
    //     productId: product2.id,
    //     productName: product2.name,
    //     productImageUrl: product2.imageUrl,
    //     unitPrice: product2.unitPrice,
    //     quantity: 1,
    //   } as OrderDetail,
    // ];

    // const order: Order = await Order.save({
    //   userId: user.id,
    //   totalPrice: orderDetails.reduce(
    //     (acc, curr) => acc + curr.unitPrice * curr.quantity,
    //     0
    //   ),
    //   discount: 0,
    //   status: "Pending",
    //   address: {
    //     city: "Cairo",
    //     area: "Masr El gdeda",
    //     street: "Hegaz st.",
    //     building: 34,
    //     floor: 1,
    //     apartment: 103,
    //     zipCode: 11757,
    //   },
    //   reordered: false,
    //   orderDetail: orderDetails,
    // } as Order);

    // return {
    //   user,
    //   order,
    //   product1,
    //   product2,
    // };
    return {};
  }
}

export default UserService;
