import React from "react";
import { Card } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

import Events from '../data/vita.json';



export default function Vita() {

    const Types = [...new Set(Events.map(e => e.category))];

    return (<section id="vita">
        <h1>Curriculum Vitae</h1>
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

    </section >)
}



