import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SpellDetails = ({ spell }) => {
    console.log("Test");
    if (spell){
    return (    
        <div class="container">
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <h1>Spell Detail</h1>
                        <b>Name:</b> {spell.name} <b></b>
                        <b>range:</b> {spell.range}<br></br>
                        <b>components:</b> {spell.components}<br></br>
                        <b>level:</b> {spell.level}<br></br>
                        <br></br><br></br>
                        <h4>description:</h4> {spell.desc}<br></br>
                        <br></br>
                        <p>
                            <button className = "badge badge-dark"> 
                                <Link to="/">Back</Link>
                            </button>
                        </p>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        </div>
    );
    }
    return null;
  }



const mapStateToProps = (state) => {
    return { spell : state.selectedItem };
}


export default connect(mapStateToProps)(SpellDetails);
