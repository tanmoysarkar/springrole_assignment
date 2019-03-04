import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Footer extends Component {
	render(){
		return(
			<Grid className="footer-buttom" >
				<Cell col={6}>
					<div className="row footer-row">
					    <Cell col={4}></Cell>
					    <Cell col={4}>
				      	<div className="footer">
					        <div className=" footer-main">
					          	<div className="footer-links">
						            <h5>Connect</h5>
						            <a href="https://www.facebook.com/springrole/" target="_blank" rel="noopener noreferrer">Facebook</a>
						            <a href="https://twitter.com/springroleinc/" target="_blank"  rel="noopener noreferrer">Twitter</a>
						            <a href="https://www.springrole.com/company/springrole" target="_blank"  rel="noopener noreferrer">SpringRole</a>
						            <a href="#">Contact Us</a>
					          	</div>
					          <div className="border-bottom"></div>
					        </div>
					        <div className="footer-main-right">
					          <div className="footer-links">
					            <h5>Explore</h5>
					            <iframe src="https://yvoschaap.com/producthunt/counter.html#href=https%3A%2F%2Fwww.producthunt.com%2Fr%2Fp%2F130336&amp;layout=wide&amp;type=vote" style={{width:"120px" ,height:"25px" ,scrolling:"no", frameborder:"0", allowtransparency:"true"}}>Created with <a href="https://yvoschaap.com/producthunt/button.html" target="_top"  >Vote Button for Product Hunt</a>.</iframe>
					            <a href="https://blog.springrole.com/" target="_blank"  rel="noopener noreferrer">Blog</a>
					            <a href="https://springrole.freshdesk.com/support/solutions/folders/43000341674" target="_blank"  rel="noopener noreferrer">FAQ</a>
					            <div className="border-bottom"></div>
					          </div>
					        </div>
					    </div>
					    </Cell>
				      	
					</div>
					<div className="row footer-row">
					    <div className="footer-springrole-div text-center">
					      	<span className="border-right">
					      		<a href="https://www.springrole.com/company/springrole" target="_blank"> &copy; SpringRole 2019</a>
					      	</span>
					      	<span className="border-right">
					      		<a href="https://springrole.com/SpringRole-Terms-of-Service.pdf">Terms &amp; conditions</a>
					      	</span>
					      	<span>
					      		<a href="https://www.iubenda.com/privacy-policy/94068001">Privacy policy</a>
					      	</span>
					    </div>
					</div>
				</Cell>
			</Grid>
		)
	}
}

export default Footer;