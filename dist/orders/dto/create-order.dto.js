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
exports.CreateOrderedProductDto = exports.CreateOrderDto = void 0;
const create_user_dto_1 = require("./../../users/dto/create-user.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class CreateOrderDto {
}
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_user_dto_1.CreateUserDto),
    __metadata("design:type", create_user_dto_1.CreateUserDto)
], CreateOrderDto.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateOrderedProductDto),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0,
        type: 'float',
    }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "totalPrice", void 0);
exports.CreateOrderDto = CreateOrderDto;
class CreateOrderedProductDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderedProductDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateOrderedProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderedProductDto.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateOrderedProductDto.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderedProductDto.prototype, "price", void 0);
exports.CreateOrderedProductDto = CreateOrderedProductDto;
//# sourceMappingURL=create-order.dto.js.map