import {useEffect} from "react";


function useScrollToBottom (element, data)
{
    const scrollToBottom = () =>
    {
        if(element) 
            {
                element.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            }
    }

    useEffect(() => {
        scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
}

export default useAutoScroll;
