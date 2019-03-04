import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, ChipContact, CardActions, CardMenu, Button, IconButton, Chip} from 'react-mdl';
import ReactGA from 'react-ga';
import '../Home.css';
import axios from 'axios';

class EducationPage extends Component{
	render(){
		return(
			<Grid className="education-page-grid">
				<Cell col={8} >
					<div className="user-experience-title user-work-exp-profile-title-education">
				      <h2>Education</h2>
				    </div>
					
					<Card shadow={0} className="userEndorse-card-quote" >
						{
							    	this.props.fetchEducation.educationList.length != 0
							    	?
						<CardText className="headerCard-user-endorse-quote" >
							{this.props.fetchEducation.educationList.map((row,i) =>
							<div className="user-education-selector">
								
								<div className="education-content">
								    
							    	<div className="work-experience-employee-section-education">
								        <div className="work-experience-company-parent-section education-section-selector">
								        
									        <div className="education-main-section">
									            <div className="education-left-section">
									                <span><img className="img-responsive" src="https://springrole.com/images/uni-icon.png" alt=""/></span>
									            </div>
									            <div className="education-right-section">
									                <div className="work-experience-company-employee-name-section">
									                    <h3>{row.institution_name}</h3>
									                </div>
									                <div className="work-experience-company-location-section">
									                    
									                    <h5>{row.course} - {row.department}</h5>
									                    <h6>{row.score_metric} - {row.score} / 4</h6>
									                    <p>{row.location}</p>
									                    <p>{row.start_date} - {row.end_date}</p>
									                    
									                </div>
									            </div>
									        </div>
								    	</div>
									</div>
									

								</div>
								
							</div>
							)}
						</CardText>
						:
							""

						    }
					</Card>
				</Cell>
			</Grid>
		)
	}
}
export default EducationPage;