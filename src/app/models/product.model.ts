export interface Product {
    product_name: string;
    product_id: number;
    product_presentation: string;
    product_price: number;
    product_stock: number;
    product_active: boolean;
    brand_id: number | null;
    category_id: number | null;
    product_type_id: number | null;
    heading_id: number | null;
}