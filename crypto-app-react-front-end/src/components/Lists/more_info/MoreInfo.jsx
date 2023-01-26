import './MoreInfo.css';
import React, {useState, useEffect} from 'react';

const MoreInfo = (props) => {
    const [searchArr, setSerachArr] = useState([]);
  
    useEffect(async () => { // Fetch specipic coin data from CoinGecko API
        if (typeof props.moreInfo === 'string') {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${props.moreInfo}`);
                const data = await res.json();
                setSerachArr([data]);
            } catch(err) {
                console.error(err);
            }
        } 
    }, [props.moreInfo]);
    
    return(
        <>
            {searchArr.map(item => {
                return(
                    <div className="info-container" key={item.id}>
                        <img src={item.image.small} alt={item.id} />
                        <p>
                            <span>Dollar:</span>
                            &#x24;{item.market_data.current_price.usd}
                        </p>
                        <p>
                            <span>Euro:</span> 
                            &euro;{item.market_data.current_price.eur}
                        </p>
                        <p>
                            <span>Shekel:</span> 
                            &#8362;{item.market_data.current_price.ils}
                        </p>
                    </div>
                );
            })}
        </>
    );
}
export default MoreInfo;