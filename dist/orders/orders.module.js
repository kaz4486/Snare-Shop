"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const ordered_products_repository_1 = require("./db/ordered-products.repository");
const users_repository_1 = require("./../users/db/users.repository");
const products_repository_1 = require("../products/db/products.repository");
const order_repository_1 = require("./db/order.repository");
const common_1 = require("@nestjs/common");
const orders_controller_1 = require("./orders.controller");
const orders_data_service_1 = require("./orders-data.service");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [orders_controller_1.OrdersController],
        providers: [
            orders_data_service_1.OrdersDataService,
            order_repository_1.OrderRepository,
            products_repository_1.ProductRepository,
            users_repository_1.UserRepository,
            ordered_products_repository_1.OrderedProductRepository,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                order_repository_1.OrderRepository,
                ordered_products_repository_1.OrderedProductRepository,
                products_repository_1.ProductRepository,
                users_repository_1.UserRepository,
            ]),
        ],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map