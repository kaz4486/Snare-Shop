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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const create_order_dto_1 = require("./dto/create-order.dto");
const orders_data_service_1 = require("./orders-data.service");
const common_1 = require("@nestjs/common");
const date_helper_1 = require("../shared/helpers/date.helper");
let OrdersController = class OrdersController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getAllOrders() {
        const orders = await this.orderService.getAllOrders();
        return orders.map((i) => this.mapOrderToExternal(i));
    }
    async geOrderById(id) {
        const order = await this.orderService.getOrderById(id);
        if (order === undefined || order === null) {
            throw new common_1.NotFoundException();
        }
        return this.mapOrderToExternal(order);
    }
    async addOrder(order) {
        return await this.orderService.addOrder(order);
    }
    mapOrderToExternal(order) {
        const user = {
            firstName: order.user.firstName,
            lastName: order.user.lastName,
            email: order.user.email,
            street: order.user.street,
            house_number: order.user.house_number,
            city: order.user.city,
            id: order.user.id,
        };
        return Object.assign(Object.assign({}, order), { user: user, orderedProducts: order.orderedProducts.map((i) => {
                const orderedProduct = {
                    id: i.id,
                    productId: i.product.id,
                    productName: i.product.name,
                    price: i.price,
                    count: i.count,
                    comment: i.comment,
                    orderId: order.id,
                };
                return orderedProduct;
            }), createdAt: (0, date_helper_1.dateToArray)(order.createdAt) });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe({ version: '4' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "geOrderById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "addOrder", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_data_service_1.OrdersDataService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map