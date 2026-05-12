function SummaryCard(props) {
    return (
        <div className="bg-white rounded-x1 shadow p-6 flex flex-col gap-2">
            <span className="text-sm text-gray-500">{props.titulo}</span>
            <span className="text-2xl font-bold text-gray-800">{props.valor}</span>
        </div>
    )   
}

export default SummaryCard



