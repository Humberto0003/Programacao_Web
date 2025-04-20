import ProductList from "@/components/ProductList";
import products from "@/data/products";

export default function Home() {
	return (
		<main className="min-h-screen p-6 bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-300">
			<h1 className="text-4xl font-bold mb-8 text-center">
				NerdCore - vibe tech e gamer!
			</h1>
			<ProductList products={products} />
		</main>
	);
}