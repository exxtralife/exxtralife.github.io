
import ImagePanel from "../../components/DragPanel/ImagePanel";
function Flashback() {
    const random_pos = () => {
        return { x: (Math.random() * window.innerWidth) - (window.innerWidth / 4), y: (Math.random() * window.innerHeight) - (window.innerHeight / 4) }
    }
     
    var start_i = Math.round( Math.random() * 180);
    var end_i = start_i + 25;
    //alert(String(start_i) + " " + String(end_i))
    let filemanes = [];
    for (var i = start_i; i < end_i; i++) {
        filemanes.push("/src/assets/oneyear-gallery/g" + String(i) +".png");
    }

    return (
        <>
            {filemanes.map( i_src => 
                (
                    <ImagePanel src ={i_src} position = {random_pos}/>
                ))}
        </>
    )
}

export default Flashback;