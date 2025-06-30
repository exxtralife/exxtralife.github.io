import './SideBySideCards.css';

const SideBySideCards = ({url1, url2}) => 
{
      var isPhone = window.screen.width < window.screen.height;

      if(isPhone)
        {
          return (
          <>
            <div className='ticket-spread'>      
              <img src={url1} width="100%"/>
              <img src={url2}/>
            </div>
          </>
          )
        }

      else
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
      
}
export default SideBySideCards