import ProductCard from "@/app/components/ProductCard";

export default function TShirtsPage () {
    const products = [
        {
            id:1,
            slug:"Classic-Tee",
            title: "Classic Tee",
            description: "A timeless cotton T-shirt.",
            price: 25.0,
            imgUrl: "/images/products/accessories/classicTee.jpg",
        },
        {
            id:2,
            slug: "v-neck-tee",
            title: "V-Neck Tee",
            description: "Soft V-Neck in multiple colors.",
            price: 30.0,
            imgUrl: "/images/products/accessories/vneck.jpg",
        },
        {
            id:1,
            slug:"Classic-Tee",
            title: "Classic Tee",
            description: "A timeless cotton T-shirt.",
            price: 25.0,
            imgUrl: "/images/products/accessories/classicTee.jpg",
        },
        {
            id:2,
            slug: "v-neck-tee",
            title: "V-Neck Tee",
            description: "Soft V-Neck in multiple colors.",
            price: 30.0,
            imgUrl: "/images/products/accessories/vneck.jpg",
        },
        {
            id:2,
            slug: "v-neck-tee",
            title: "V-Neck Tee",
            description: "Soft V-Neck in multiple colors.",
            price: 30.0,
            imgUrl: "/images/products/accessories/vneck.jpg",
        },
        {
            id:2,
            slug: "v-neck-tee",
            title: "V-Neck Tee",
            description: "Soft V-Neck in multiple colors.",
            price: 30.0,
            imgUrl: "/images/products/accessories/vneck.jpg",
        }];
    return (
        <div className="p-6 flex flex-wrap gap-y-6 gap-x-0">
            {products.map(p => (
                <ProductCard key={p.id} product={p}/>
            ))}
        </div>
    );
}