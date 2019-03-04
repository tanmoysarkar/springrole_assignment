import React , {Component} from 'react';
import '../Home.css';
import {Grid, Cell, Layout, Header, Navigation, Drawer, Content, Button} from 'react-mdl';
class HeaderMain extends Component {
	render(){
		return(
			<Grid className="landing-grid" >
				<Cell col={12}>
					<div className="header-main" >
					    <Layout fixedHeader>
					        <Header className="headerMain-bg" style={{backgroundColor: '#fff'}}>
					        	<img className=" avatar-img springrole-logo"
									src="https://springrole.com/images/sr_logo_updated.png"
									alt="avatar" style={{width:'117px'}}
								/>
					            <Navigation className="header-navigation" >
					            	
					                <ul className="join-btn hidden-xs" >
									    <li><a href="/vanity">Sign up</a></li>
									    <li><a href="/login">Login</a></li>
									</ul>
					            </Navigation>
					        </Header>
					        
					        <Content />
					    </Layout>
					</div>
				</Cell>
				
				
			</Grid>
		)
	}
}

export default HeaderMain;