function LoadingScreen() {

    return (
        <div className="loading-screen">

            <div className="loading-content">

                <img
                    src="/logos/aurum-logo.png"
                    alt="Aurum Crown"
                    className="loading-logo"
                />

                <h1>
                    AURUM CROWN
                </h1>

                <p>
                    Purity • Integrity • Global Trust
                </p>

                <div className="loading-spinner"></div>

            </div>

        </div>
    );
}

export default LoadingScreen;