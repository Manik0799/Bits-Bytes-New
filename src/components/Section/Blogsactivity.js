import React, {useState} from "react";

import {
  Row,
  Col,
  Button, Modal, ModalHeader, ModalBody,Container
} from "reactstrap";


function Blogsactivity({ blogsData }) {

      const arrayOfObj = Object.values(blogsData);
      arrayOfObj.reverse()

  
  const [modal, setModal] = useState(false)
  const [modalData, setModaldata] = useState(null)


  const toggle = () =>{
    setModal(!modal)
  }

  return (
   
    <div className="section text-center"  style={{
      alignItems: "center",
      justifyContent: "center",
    }}>
      
      <Row className="justify-content-md-center">

        {arrayOfObj.map((data, key) => {
          return (
          <>
            <div key={key}>
              
              <Col lg="4" md="6" sm="6" className="text-center">

              {/* Individual Card */}
                      <div className="card" style={{width: "20rem"}}>
                      {data.blogimages.image1 ?<img className="card-img-top" src = {data.blogimages.image1} alt="card-img" /> : null}
                        
                        <div className="card-body">
                          <h4 className="card-title">{data.title}</h4>
                          <p className="card-text">{data.text.para1.substr(0,60) } &nbsp;....</p>
                          <p className="card-text">{data.date }</p>
                         
                          <Button 
                              color="danger" 
                              onClick={() =>{
                                toggle()
                                let blogData = []

                                blogData.push(data.title)
                                
                                var paraArray = Object.values(data.text)
                                blogData.push(paraArray)

                                var imageArray = Object.values(data.blogimages)
                                blogData.push(imageArray)
                                 var k=2;
                                 var array=[];

                                 while(k<imageArray.length)
                                 {
                                    array.push(imageArray[k]);
                                    k++;
                                 }

                                 blogData.push(array);
                                setModaldata(blogData)
                            }}
                          >
                            Read Blog
                          </Button>
                        </div>
                      </div>
                      </Col>
            </div>

                      {/* Modal */}
                      {modalData ? <Modal isOpen={modal} toggle={toggle} size = "xl" scrollable = {true}>
                        <ModalHeader toggle={toggle} >
                          <p style={{fontSize:"1.4rem"}}>{modalData[0]}</p>
                        </ModalHeader>
                        <ModalBody>
                          <Container>
                            <Row>

                             
                                {modalData[2][0] ? <Col lg="6" md = "12" sm = "12" className = "text-center">
                                <img src= {modalData[2][0]} style={{width:"85%",paddingTop:"5px"}} alt = "img-1"/>
                                </Col> : null}

                                {modalData[2][1] ? <Col lg="6" md = "12" sm = "12" className = "text-center">
                                <img src= {modalData[2][1]} style={{width:"85%",paddingTop:"5px"}} alt = "img-2" />
                                </Col> : null}

                                {modalData[1].map((paras) =>(
                                  
                                    <div>
                                      <br></br>
                                    <p style = {{fontSize : "1rem"}}>{paras}</p>
                                    
                                    </div>
                                   
                                  
                                ))}
                                {modalData[3] ? modalData[3].map((element) => (
                                  <Col lg="6" md = "12" sm = "12" className = "text-center">
                                  <img src= {element} className="img-responsive" style={{width:"85%",paddingTop:"5px"}} alt = "remaining-imgs" />
                                  </Col>
                                )):null}
                                
                              
                             
                            </Row>
                            </Container>
                        </ModalBody>
                        
                      </Modal> : null}
     </>
             
            
          );
        })}
     
     
      </Row>
    </div>
 
 
 
 );
}

export default Blogsactivity;
