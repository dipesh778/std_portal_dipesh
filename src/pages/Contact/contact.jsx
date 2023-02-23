import React from "react";
import './contact.css';
import logo from '../../assests/logocuh.png'
import { FacebookFilled, TwitterCircleFilled, YoutubeFilled } from "@ant-design/icons";
function contact() {
  return (
  <div className="page1">
    
 <div >
  <img src={logo} alt="" className="logo1"/>
 </div>

  <footer>
    <div>  <div class="fbox1">
                <div class="fquick_links">
                    <h2>Quick links</h2>
                    <ul>
                        <li><a href="http://www.cuh.ac.in/information-about-cuh.aspx">About us </a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>



                <div class="fContact_us">
                    <h2>Contact us</h2>
                    <ul>
                        <li><a href="#">Central University of Haryana
Jant-Pali, Mahendergarh (Haryana)
Pin: 123031</a></li><br />
                        <li><a href="#">Vice Chancellor Office: 01285-260201</a></li><br />
                        <li><a href="#">0124-2350283, 2350284</a></li>
                    </ul>
                </div>
                </div>   
            </div>
  <div class="footer">
    <p>Copyright © 2018 CENTRAL UNIVERSITY OF HARYANA</p>
    {/* <div className="co">Copyright © 2018 CENTRAL UNIVERSITY OF HARYANA</div> */}

           <div>
            <ul class="social-icons">
             <FacebookFilled/>
             <TwitterCircleFilled/>
             <YoutubeFilled/>
            </ul>
            </div>
          </div>
          
  </footer>
  
  </div>
  );
}

export default contact;
