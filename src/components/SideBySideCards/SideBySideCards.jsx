import './SideBySideCards.css';

const SideBySideCards = ({url1, url2}) => 
{
    return (
    <>
      <div className='ticket-spread'>      
        <img src={url1}/>
        <img src={url2}/>
      </div>
    </>
    )
}
     
export default SideBySideCards