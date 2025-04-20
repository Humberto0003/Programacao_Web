// Define as propriedades esperadas pelo componente SortButton
interface SortButtonProps {
	asc: boolean; // Indica a ordem atual (ascendente ou descendente)
	onToggle: () => void; // Função chamada ao clicar no botão
}

// Componente que exibe um botão para alternar a ordenação
export default function SortButton({ asc, onToggle }: SortButtonProps) {
	return (
		<button
			onClick={onToggle}
			className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
		>
			Ordenar por preço: {asc ? "Menor → Maior" : "Maior → Menor"}
		</button>
	);
}
