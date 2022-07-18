import Card from 'react-bootstrap/Card';
import Pubs from '../data/publications.json'
import * as Icon from 'react-bootstrap-icons'
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function BibTex(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Icon.Quote variant="primary" onClick={handleShow}>
                Launch demo modal
            </Icon.Quote>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BibTeX</Modal.Title>
                </Modal.Header>
                <Modal.Body><pre>{props.pub.bibtex}</pre></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}




export default function Publications() {


    return (<section id="publications">
        <h1>Publications</h1>
        {Pubs.map(pub =>
            <div>
                <Card border="primary" class="Publication-card">
                    <Card.Header>{pub.title} ({pub.issued['date-parts']}) <a href={pub.download}><Icon.FilePdf /></a>  <BibTex pub={pub} /></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {pub.abstract}
                                {' '}
                            </p>

                            {pub.author.map(author => <a href={author.link}><footer className="text-muted">{author.family} {author.given}</footer></a>)}


                        </blockquote>
                    </Card.Body>
                    {/* <Card.Footer>Test</Card.Footer> */}
                </Card>
                <br></br>
            </div>


        )}

    </section>)
}