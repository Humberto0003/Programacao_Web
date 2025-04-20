// Define as propriedades esperadas pelo componente ProductCard
interface ProductCardProps {
	name: string;
	description: string;
	price: number;
	image: string;
}

// Componente que exibe as informações de um produto em um card
export default function ProductCard({
	name,
	description,
	price,
	image,
}: ProductCardProps) {
	return (
		<div className="border border-gray-700 rounded-2xl p-4 shadow-md bg-gray-800 hover:scale-105 transition-transform">
			<img
				src={image}
				alt={name}
				className="w-full h-48 object-contain rounded-lg bg-gray-900"
			/>
			<h2 className="text-xl font-bold mt-3 text-white">{name}</h2>
			<p className="text-gray-400 text-sm mt-1">{description}</p>
			<p className="text-green-400 font-semibold mt-2">
				R$ {price.toFixed(2)}
			</p>
		</div>
	);
}