import { Product } from './db/products.entity';
import { ProductRepository } from './db/products.repository';
export declare class ProductsDataService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    private products;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    getProductsByName(name: string): Promise<Product[]>;
    updateProductRating(id: string, stars: number): Promise<Product>;
}
