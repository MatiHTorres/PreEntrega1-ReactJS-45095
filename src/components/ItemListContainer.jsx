const ItemListContainer = ({greeting}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-warning" role="alert">
                        <h1>{greeting}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;