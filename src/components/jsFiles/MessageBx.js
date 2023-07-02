import '../cssFiles/messageBx.css'


const MessageBx = ({visiblity,message}) => {
    return (
        <>
            <div id={'warning'} className={`messageBx ${visiblity}`}>
                <div className="messageBx-content">
                    <h1 className='messageBx-content__heading'>{'warning'}</h1>
                    <hr />
                    <p className='messageBx-content__info'><span>{`🙂`}</span> {message}</p>
                </div>
            </div>
        </>
    )
}


export default MessageBx;