import { Form, Button, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
const Exercise = () => {
  return (
    <Card>
      <Card.Body>
        <Table striped bordered hober>
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
              <td>Felt a little sore after</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export default Exercise;
