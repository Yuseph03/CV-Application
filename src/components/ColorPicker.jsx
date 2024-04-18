export default function ColorPicker({color, handleColor}) {
    return (
    <div>
        <h3>Color</h3>
        <input type="color" value={color} id="color-input" onChange={handleColor}/>
    </div>
    )
}