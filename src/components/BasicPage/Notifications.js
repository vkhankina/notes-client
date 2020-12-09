import { useContext } from "react";
import NotificationsContext from "../../contexts/notifications";

function Notifications() {
  const { notifications, close } = useContext(NotificationsContext);

  return (
    <div className="Notifications-container">
      {notifications.map((n) => (
        <div key={n.id} className={`Notification Notification-${n.level}`}>
          <p>{n.text}</p>
          <button className="Notification-close" onClick={() => close(n.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Notifications;
