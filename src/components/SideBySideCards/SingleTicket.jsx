import './SideBySideCards.css';

const SingleTicket = ({onClick, url1}) => 
{
    return (
    <>
      <div className='ticket-showcase' onClick={onClick}>      
        <img src={url1}/>
      </div>
    </>
    )
}
     
export default SingleTicket