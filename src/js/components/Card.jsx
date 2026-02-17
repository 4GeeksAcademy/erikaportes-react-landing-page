import rigoImage from "../../img/rigo-baby.jpg";

const cards = [
    {
        image: rigoImage,
        title: "Servicio Web",
        text: "Creamos sitios web profesionales.",
        buttonText: "Ver más",
    },
    {
        image: "https://picsum.photos/500/325",
        title: "Marketing Digital",
        text: "Estrategias para atraer clientes.",
        buttonText: "Contratar",
    },
    {
        image: rigoImage,
        title: "Diseño UX/UI",
        text: "Diseño de apps y sitios web.",
        buttonText: "Mas info",
    },
    {
        image: "https://picsum.photos/500/325",
        title: "Brandig",
        text: "Diseñamos tu logo y tu marca.",
        buttonText: "Contratar servicio",
    }
]


export const Card = (card) => {
    return (
        <>

            <div className="container mt-5">

                <div className="row row-cols-1 row-cols-md-4 g-4">

                    {cards.map((card) => (

                        <div key={crypto.randomUUID()} className="col">

                            <div className="card h-100">

                                <img src={card.image} className="card-img-top" alt={card.title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <button className="btn btn-primary">
                                        {card.buttonText}
                                    </button>
                                </div>

                            </div>

                        </div>
                    )
                    )
                    }

                </div>

            </div>

        </>
    );
};





