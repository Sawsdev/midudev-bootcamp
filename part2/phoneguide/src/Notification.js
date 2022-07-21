import './notification.css';
export const Notification = ({message}) => {
    if(!message.message || message.message === null)
    {
        return null;
    }
    return (<div className={message.type}>
        {message.message}
    </div>)
}