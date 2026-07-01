function MarketWidget() {

    const metals = [

        {
            name: "Gold",
            price: "$3,320",
            change: "+1.2%"
        },

        {
            name: "Silver",
            price: "$36.20",
            change: "+0.8%"
        },

        {
            name: "Platinum",
            price: "$1,390",
            change: "+0.4%"
        },

        {
            name: "Palladium",
            price: "$1,150",
            change: "-0.2%"
        }

    ];

    return (

        <section className="market-widget">

            <h2>
                LIVE PRECIOUS METALS MARKET
            </h2>

            <div className="market-grid">

                {metals.map((metal, index) => (

                    <div
                        className="market-card"
                        key={index}
                    >

                        <h3>
                            {metal.name}
                        </h3>

                        <h1>
                            {metal.price}
                        </h1>

                        <p>
                            {metal.change}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default MarketWidget;