import { useContext } from "react";
import { NotificationContext } from "../App";

const Notification = () => {

    const { notification } = useContext(NotificationContext);

    if(!notification.visible) {
        return null;
    }

  return (
      <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)', // center the notification horizontally
              backgroundColor: 'lightblue',
              padding: '10px 20px',
              zIndex: 1000, // make sure the notification is on top of everything
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
        }}
      >
        { notification.message }      
    </div>
  )
}

export default Notification;