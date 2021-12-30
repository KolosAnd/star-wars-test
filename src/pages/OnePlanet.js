import {useFetching} from "../hooks/useFetching";
import PlanetService from "../API/PlanetService";
import {useEffect, useState} from "react";
import Loader from "../components/Loader/Loader";
import {useParams} from "react-router-dom";
import OneCardInfo from "../components/OneCardInfo/OneCardInfo";
import Header from "../components/Header/Header";

function OnePlanet () {
    const params = useParams();
    const [card, setCard] = useState({});

    const [fetchCard, isCardLoading, cardError] = useFetching(async (id) => {
        setCard([]);
        const response = await PlanetService.getPlanetById(id);
        setCard(response.data);
    });

    useEffect(() => {
        fetchCard(params.id);
    },[]);

    return (
        <>
            <Header/>
            <section className="one_planet_page">
                <div className="container">
                    <div className="one_planet_wrap">
                        <h1 className="one_planet_title">Information about planet - {card.name}</h1>
                        {cardError &&
                            <h1>error: ${cardError}</h1>
                        }
                        {isCardLoading &&
                            <div className="loader"><Loader/></div>
                        }
                        <OneCardInfo cardInfo={card}/>
                    </div>
                </div>
            </section>
        </>

    )
}

export default OnePlanet;