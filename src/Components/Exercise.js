import { Form, Button, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
const Exercise = () => {
  return (
    <Card>
      <Card.Body flex>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Sets</th>
              <th>Repetitions</th>
              <th>Weight</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bench Press</td>
              <td>4</td>
              <td>8</td>
              <td>225</td>
              <td>Felt good</td>
            </tr>
            <tr>
              <td>Deadlift</td>
              <td>3</td>
              <td>4</td>
              <td>315</td>
              <td>Pain in lower back</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export default Exercise;
