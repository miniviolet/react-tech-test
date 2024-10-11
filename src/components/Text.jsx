import './../App.css'

function Text({copy, isLimited = false}) {
    return (
        <p className={`text ${isLimited && 'ellipsis'}`}>{copy}</p>
    )
}

export default Text