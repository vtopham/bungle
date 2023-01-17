
export default function Header() {
    return(
        <div className = "header-container">
            <div className = "header-logo">
                <h2>Bungle</h2>
            </div>
            <div className = "search-fields">
                <input className = "search-food left-input-end" placeholder = "Tacos, burgers, sushi..."/>
                <input className = "search-zip right-input-end" placeholder = "Zip code"/>
            </div>
            <button>Search!</button>
        </div>
    )
}

