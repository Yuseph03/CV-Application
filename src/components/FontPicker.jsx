export default function FontPicker({handleFont}) {
    return (
    <>
        <p>Fonts</p>
        <div id="font-options">
          <button className="serif" onClick={handleFont}>
            Aa
          </button>
          <button className="sans-serif" onClick={handleFont}>
            Aa
          </button>
          <button className="monospace" onClick={handleFont}>
            Aa
          </button>
        </div>
    </>
    )
}