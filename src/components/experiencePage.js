import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, ChipContact, CardActions, CardMenu, Button, IconButton, Chip} from 'react-mdl';
import ReactGA from 'react-ga';
import '../Home.css';
import axios from 'axios';

class ExperiencePage extends Component{
	
	render(){
		return(
			<Grid className="experience-page-grid" >
				<Cell col={8} >
					<div className="user-experience-title user-work-exp-profile-title">
				      <h2>Work Experience</h2>
				    </div>
					<Card shadow={0} className="userEndorse-card-quote" >
						
						<CardText className="headerCard-user-endorse-quote" >
							
							{
								this.props.fetchExperience.work_experiences.length != undefined
								?
        					<div className="container-experience">
        					{this.props.fetchExperience.work_experiences.map((row, i) =>
							<div className="work-experience-content work-experience-profile-content work-ex-profile-section-selector">
									
							        {
							        	row.company.name == "SpringRole"
							        	?
							        <div className="work-experience-employee-section verify">
							            <div className="verify-div-section verify">
							                <div className="left">
							                    <div className="work-experience-company-logo-div verify">
						                        
						                            <a href="#">
						                                <img className="img-responsive" src={row.company.logo_url}/>
						                            </a>
							                        
							                    </div>
							                    <div className="work-experience-right-section">
							                        <div className="work-experience-company-parent-section">
							                            
							                            <div className="work-experience-company-employee-name-section work-experience-company-header-name-section verify">
							                                <h3 className="company-name">{row.company.name}</h3>
							                            </div>
							                            <div className="work-experience-company-location-section">
							                                
						                                        <a href="/springrole">
						                                            <h4>{row.designation}</h4>
						                                        </a>
							                                    
							                                    <h5>{row.start_date} - {row.end_date} , {row.duration}</h5>
							                            </div>
							                        </div>
							                    </div>
							                </div>
								            <div className="right">
								                <ul className="work-experience-verify-div">
								                	{
								                		row.l1_completed != true
								                		?
								                		<li>
								                        	
								                            <a href="#" target="_blank">
								                                <span className="work-exerience-popup-selector" data-original-title="" title=""><img src="https://springrole.com/images/l1-verification-Pending.png"  alt="" className="img-responsive"/></span>
								                                <h3 >Peer verification <br/> pending</h3>
								                            </a>
								                        
								                    	</li>
								                    	:
								                    	<li>
								                        	
								                            <a href="#" target="_blank">
								                                <span className="work-exerience-popup-selector" data-original-title="" title=""><img src="https://springrole.com/images/l1-verified.png" alt="" className="img-responsive"/></span>
								                                <h3 >Peer verified </h3>
								                            </a>
								                        
								                    	</li>

								                	}
								                    
								                    {
								                		row.l3_completed != true
								                		?
								                    <li>
								                        
							                            <a href="#" target="_blank">
							                                <span><img src="https://springrole.com/images/grey-check.png" alt="" className="img-responsive"/></span>
							                                <h3>Company verification <br/> pending</h3>
							                            </a>
								                        
								                    </li>
								                    :
								                    <li>
								                        
							                            <a href="/transaction/team/1809f72a-9df5-4258-b82b-18d2c0181213" target="_blank">
							                                <span><img src="https://springrole.com/images/green-check-mark.png" alt="" className="img-responsive"/></span>
							                                <h3>Company verified</h3>
							                            </a>
								                    </li>

								                	}
								                    
								                    {
								                    	row.l1_completed === true && row.l3_completed === true
								                    	?
								                    	<li>
								                            <h3 className="italic">SpringRole has verified <br/> all the information mentioned <br/> above</h3>
								                        </li>
								                        :

								                    	<li>
								                            <h3 className="italic">Peer verifiers are only <br/> asked if someone works at a <br/> company</h3>
								                        </li>
								                    }     
								                </ul>
								            </div>
								        </div>
									</div>
									:
									<div className="work-experience-employee-section ">
							            <div className="verify-div-section verify">
							                <div className="left">
							                    <div className="work-experience-company-logo-div verify">
						                        
						                            <a href="#">
						                                <img className="img-responsive" src={row.company.logo_url}/>
						                            </a>
							                        
							                    </div>
							                    <div className="work-experience-right-section">
							                        <div className="work-experience-company-parent-section">
							                            
							                            <div className="work-experience-company-employee-name-section work-experience-company-header-name-section verify">
							                                <h3 className="company-name">{row.company.name}</h3>
							                            </div>
							                            <div className="work-experience-company-location-section">
							                                
					                                        <a href="/springrole">
					                                            <h4>{row.designation}</h4>
					                                        </a>
						                                    
						                                    <h5>{row.start_date} - {row.end_date} , {row.duration}</h5>
							                            </div>
							                        </div>
							                    </div>
							                </div>
								            <div className="right">
								                <ul className="work-experience-verify-div">
								                	{
								                		row.l1_completed != true
								                		?
								                		<li>
								                            <a href="#" target="_blank">
								                                <span className="work-exerience-popup-selector" title=""><img src="https://springrole.com/images/l1-verification-Pending.png"  alt="" className="img-responsive"/></span>
								                                <h3 >Peer verification <br/> pending</h3>
								                            </a>
								                        
								                    	</li>
								                    	:
								                    	<li>
								                        	
								                            <a href="#" target="_blank">
								                                <span className="work-exerience-popup-selector"  title=""><img src="https://springrole.com/images/l1-verified.png"   alt="" className="img-responsive"/></span>
								                                <h3 >Peer verified </h3>
								                            </a>
								                        
								                    	</li>

								                	}
								                    
								                    {
								                		row.l3_completed != true
								                		?
								                    <li>
								                        
							                            <a href="#" target="_blank">
							                                <span><img src="https://springrole.com/images/grey-check.png" alt="" className="img-responsive"/></span>
							                                <h3>Company verification <br/> pending</h3>
							                            </a>
								                        
								                    </li>
								                    :
								                    <li>
								                        
							                            <a href="#" target="_blank">
							                                <span><img src="https://springrole.com/images/green-check-mark.png" alt="" className="img-responsive"/></span>
							                                <h3>Company verified</h3>
							                            </a>
								                    </li>
								                	}
								                    
								                    {
								                    	row.l1_completed === true && row.l3_completed === true
								                    	?
								                    	<li>
								                            <h3 className="italic">SpringRole has verified <br/> all the information mentioned <br/> above</h3>
								                        </li>
								                        :

								                    	<li>
								                            <h3 className="italic">Peer verifiers are only <br/> asked if someone works at a <br/> company</h3>
								                        </li>
								                    }         
								                </ul>
								            </div>
								        </div>
									</div>
							        }
							     
							     {
        							row.skills_data.length != 0
        							?  
							    <div className="work-description-div">
            						
        							<div className="worked-on-new">
        								<h6>WORKED ON</h6>
        								<div className="skill-section">
        									{row.skills_data.map((items,i)=>
        										<div className="skill-section-child-div worked-on-skill work-experience-worked-on">
				                                	<span>{items.skill_name}</span>
				                            	</div>
        									)}

				                    	</div>

        							</div>
            				
						        </div>
						        :
        							""
        						}

						        {
						        	row.description != null
						        	?
						        	<div className="work-description-div">

						        		<div className="worked-on-content-div worked-on-content-div-new">
						        		<span> {row.description}</span></div>
						        	</div>
						        	:
						        	""
						        }
						        
							</div>
							)} 
							</div>
							:
								""

							}
							
						</CardText>
						
					</Card>	
					
				</Cell>

				<Cell col={4}>
					
					<div className="user-experience-title user-work-exp-profile-title-skills">
				      <h2>Skills</h2>
				    </div>
					<Card shadow={0} className="userEndorse-card-quote" >
						
						<CardText className="headerCard-user-endorse-quote" >
							<div className="add-skill-profile-page box-shadow-div">
								<div className="intro-endorse-div text-center">
					                <h2>Introducing <br/> Endorsements</h2>
					                <a href="https://springrole.freshdesk.com/support/solutions/articles/43000433785-what-do-the-endorsement-colors-mean-" target="_blank">Learn more</a>
					            </div>
					            
							</div>
							<div className="skill-section">
					            	{
    									this.props.fetchUser.skills.length != 0
    									?
        							<div className="skill-section card">
        								{this.props.fetchUser.skills.map((row, i) =>
        									<div className="skill-section-child-div experience-section-skill">
        										
    											<span className="skill-name">{row.skill_name}</span>
												{
													row.skill_name =="Solidity"
													?
													<ul className="rating-color-div tabs">
					                                	<li>
						                                	<span className="rating-lowest "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-low active"></span>
						                                </li>
						                                <li>
						                                	<span className="rating-medium "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-high "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-highest "></span>
						                                </li>
					                            	</ul>
					                            	:
					                            	row.skill_name =="Entrepreneurship"
													?
													<ul className="rating-color-div tabs">
					                                	<li>
						                                	<span className="rating-lowest "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-low "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-medium "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-high "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-highest active"></span>
						                                </li>
					                            	</ul>
					                            	:
					                            	<ul className="rating-color-div tabs">
					                                	<li>
						                                	<span className="rating-lowest active"></span>
						                                </li>
						                                <li>
						                                	<span className="rating-low "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-medium "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-high "></span>
						                                </li>
						                                <li>
						                                	<span className="rating-highest "></span>
						                                </li>
					                            	</ul>


												}
					                            {
	        									row.endorsed_by.users.length != undefined
	        									?
                        						<div className="left">
                    								{row.endorsed_by.users.map((items, i) =>
			                                      	<span className="endorsement-popup-selector">
			                                          <img className="img-responsive img-circle" src={items.avatar_url}/>
			                                      	</span>
			                                  		)}
			                                	</div>

			                                	:
		    										""

		        								}
		        								{
	        									row.endorsed_by.users.length != undefined
	        									?
		        								<div className="right">
			                                		
				                                    <span className="users-name pointer endorsement-popup-selector">
				                                    Endorsed by {row.endorsed_by.users.map((items, i) =>
				                                        <a className="remove-atag">{items.name.full} ,</a>  )} 
				                                        and {row.endorsed_by.total_count - row.endorsed_by.users.length} other
				                                    </span>
				                                    
				                                </div>
				                                :
		    										""

		        								}
				                                							            	
    										</div>
    										
    									)}
    								</div>
    								:
									""

								}
    						</div>
    						<div className="note-div">
			                    <p>
			                        The darker the color, the higher the proficiency at a particular skill.<a href="https://springrole.freshdesk.com/support/solutions/articles/43000433785-what-do-the-endorsement-colors-mean-" target="_blank">Know more &gt;</a>
			                    </p>
			                </div>
						</CardText>
						
					</Card>	<br/>
					
					
					<div className="user-experience-title user-work-exp-profile-title-github">
				      <h2>Github Profile</h2>
				    </div>
					<Card shadow={0} className="userEndorse-card-quote userEndorse-card-quote-github" >

						<CardText className=" headerCard-user-endorse-quote headerCard-user-endorse-quote-github" >
						    <div className="github-profile-card-div">
							    <div className="github-profile-particular-section">
							        <div className="github-profile-particular-child-section">
							            <div className="github-profile-parts-section">
							                <div className="github-profile-parts-image">
							                    <img src="https://springrole.com/images/Followers.svg"/>
							                </div> 
							                <div className="github-profile-parts-values-section">
							                    <h4>50</h4>
							                    <p>Followers</p>
							                </div>           
							            </div>

							            <div className="github-profile-parts-section">
							                <div className="github-profile-parts-image gitStar">
							                    <img src="https://springrole.com/images/Star.svg"/>
							                </div> 
							                <div className="github-profile-parts-values-section">
							                    <h4>2</h4>
							                    <p>Stars</p>
							                </div> 
							            </div>
							        </div>
							        <div className="github-profile-particular-child-section">
							            <div className="github-profile-parts-section">
							                <div className="github-profile-parts-image gitRepository">
							                    <img src="https://springrole.com/images/Repo.svg"/>
							                </div> 
							                <div className="github-profile-parts-values-section">
							                    <h4>13</h4>
							                    <p>Repositories</p>
							                </div>           
							            </div>

							            <div className="github-profile-parts-section">
							                <div className="githubProfilePartsImg">
							                    <img src="https://springrole.com/images/Contribution.svg"/>
							                </div> 
							                <div className="github-profile-parts-values-section">
							                    <h4>429</h4>
							                    <p>Contributions<br/>(In the last year)</p>
							                </div> 
							            </div>
							        </div>
							    </div>

							    <div className="github-profile-card-divLanguage">
							        <div className="github-profile-card-divLanguageChildImg">
							            <img src="https://springrole.com/images/LanguagesUsed.svg"/>
							        </div>
							        <div className="github-profile-card-divLanguageChild">
							            <h3>JavaScript,PHP,Python</h3>
							            <p>Languages used</p>
							            <a href="https://github.com/kar2905" target="_blank">Visit Github profile &gt;</a>
							        </div>
							    </div>
							</div>
						</CardText>
					</Card>					
				</Cell>
			</Grid>
		)
	}
}

export default ExperiencePage;