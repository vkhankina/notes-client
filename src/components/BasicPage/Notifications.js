import { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import NotificationsContext from "../../contexts/notifications";

function Notifications() {
  const { notifications, close } = useContext(NotificationsContext);

  const variants = {
    success: "success",
    info: "info",
    warn: "warning",
    error: "danger",
  };

  return (
    <div>
      {notifications.map((n) => (
        <Alert
          key={n.id}
          variant={variants[n.level]}
          dismissible
          onClose={() => close(n.id)}
        >
          <p>{n.text}</p>
        </Alert>
      ))}
    </div>
  );
}

export default Notifications;
