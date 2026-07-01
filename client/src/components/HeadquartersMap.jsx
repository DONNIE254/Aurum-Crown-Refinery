function HeadquartersMap() {

    return (

        <section className="headquarters-map">

            <h2>
                CORPORATE HEADQUARTERS
            </h2>

            <p>
                Aurum Crown Refinery Global Operations Center
            </p>

            <div className="map-container">

                <iframe
                    title="Aurum Crown Headquarters"
                    src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
                    width="100%"
                    height="450"
                    style={{
                        border:0,
                        borderRadius:"15px"
                    }}
                    loading="lazy"
                    allowFullScreen
                />

            </div>

        </section>
    );
}

export default HeadquartersMap;