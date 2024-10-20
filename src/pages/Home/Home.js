import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import './Home.css'
import { useEffect , useState } from 'react';

export default function Home(){
    const [handleError , setError] = useState(null)
    const [loading, setLoading] = useState(true); 
    const [fetchdata , setData] = useState([]);
    const view = fetchdata.map((ele)=> <Card key={ele.id} title={ele.title} img={ele.image} price={ele.price} rating={ele.rating.rate}/>)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setTimeout(() => { // I used set time out here to see the loading because data not take any time on fetch
                setData(result);
                setLoading(false); 
              }, 2000); 
          } catch (error) {
            setError(error.message);
            setLoading(false); 
          }
        //  finally {
        //     setLoading(false); 
        //   }
        };
    
        fetchData();
      }, []);
  return(
    <div>
        <Header />
        <Banner />
        <div className='container '>
            <h3 className='main-title'>It’s How the West Is Worn</h3>
            <div className='cards m-top'>

                 {loading ? (<p>Loading...</p>) : handleError ? (<p>No Data to Show</p>) : (view )}
            </div>
        </div>
    </div>
  )  
}