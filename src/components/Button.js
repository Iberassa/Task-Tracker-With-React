import Proptypes from 'prop-types'
function Button({color, text, onClick}) {
   
    return (
            <button onClick ={onClick} className='btn' style={{backgroundColor:color}}>{text}</button>
    )
}

Button.defaultProps={
    color: 'steelBlue'
}

Button.prototype ={
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func,
}

export default Button
