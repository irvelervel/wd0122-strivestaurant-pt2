import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// name --> string
// phone --> string/number
// numberOfPeople --> string/number
// dateTime --> string
// smoking --> boolean
// specialRequests --> string

class ReservationForm extends Component {
  state = {
    // this state object is going to collect all our input values
    // AS WE'RE TYPING THEM!
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      dateTime: '',
      smoking: false,
      specialRequests: '',
    },
  }

  render() {
    return (
      <div className="my-2 text-center">
        <h2>Book your table here!</h2>
        <Form>
          <Form.Group>
            <Form.Label>What's your name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert your name here"
              value={this.state.reservation.name}
              // now from here we also need to CHANGE the value of name in the state!
              onChange={(e) => {
                // console.log('ciao!')
                this.setState({
                  reservation: {
                    name: e.target.value, // this is carrying the character pressed!
                  },
                })
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>What's your phone?</Form.Label>
            <Form.Control type="tel" placeholder="Insert your phone here" />
          </Form.Group>

          <Form.Group>
            <Form.Label>How many are you?</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>When are you coming?</Form.Label>
            <Form.Control type="datetime-local" />
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="Do you smoke?" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="info" type="submit">
            Send it!
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm
