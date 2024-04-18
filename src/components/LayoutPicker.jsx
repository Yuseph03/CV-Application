export default function LayoutPicker({handleLayout, color}) {
    return (
        <div id="layout-options">
            <h3>Layout</h3>
            <button 
            className='layout1'
            onClick={handleLayout}
            style={{background: "linear-gradient(to bottom,"+ color +" 50%, white 50%)" }}></button>
            <button 
            className='layout2'
            onClick={handleLayout}
            style={{background: "linear-gradient(to left,"+ color +" 50%, white 50%)" }}></button>
            <button 
            className='layout3'
            onClick={handleLayout}
            style={{background: "linear-gradient(to right,"+ color +" 50%, white 50%)" }}></button>
        </div>
    )
}