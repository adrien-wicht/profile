import Portrait from '../images/portrait.png';
import Card from 'react-bootstrap/Card';
import * as Icons from "react-bootstrap-icons";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import React from 'react';


function FaceCard() {
    return (
        <Card>
            <Card.Img
                border="dark"
                variant="top"
                src={Portrait}
            />
            <Card.Body>
                <Card.Text>
                    I am a PhD candidate in Economics at the European University Institute. My advisors are Ramon Marimon and Alexander Monge-Naranjo.
                    My research interests lie in Dynamic Macroeconomics, International Economics, Sovereign Defaults and Contract Design.
                </Card.Text>
            </Card.Body>

            <Card.Footer>
                <a href="https://www.eui.eu/people?id=adrien-wicht"><Icons.GeoAltFill /></a><a href="https://www.eui.eu/people?id=adrien-wicht">European University Institute</a>
                <br />
                <a href="mailto:adrien.wicht@eui.eu"><Icons.EnvelopeFill /></a> <a href="mailto:adrien.wicht@eui.eu"> adrien.wicht@eui.eu</a>
                <br />
                <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf"><Icons.ClipboardDataFill /></a> <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf">CV</a>
                <br />
                <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218"><Icons.Linkedin /></a> <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218">Linkedin</a>
                <br />
                <a href="https://twitter.com/adrienwicht"><Icons.Twitter /></a> <a href="https://twitter.com/adrienwicht">@AdrienWicht</a>
                <br />
                <a href="https://github.com/adrien-wicht"><Icons.Github /></a> <a href="https://github.com/adrien-wicht">@adrien-wicht</a>
            </Card.Footer>
        </Card>





    );

}

export default function About() {
    return (
        <FaceCard></FaceCard>
    );
}