const ActionButton = ( props ) => {
    return (
        <button {...props.otherprops }>{ props.children }</button>
    )
}

export default ActionButton;