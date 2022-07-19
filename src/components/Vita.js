import React from "react";
import { Button, Card, Toast } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

import Events from '../data/vita.json';



export default function Vita() {

    const Types = [...new Set(Events.map(e => e.category))];

    return (<section id="cv">
        <h1>Curriculum Vitae <Button variant="link" onClick={() => { navigator.clipboard.writeText("https://adrien-wicht.github.io/profile/#cv") }}><Icons.Link /></Button></h1>

        {Types.map(t =>
            <div>

                <Card border="primary" class="Publication-card">
                    <Card.Header>{t}</Card.Header>
                    <Card>
                        {Events.filter(e => e.category === t).map(e => <div> <Card.Header>{e.achievement} </Card.Header><Card.Body><Icons.GeoAltFill /> <a>{e.location}</a> </Card.Body> <Card.Body><Icons.Calendar3RangeFill /> <a> {e.timeframe}</a></Card.Body></div>)}
                    </Card>
                </Card>
                <br></br>
            </div>


        )

        }

        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Interested in knowing more about me?</strong>
                {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>Download my <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf">complete curriculum</a> <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf"><Icons.ClipboardDataFill /></a>.</Toast.Body>
        </Toast>
        <br />
    </section >)
}



