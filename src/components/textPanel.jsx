const TextPanel = () => 
{
    const deusCheck = (e) => 
        {
            e.target.value = "12";
        }

    return (
    <>
        <div class = "textPanel">
            escape will make me <input id="escapeField" onChange = {e => deusCheck(e)} type="text"></input>
        </div>
    </>
    )
}
export default TextPanel