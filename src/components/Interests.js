import React from "react";
import { Button, Card } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

import Centres from '../data/interests.json';



export default function Interests() {


    return (<section id="interests">
        <h1>Interests  <Button variant="link" onClick={() => { navigator.clipboard.writeText("https://adrien-wicht.github.io/profile/#interests") }}><Icons.Link /></Button></h1>
        {Centres.map(c =>
            <div>
                <Card border="primary" class="Publication-card">
                    <Card.Header> <Icons.BookHalf /> {c.title}</Card.Header>

                </Card>
                <br></br>
            </div>


        )
        }

    </section >)
}



