import {useFetching} from "../hooks/useFetching";
import PlanetService from "../API/PlanetService";
import {getPageCount} from "../utils/pages";
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Pagination from "../components/Pagination/Pagination";
import {useEffect, useState} from "react";
import Loader from "../components/Loader/Loader";


function Planets() {
    const [cards, setCards] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);


    const [fetchCards, isCardsLoading, cardError] = useFetching(async ( page,limit) => {
        setCards([]);
        const response = await PlanetService.getPlanets( page,limit);
        setCards(response.data.results);
        const totalCount = response.data.count;
        setTotalPages(getPageCount(totalCount, limit));
    });


    useEffect(() => {
        fetchCards(page,limit)
    }, [page, limit]);


    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className="App">
            <Header/>
            {cardError &&
                <h1>error: ${cardError}</h1>
            }
            {
                <CardList cards={cards}/>
            }
            {isCardsLoading &&
                <div className="loader"><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Planets;