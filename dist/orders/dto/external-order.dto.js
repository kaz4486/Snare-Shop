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
exports.ExternalOrderedUserDto = exports.ExternalOrderedProductDto = exports.ExternalOrderDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class ExternalOrderDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ExternalOrderDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExternalOrderedUserDto),
    __metadata("design:type", ExternalOrderedUserDto)
], ExternalOrderDto.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExternalOrderedProductDto),
    __metadata("design:type", Array)
], ExternalOrderDto.prototype, "orderedProducts", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExternalOrderDto.prototype, "totalPrice", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Array)
], ExternalOrderDto.prototype, "createdAt", void 0);
exports.ExternalOrderDto = ExternalOrderDto;
class ExternalOrderedProductDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ExternalOrderedProductDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ExternalOrderedProductDto.prototype, "orderId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ExternalOrderedProductDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(0),
    (0, class_validator_1.MaxLength)(25),
    __metadata("design:type", String)
], ExternalOrderedProductDto.prototype, "productName", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExternalOrderedProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExternalOrderedProductDto.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], ExternalOrderedProductDto.prototype, "comment", void 0);
exports.ExternalOrderedProductDto = ExternalOrderedProductDto;
class ExternalOrderedUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExternalOrderedUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExternalOrderedUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExternalOrderedUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExternalOrderedUserDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExternalOrderedUserDto.prototype, "house_number", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ExternalOrderedUserDto.prototype, "city", void 0);
exports.ExternalOrderedUserDto = ExternalOrderedUserDto;
//# sourceMappingURL=external-order.dto.js.map