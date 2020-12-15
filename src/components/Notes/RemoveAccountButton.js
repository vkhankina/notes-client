import { useContext } from "react";
import AuthContext from "../../contexts/auth";
import NotificationsContext from "../../contexts/notifications";
import RemoveButton from "../buttons/RemoveButton";
import notesService from "../../services/notes";

function RemoveAccountButton() {
  const { setUser } = useContext(AuthContext);
  const notify = useContext(NotificationsContext);
  const onOk = () => {
    notesService("users/", "delete")
      .then(() => setUser(null))
      .catch(() => notify.error("Failed to delete account!"));
  };
  return (
    <RemoveButton
      variant="danger"
      onOk={onOk}
      message="Are you sure to delete your account?"
    >
      Delete My Account
    </RemoveButton>
  );
}

export default RemoveAccountButton;
