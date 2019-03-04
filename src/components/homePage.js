import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, ChipContact, CardActions, CardMenu, Button, IconButton, Chip} from 'react-mdl';
import ReactGA from 'react-ga';
import '../Home.css';
import logoSpring from './../spring.PNG';
import axios from 'axios';
import ExperiencePage from './experiencePage';
import EducationPage from './educationPage';
class HomePage extends Component{
	constructor(props){
		super(props);
		this.state={
			fetchUser: {
		        name: '',
		        url: '',
		        avatar_url: '',
		        bio: '',
		        current_company: '',
		        current_job_designation: '',
		        current_location: '',
		        displayName: '',
		        skills:[],
		    },
		    fetchExperience: {
		        designation: '',
		        description: '',
		        end_date: '',
		        start_date: '',
		        claimed_by: '',
		        location: '',
		        location_name: '',
		        role: '',
		        duration :'',
		        work_experiences:[]
		    },
		    fetchEducation:{
		    	educationList: []
		    }
		}

	}
	componentWillMount(){
		this.allUserDetails();
		this.allExperienceDetails();
		this.allEducationDetails();
	}

	allUserDetails(){
		axios.get('https://springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/profile/skills')
	      .then( (response) => {
	      	
	        console.log("response", response);
	        this.setState({
	          fetchUser: response.data
	        });
	           
	      })
	      .catch( (error) => {
	        console.log(error);
	      });  
	}

	allExperienceDetails(){
		axios.get('https://springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/work-experience')
	      .then( (response) => {
	      	
	        console.log("response", response);
	        this.setState({
	          fetchExperience: response.data
	        });
	           
	      })
	      .catch( (error) => {
	        console.log(error);
	      });  
	}
	allEducationDetails(){
		axios.get('https://springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/education')
	      .then( (response) => {
	      	
	        console.log("response", response);
	        this.setState({
	          fetchEducation: response.data
	        });
	           
	      })
	      .catch( (error) => {
	        console.log(error);
	      });  
	}
	render(){
		return(
			<div >
			<Grid className ="landing-grid container" >
				<Cell col={12}>
					<Card shadow={0} className="headerCard" >
						<CardText className="headerCard-text" >
							<Cell col={6} className="join-text">
								<p>Join {this.state.fetchUser.name} on SpringRole <span className="hidden-xs">- </span>
							 	A verified professional network powered by the blockchain</p>
							</Cell>
							<Cell col={6} className="join-btn-grp">
						       	<ul className="join-btn">
							        <li className="join_sr_btn"><a href="/vanity">Join SpringRole</a></li>
							        <li className="join_sr_btn-sec"><a href="/login">Login</a></li>

							    </ul>
							    
						    </Cell>
    						<Chip className="closeButton" style={{background: 'none'}} onClose={e => { alert('Close icon clicked!'); }}></Chip>
					    </CardText> 
					</Card>
				</Cell>
				
				<Cell col={12}>	
					<Card className="user-pic-card" shadow={0} >
						<CardText className="headerCard-user" >
							<Cell col={2} className="user-pic">
								<img className="user-avatar-url" src={this.state.fetchUser.avatar_url}  />
							</Cell>
							<Cell col={10} className="user-main-details-div">
						       <div className="user-profile-details">
						       	 <h1>{this.state.fetchUser.name} 
						       	 <span className="verified-tick" data-placement="top" data-toggle="tooltip" title="" data-original-title="Verified profile"><img src="https://springrole.com/images/check-green-icon.png" />
						       	 </span>
						       	 
						       	 	<div className="main-title-user-profile pull-right ">
				                        <button className="message message-request user-message-offline-selector"><img className="img-responsive" src="https://springrole.com/images/Message_mobile.png" alt=""/>Message</button>
				                    </div>

						       	 </h1>
						       	 <div className="user-job-designation">
							       	 <h4 >{this.state.fetchUser.current_job_designation} at {this.state.fetchUser.current_company}</h4>
							       	 <p> {this.state.fetchUser.current_location}</p>
						       	 </div>
						       	 <div className="main-title-user-profile-mobile  ">
				                        <button className="message-mobile message-request user-message-offline-selector"><img className="img-responsive" src="https://springrole.com/images/Message_mobile.png" alt=""/>Message</button>
				                    </div>

						       	</div>
						       	<div className="row">
						       		{
							            this.state.fetchUser.skills.length != 0
							            ?
							            <div className="user-skill-parent-div">
								            {this.state.fetchUser.skills.map((row, i) =>
											
										       	<Chip>  
												    <p>{row.skill_name}</p>
												    {
												    	row.skill_name == "Solidity"
												    	?
												    	<ChipContact className=" user-skills-chip rating-low"></ChipContact>
												    	:
												    	row.skill_name == "Entrepreneurship"
												    	?
												    	<ChipContact className=" user-skills-chip rating-highest"></ChipContact>
												    	:
												    	<ChipContact className=" user-skills-chip rating-lowest"></ChipContact>
												    }
												</Chip>
											)}
											
										</div>
										:
								            ""
								    } 
								</div>
								<div className="blockchain-verified-icon verified-icon blockchain pull-right">
								    <a href="https://explorer.springrole.com/tx/0x8d753d426573d874046ef00722efb0f7c49a437758d628d0b625dc1ba535f106" target="_blank"><img className="img-responsive" src="https://springrole.com/images/write-to-blockchain-img.png"/></a>
									<p>Blockchain Verified</p>
								</div>
								<div className="user-startup-badge-mobile mobile-view">
					                <a href="https://www.startupschool.org/" target="_blank"><img className="img-responsive" src="https://springrole.com/images/yc-logo.png"/></a>
					            </div>

								<div className="row copy-icon-url">
									<p>{this.state.fetchUser.url} 
										<span  className="copy-icon-span">
		                                	<img className="img-responsive" src="https://springrole.com/images/Copy-Link.png" alt=""/>
		                            	</span>
									</p> 
								</div>
						    </Cell>
					    </CardText>
					</Card>
				</Cell>

				<Cell col={12}>	
					<Card shadow={0} className="userEndorse-card" >
						<CardText className="headerCard-user-endorse" >
							<Cell col={12}>
								<div className="endorse-experience-section-icons ">
			                      	<div className="endorse-user-btn endorse-user-offline-selector-btn">
				                        <p>beta</p>
				                        <button type="button" className="endorsee-popup-btn endorsee-offline-selector-btn">Endorse +</button>
				                    </div>
				                  
				                  	<a href="https://springrole.com/kartik/verify" target="_blank">
				                    	<button type="button" className="verification-btn">
				                        	Verify Experience
				                    	</button>
				                  	</a>
						                
						            <div className="user-startup-badge desktop-view">
						                <a href="https://www.startupschool.org/" target="_blank"><img className="img-responsive" src="https://springrole.com/images/yc-logo.png"/></a>
						            </div>
				                
				            	</div>
				            	<div className="pull-right experience-display">
				            		<img className="img-responsive spring-logo" src={logoSpring} />
				            	</div>
							</Cell>
							
						</CardText>
					</Card>
				</Cell>

				<Cell col={12}>	
					<Card shadow={0} className="userEndorse-card-quote-bio" >
						<CardText className="headerCard-user-endorse-quote" >
							<h3 className="user-bio" >"{this.state.fetchUser.bio}"</h3>
						</CardText>
					</Card>	
				</Cell>
			</Grid>
			<ExperiencePage {...this.state}/>
			<EducationPage {...this.state}/>
			</div>

		)
	}
}

export default HomePage;