import Card from 'react-bootstrap/Card';
import Pubs from '../data/publications.json'
import * as Icon from 'react-bootstrap-icons'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Icons from 'react-bootstrap-icons'
import { Badge } from 'react-bootstrap';


function BibTex(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (props.pub.bibtex === undefined || props.pub.bibtex === "") {
        return <></>
    } else {
        return (
            <>
                <Button variant="link" onClick={handleShow}><Icons.Quote /></Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>BibTeX</Modal.Title>
                        <Button variant="link" onClick={() => { navigator.clipboard.writeText(props.pub.bibtex) }}><Icons.Clipboard /></Button>
                    </Modal.Header>
                    <Modal.Body>{props.pub.bibtex}</Modal.Body>
                    <Modal.Footer>

                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

function PDF(props) {
    if (props.pub.download === undefined || props.pub.download === "") {
        return <></>
    } else {
        return (
            <Button variant="link" href={props.pub.download}><Icon.FilePdf /></Button>
        )

    }
}


export default function Research() {


    // return (<section id="research">
    //     <h1>Research <Button variant="link" onClick={() => { navigator.clipboard.writeText("https://adrien-wicht.github.io/profile/#research") }}><Icons.Link /></Button></h1>
    //     {Pubs.map(pub =>
    //         <>
    //             <Card border="primary" class="Publication-card">
    //                 <Card.Header><Badge>{pub.category}</Badge></Card.Header>
    //                 <Card.Header>{pub.title} ({pub.issued['date-parts']}) <Button variant="link" href={pub.download}><Icon.FilePdf /></Button>  <BibTex pub={pub} /></Card.Header>
    //                 <Card.Body>
    //                     <blockquote className="blockquote mb-0">
    //                         <p>
    //                             {' '}
    //                             {pub.abstract}
    //                             {' '}
    //                         </p>

    //                         {pub.author.map(author => <a href={author.link}><footer className="text-muted">{author.family} {author.given}</footer></a>)}


    //                     </blockquote>
    //                 </Card.Body>
    //             </Card>
    //             <br></br>
    //         </>


    //     )}

    // </section>)

    const Types = [...new Set(Pubs.map(e => JSON.stringify(e.category)))].map(JSON.parse);
    return (<section id="research">
        <h1>Research <Button variant="link" onClick={() => { navigator.clipboard.writeText("https://adrien-wicht.github.io/profile/#research") }}><Icons.Link /></Button></h1>

        {Types.map(t =>
            <div>

                <Card border="primary" class="Publication-card">
                    <Card.Header><Badge bg={t.colour}>{t.name}</Badge></Card.Header>
                    <Card>
                        {Pubs.filter(pub => pub.category.name === t.name).map(pub => {
                            return <>
                                <Card.Header>{pub.title} ({pub.issued['date-parts']}) <PDF pub={pub} />  <BibTex pub={pub} /></Card.Header>
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
                            </>
                        })}
                    </Card>
                </Card>
                <br></br>
            </div>


        )

        }


    </section >)
}