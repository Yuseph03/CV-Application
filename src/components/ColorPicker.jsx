export default function ColorPicker({color, handleColor}) {
    return (
    <>
        <p>Color</p>
        <input type="color" value={color} id="color-input" onChange={handleColor}/>
    </>
    )
}