import React from 'react'
import SoundPlay from './SoundPlay' 

const About = () =>
(
    <div class="container">
        <div class="jumbotron">
            <h1>DnD APP</h1 >
            <h4>OM OS</h4>

            <img src="https://www.zealand.dk/wp-content/uploads/2019/01/Zealand_logo_black_RGB_1600px_72dpi.png" class="img-rounded jumbotronImage img-fluid img-responsive" ></img>

        </div>

        <div class="row">
            <div class="col-sm">
                <h1>Hvem er vi?</h1>
                <p>Vi er en gruppe fjerdesemesterstuderende på datamatikeruddannelsen på <b>Zealand</b> i Roskilde.</p>
                <p>Projektet er udarbejdet i faget, Webprogramming - WebApps with Angular and other JS-frameworks.</p>
                <p>Dette projekt er en Single Page WebApp(SPA) React App</p>
            </div>
            <div class="col-sm">
                <h1>Opgaven</h1>
                <p>Link til opgavebeskrivelsen: <a href="http://heho-zealand.dk/WebAppsF2020/MandatoryAssignmentDK.html" target="_blank" >
                    <strong>Her</strong></a> </p>
                <h4>React App krav</h4>
                <ol>
                    {/* ToDo ret underligt linjeskift, samt så listen står mere lige. */}
                    <li>Der skal være minimum 3 komponenter.</li>
                    <li>Der skal være et fælles Redux Store med tilhørende reducers og action creators.</li>
                    <li>Der skal anvendes Thunk middleware og Axios til at hente App-data.</li>
                    <li>Der skal anvendes Route og Link, så der kan navigeres mellem de forskellige komponenter.</li>
                </ol>
            </div>
            <div class="col-sm">
                <h1>SEJ OVERSKRIFT <i class="fas fa-coffee fa-spin"/></h1>
            </div>
        </div>
        <br></br>
    </div>





)

export default About