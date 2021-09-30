import React from "react";
import {
  DonateContainer,
  Container,
  Box,
  Formdiv,
  CreditCard,

  
} from "./DonationStyles";
import Cards from "react-credit-cards";
import useForm from "../../constants/form";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";

const Donation = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (

    <DonateContainer>
      <Container>
        <Box className="justify-content-center align-items-center">
          <Formdiv>
            <CreditCard>
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </CreditCard>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control 
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="cardType"
                      id="cardType"
                      data-testid="cardType"
                      placeholder="Card Type"
                      value={values.cardType}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ctype}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Expiration Date"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="Security Code"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardPostalCode"
                      data-testid="cardPostalCode"
                      name="cardPostalCode"
                      placeholder="Postal Code"
                      value={values.cardPostalCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cpostal}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
              >
                Donate
              </Button>
            </Form>
          </Formdiv>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </Box>
      </Container>
    </DonateContainer>

  );
};

export default Donation;
