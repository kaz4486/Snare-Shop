import { CreateUserDto } from './../../users/dto/create-user.dto';
export declare class CreateOrderDto {
    user: CreateUserDto;
    products: Array<CreateOrderedProductDto>;
    totalPrice: number;
}
export declare class CreateOrderedProductDto {
    id: string;
    name: string;
    count: number;
    comment: string;
    price: number;
}
