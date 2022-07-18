import React from "react";
import { Card } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

import Centres from '../data/interests.json';



export default function Interests() {


    return (<section id="interests">
        <h1>Interests</h1>
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



