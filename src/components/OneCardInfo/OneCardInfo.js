import mainClass from "./OneCardInfo.module.css";


function OneCardInfo (cardInfo) {
    console.log(cardInfo);
    return (
        <>
            <ul className="card_info_block">
                {
                    cardInfo.cardInfo.map( (item) =>
                        <li className={mainClass.card_info_item}>

                        </li>
                    )
                }
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>cardInfo.cardInfo</span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.name}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Population : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.population}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Climate : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.climate}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Diameter : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.diameter}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Gravity : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.gravity}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Surface water : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.surface_water}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Terrain : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.terrain}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Orbital period : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.orbital_period}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Rotation period : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.rotation_period}</span>
                </li>
                <li className={mainClass.card_info_item}>
                    <span className={mainClass.card_info_name}>Created : </span>
                    <span className={mainClass.card_info_value}>{cardInfo.cardInfo.created}</span>
                </li>
            </ul>
            <div className={mainClass.card_info_item}>
                <span className={mainClass.card_info_name}>Films : </span>
                <ol className={mainClass.card_info_list}>
                    {
                        cardInfo.cardInfo?.films?.map(film => <li>
                            <a target='_blank' href={film}>{film}</a>
                        </li>)
                    }
                </ol>
            </div>
            <div className={mainClass.card_info_item}>
                <span className={mainClass.card_info_name}>Residents : </span>
                <ol className={mainClass.card_info_list}>
                    {
                        cardInfo.cardInfo?.residents?.map(resident => <li>
                            <a target='_blank' href={resident}>{resident}</a>
                        </li>)
                    }
                </ol>
            </div>
        </>


    )
}

export default OneCardInfo;