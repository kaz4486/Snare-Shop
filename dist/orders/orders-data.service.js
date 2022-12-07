"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersDataService = void 0;
const ordered_products_entity_1 = require("./db/ordered-products.entity");
const common_1 = require("@nestjs/common");
const products_repository_1 = require("../products/db/products.repository");
const order_repository_1 = require("./db/order.repository");
const ordered_products_repository_1 = require("./db/ordered-products.repository");
const products_entity_1 = require("../products/db/products.entity");
const orders_entity_1 = require("./db/orders.entity");
const users_entity_1 = require("../users/db/users.entity");
let OrdersDataService = class OrdersDataService {
    constructor(orderRepository, productRepository, orderedProductRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.orderedProductRepository = orderedProductRepository;
    }
    getAllOrders() {
        return this.orderRepository.find();
    }
    getOrderById(id) {
        const order = this.orderRepository.findOneBy({ id });
        return order;
    }
    async saveOrderedProducts(productsToSave) {
        const orderedProducts = [];
        productsToSave.map(async (product) => {
            const orderedProduct = new ordered_products_entity_1.OrderedProduct();
            const productFromDB = await this.productRepository.findOneBy({
                id: product.id,
            });
            orderedProduct.product = new products_entity_1.Product();
            orderedProduct.product.id = productFromDB.id;
            orderedProduct.product.name = productFromDB.name;
            orderedProduct.count = product.count;
            orderedProduct.price = productFromDB.price;
            orderedProduct.comment = product.comment;
            await this.orderedProductRepository.save(orderedProduct);
            orderedProducts.push(orderedProduct);
        });
        return orderedProducts;
    }
    async addOrder(order) {
        const orderToSave = new orders_entity_1.Order();
        orderToSave.orderedProducts = await this.saveOrderedProducts(order.products);
        orderToSave.user = new users_entity_1.User();
        orderToSave.user.firstName = order.user.firstName;
        orderToSave.user.lastName = order.user.lastName;
        orderToSave.user.email = order.user.email;
        orderToSave.user.city = order.user.city;
        orderToSave.user.house_number = order.user.house_number;
        orderToSave.user.street = order.user.street;
        orderToSave.createdAt = new Date();
        orderToSave.totalPrice = order.totalPrice;
        return await this.orderRepository.save(orderToSave);
    }
};
OrdersDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository,
        products_repository_1.ProductRepository,
        ordered_products_repository_1.OrderedProductRepository])
], OrdersDataService);
exports.OrdersDataService = OrdersDataService;
//# sourceMappingURL=orders-data.service.js.map