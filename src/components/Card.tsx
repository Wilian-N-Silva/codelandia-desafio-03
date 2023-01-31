interface CardProps {
    color: string
}

export function Card({ color }: CardProps) {
    return (
        <li className="cards-container-list-item">
            <div className="cards-container-list-item-image-bg" style={{ backgroundColor: `#${color}` }} />
            <div className="cards-container-list-item-info">
                <div>Título do Card</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
            </div>

        </li>
    )
}