import React, { useState } from "react";

import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import {} from '../store/actions/actions'
export default function ChatComponent() {
  return (
    <div>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              required
              type="text"
              name="name"
              value={username}
              onChange={e => setUsername(e.target.value)}
              id="username"
              placeholder="enter your name"
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
   <p>Online Guys: </p>
   
    </div>
  );
}
