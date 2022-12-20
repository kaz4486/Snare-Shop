import { Product } from './db/products.entity';
import { ProductsDataService } from './products-data.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsDataService);
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    getProductsByName(searchPhrase: string): Promise<Product[]>;
}
