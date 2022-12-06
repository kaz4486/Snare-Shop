export declare class ExternalOrderDto {
    id: string;
    user: ExternalOrderedUserDto;
    orderedProducts: Array<ExternalOrderedProductDto>;
    totalPrice: number;
    createdAt: Array<number>;
}
export declare class ExternalOrderedProductDto {
    id: string;
    orderId: string;
    productId: string;
    productName: string;
    price: number;
    count: number;
    comment: string;
}
export declare class ExternalOrderedUserDto {
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    house_number: number;
    city: string;
}
