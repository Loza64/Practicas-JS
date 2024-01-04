import { useState, useEffect } from 'react';
import { getRandomApod } from '../../../services/apod.service';

function Random({ updateApods, addElementToApods, handleIsLoading }) {

 const [count, setCount] = useState(0);

 useEffect(() => {
  updateApods([]);
 }, []);

 useEffect(() => {
  if (count != 0) getData();
 }, [count]);

 const getData = async () => {
  handleIsLoading(true);
  let response = await getRandomApod();
  // console.log(response);

  handleIsLoading(false);
  addElementToApods(response);
 };

 const handleCount = (e) => {
  e.preventDefault();
  setCount(prev => prev += 1);
 };

 return (
  <div className="controls controls--stats container">
   <p>
    Count:
    <span id="count" className="control">{count}</span>
   </p>
   <form id="form" className="form" onSubmit={handleCount}>
    <button type="submit" id="btn-explore" className="control">
     Explore
    </button>
   </form>
  </div>
 );
}

export default Random;