"use client"; // Renderizado no lado do cliente
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";
import SortButton from "./SortButton";

// Define as propriedades esperadas pelo componente ProductList
interface ProductListProps {
	products: Product[]; // Lista de produtos a ser exibida
}

// Componente que exibe uma lista de produtos com opção de ordenação
export default function ProductList({ products }: ProductListProps) {
	// Estado para controlar a ordem de ordenação (ascendente ou descendente)
	const [asc, setAsc] = useState(true);

	// Ordena os produtos com base no preço e na ordem definida
	const sortedProducts = [...products].sort((a, b) =>
		asc ? a.price - b.price : b.price - a.price
	);

	return (
		<div>
			{/* Botão para alternar a ordem de ordenação */}
			<div className="flex justify-end mb-4">
				<SortButton asc={asc} onToggle={() => setAsc(!asc)} />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{sortedProducts.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
}