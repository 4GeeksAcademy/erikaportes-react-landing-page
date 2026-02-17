
export function Footer() {

    const fechaActual = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <div className="container">
                <small>
                    Copyright © Your Website {fechaActual}
                </small>
            </div>
        </footer>
    );
}