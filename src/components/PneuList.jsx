import { useState, useEffect } from 'react';
import { Api } from '../Api/Api';

export const PneusCard = () =>{
    const [selectPneu, setSelectPeneu] = useState(false);
    const [cardPneu, setCardPneu] = useState(undefined)
    const [loading, setLoading] = useState(false);

	useEffect(() => {
	    const loadData = async () => {
	        const response = await Api.buildAppGetRequest(Api.readAllTyreUrl(), true);
	
	        const result = await response.json();

	        setCardPneu(result);
			setLoading(true);
	    };
	    loadData();
	}, []);

    if (loading) {
        return (
          <div className="carregando">
            <h1>Carregando personagem...</h1>
          </div>
        );
      }

    return (
        <div>
            {cardPneu.map((c)=>(
                <div class="card" >
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{c.Brand}</h5>
                        <p class="card-text">{c.Description}</p>
                        <p class="card-text">{c.Model}</p>
                        <a href="/" class="btn btn-primary">{c.Price}</a>
                    </div>
                </div>
            ))}
        </div>
        
    )
}
