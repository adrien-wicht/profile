import Figure from 'react-bootstrap/Figure';
import Portrait from '../images/portrait.png';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import React from 'react';


function FaceCard() {
    return (
        <Card>
            <Card.Img
                border="dark"
                // width={150}
                // height={180}
                // alt="150x180"
                variant="top"
                src={Portrait}
            />

            {/* <Figure.Caption>
                <a href="https://www.eui.eu/people?id=adrien-wicht"><Icons.GeoAltFill /></a><a href="https://www.eui.eu/people?id=adrien-wicht">European University Institute</a>
                <br />

                <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218"><Icons.Linkedin /></a> <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218">Linkedin</a>
                <br />

                <a href="https://twitter.com/adrienwicht"><Icons.Twitter /></a> <a href="https://twitter.com/adrienwicht">@AdrienWicht</a>

                <br />

                <a href="https://github.com/adrien-wicht"><Icons.Github /></a> <a href="https://github.com/adrien-wicht">@adrien-wicht</a>
                <br />


                <a href="mailto:adrien.wicht@eui.eu"><Icons.EnvelopeFill /></a> <a href="mailto:adrien.wicht@eui.eu"> adrien.wicht@eui.eu</a>

                <br />

                <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf"><Icons.ClipboardDataFill /></a> <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf">CV</a>
            </Figure.Caption> */}

            <Card.Body>
                {/* Welcome to my website */}


                I am a PhD candidate in Economics at the European University Institute. My advisors are Ramon Marimon and Alexander Monge-Naranjo.


                My research interests lie in Dynamic Macroeconomics, International Economics, Sovereign Default and Contract Design.
            </Card.Body>

            <Card.Footer>
                <a href="https://www.eui.eu/people?id=adrien-wicht"><Icons.GeoAltFill /></a><a href="https://www.eui.eu/people?id=adrien-wicht">European University Institute</a>
                <br />

                <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218"><Icons.Linkedin /></a> <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218">Linkedin</a>
                <br />

                <a href="https://twitter.com/adrienwicht"><Icons.Twitter /></a> <a href="https://twitter.com/adrienwicht">@AdrienWicht</a>

                <br />

                <a href="https://github.com/adrien-wicht"><Icons.Github /></a> <a href="https://github.com/adrien-wicht">@adrien-wicht</a>
                <br />


                <a href="mailto:adrien.wicht@eui.eu"><Icons.EnvelopeFill /></a> <a href="mailto:adrien.wicht@eui.eu"> adrien.wicht@eui.eu</a>

                <br />

                <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf"><Icons.ClipboardDataFill /></a> <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf">CV</a>


            </Card.Footer>
        </Card>





    );

}


function FaceToast() {
    return (<ToastContainer className="p-3" position="middle-start">
        <Toast>
            <Toast.Header closeButton={false}>
                <img
                    src={Portrait}
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">Adrien Wicht</strong>
                <small>About me</small>
            </Toast.Header>
            <Toast.Body>
                <a href="https://www.eui.eu/people?id=adrien-wicht"><Icons.GeoAltFill /></a><a href="https://www.eui.eu/people?id=adrien-wicht">European University Institute</a>
                <br />

                <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218"><Icons.Linkedin /></a> <a href="https://ch.linkedin.com/in/adrien-wicht-8a6734218">Linkedin</a>
                <br />

                <a href="https://twitter.com/adrienwicht"><Icons.Twitter /></a> <a href="https://twitter.com/adrienwicht">@AdrienWicht</a>

                <br />

                <a href="https://github.com/adrien-wicht"><Icons.Github /></a> <a href="https://github.com/adrien-wicht">@adrien-wicht</a>
                <br />


                <a href="mailto:adrien.wicht@eui.eu"><Icons.EnvelopeFill /></a> <a href="mailto:adrien.wicht@eui.eu"> adrien.wicht@eui.eu</a>

                <br />

                <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf"><Icons.ClipboardDataFill /></a> <a href="https://raw.githubusercontent.com/adrien-wicht/profile/main/documents/cv_ac_en.pdf">CV</a>
            </Toast.Body>

        </Toast>
    </ToastContainer>);
}


export default function About() {
    return (
        // <FaceToast></FaceToast>
        <FaceCard></FaceCard>


    );
}