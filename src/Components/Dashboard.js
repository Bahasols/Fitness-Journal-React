import { Card, Button, Alert } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
export function Dashboard() {
  const history = useNavigate();
  async function logoutHandler(e) {
    e.preventDefault();
    await signOut(auth)
      .then((userCredential) => {
        console.log(userCredential);

        history("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Card>
        <Card.Body>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={logoutHandler}>
              Log Out
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
