import React, {Component} from "react";
import {Button, Card, Image, Col, Row} from "react-bootstrap";

import {Link} from 'react-router-dom';

class ItemCard extends Component {
    render() {
        const item = this.props.item;
        return (
            <Card>
                <Row>
                    <Col md={2}>
                        <Image src={`http://127.0.0.1:9000${item.image_url}`} fluid/>
                    </Col>
                    <Col md={10}>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description || 'No description so far...'}
                            </Card.Text>
                            <Link to={`/items/${this.props.item.id}`}><Button variant="primary">View it!</Button></Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default ItemCard;