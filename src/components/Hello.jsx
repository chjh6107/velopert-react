const Hello = ({name,color,isSpecial}) => {
    return (
    <div style={{color}}>
        하잉 {name}
        {isSpecial&&<b>*</b>};
    </div>
    );
}
Hello.defaultProps = {
    name:"default"
}
export default Hello;