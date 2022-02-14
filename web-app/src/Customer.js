

export default function Customer()
{
    function handleButton()
    {
        console.log("Button Click Handled")
    }
    return (
        <h1>This is Customer Component</h1>,
        <button onClick={handleButton}>Customer Click</button>
        )
}