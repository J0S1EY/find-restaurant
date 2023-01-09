import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rivew from './Rivew';


function OperatingHours({ OHours }) {
  console.log(OHours)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Working Time
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Restaurant Opening Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Monday : {OHours.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday : {OHours.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday : {OHours.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday : {OHours.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday : {OHours.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday : {OHours.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday : {OHours.Sunday}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}


export default OperatingHours