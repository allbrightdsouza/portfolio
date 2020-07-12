import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ReactComponent as LinkedIn} from '../images/linkedin.svg';
import {ReactComponent as Mail} from '../images/email.svg';
import {ReactComponent as Github} from '../images/giithub.svg';
import '../App.css';

class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
      handleSubmit(e) {
        e.preventDefault();
    
        fetch('/send',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              
            },
          }).then(
            (response) => (response.json())
           ).then((response)=>{
          if (response.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }
    
      resetForm(){
        
         this.setState({name: '', email: '', message: ''})
      }
    render()
    {
        return(
            <form className="form-group" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">                
                <Container className="container-contact" fluid>
                <Row className="contact-header">
                                <div>
                                    <h1 className="light header">Contact Allbright</h1>
                                    <p className="light">Please feel free to use this form or email me!<br/> Check out my portfolios while you are at it!</p>
                                </div>                        
                            </Row>
                    <Row>
                        <Col xs={10} md={6} lg={6}>
                                                
                            <Row className="c-row" >                    
                                <input type="text" name="name" id="name" placeholder="Name" className="contact form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>                                                                                               
                            </Row>
                            <Row className="c-row">                        
                                <input type="email" name="email" id="email" placeholder="Email" className="contact form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)}  required/>                                                                                                                            
                            </Row>                    
                            <Row className="c-row">                        
                                <textarea name="message" id="message" rows="5" placeholder="Message" className="contact form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>                                                                                                                              
                            </Row>
                            <Row className="c-row">                    
                                <button type="submit" className="contact-btn">Send</button>                        
                            </Row>
                        </Col>
                        <Col className="contacts" xs={10} md={6} lg={6} >                            
                            <Row className="d-row">
                                <p className="social-link"><span><Mail className="social-icons-contact" /></span>allbrightdsouza7@gmail.com</p>
                            </Row>
                            <Row className="d-row">
                                <a className="social-link" href="https://www.linkedin.com/in/allbrightdsouza/" target="_blank" rel="noopener noreferrer"><LinkedIn className="social-icons-contact" />linkedin.com/in/allbrightdsouza/</a>                           
                            </Row>
                            <Row className="d-row">
                                <a className="social-link" href="https://github.com/allbrightdsouza" target="_blank" rel="noopener noreferrer"><Github className="social-icons-contact"/>github.com/allbrightdsouza</a>
                            </Row>                            
                        </Col>
                    </Row>
                    
                    
                </Container>
                
                
                
                
                
            </form>
        );
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
}

export default Contact;