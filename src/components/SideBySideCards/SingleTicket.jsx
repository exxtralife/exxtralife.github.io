import './SideBySideCards.css';

const SingleTicket = ({url1}) => 
{
    return (
    <>
      <div className='ticket-showcase'>      
        <img src={url1}/>
      </div>
    </>
    )
}
     
export default SingleTicket