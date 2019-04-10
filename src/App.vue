<template>
  <div id="app" class="wrapper">
    <!-- Preloader --> 
    <div id="preloader">
      <div class="loader"></div>    
    </div><!--preloader end-->

    
   <!-- Header
   ================================================== -->
   <header id="home">

      <nav id="left-nav">

        <div class="logo">
          <img src="static/picture/avatar.jpg">
        </div>

        <div class="menu" id="menu">
          <span class="menu-global menu-top"></span>
          <span class="menu-global menu-middle"></span>
          <span class="menu-global menu-bottom"></span>
        </div>

         <ul id="nav" class="nav">
            <li class="current">
              <a class="smoothscroll" href="#home"><i class="fa fa-home fa-fw"></i>Home</a>
            </li>
            <li>
              <a class="smoothscroll" href="#about"><i class="fa fa-user fa-fw"></i>About Me</a>
            </li>
            <li>
              <a class="smoothscroll" href="#resume"><i class="fa fa-file-text fa-fw"></i>Resume</a>
            </li>
            <li>
              <a class="smoothscroll" href="#portfolio"><i class="fa fa-briefcase fa-fw"></i>Portfolio</a>
            </li>
            <li>
              <a class="smoothscroll" href="#testimonials"><i class="fa fa-comments fa-fw"></i>Testimonials</a>
            </li>
            <li>
              <a class="smoothscroll" href="#contact"><i class="fa fa-envelope fa-fw"></i>Contact</a>
            </li>
         </ul> <!-- end #nav -->

      </nav> <!-- end #nav-wrap -->

      <div class="row banner">
         <div class="banner-text">
            <h1 class="responsive-headline wow zoomIn">I'm <span>John Doe</span></h1>
            <h3 class="wow fadeInUp">I'm a passionate <span>UI/UX Designer</span> and <span>Front-End Developer</span> creating modern and responsive design for <span>Web</span> and <span>Mobile</span>. <br> Let's start scfadeIng and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
         </div>
      </div>

      <p class="scrolldown">
         <a class="smoothscroll" href="#about"><i class="fa fa-angle-double-down"></i></a>
      </p>

      <div class="header-overlay"></div>

   <!-- Social Section
   ================================================== -->
   <div id="social">
      <div class="row social-container">
            <ul class="social">
               <li><a href="#"><i class="fa fa-facebook"></i></a></li>
               <li><a href="#"><i class="fa fa-twitter"></i></a></li>
               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i class="fa fa-github"></i></a></li>
               <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
               <li><a href="#"><i class="fa fa-skype"></i></a></li>
            </ul>
      </div>

   </div> <!-- Social End -->

   </header> <!-- Header End -->

   <!-- About Section
   ================================================== -->
   <section id="about">

      <div class="row bio-container">
        <div class="twelve columns bio-inner">
         <div class="six columns bio-left"> 
         <div class="pp-container">

            <img class="profile-pic wow zoomIn"  src="static/picture/avatar.jpg" alt="" />
              <h2>John Doe</h2>
              <h3>UI/UX Developer</h3>              
            </div> <!-- Profile Picture -->
         </div>


         <div class="six columns main-col wow fadeIn">
          <div class="arrow-left"></div>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>

          <div class="row">            
            <div class="six columns download">
                <p>
                  <a href="#contact" class="button"><i class="fa fa-paper-plane"></i>Hire Me</a>
                  <a href="resume.pdf" class="button" target="_blank"><i class="fa fa-download"></i>Download Resume</a>
                </p>
            </div> <!-- Download Buttons --> 
      </div>

         </div> <!-- end .main-col -->
      </div>
      </div>


   </section> <!-- About Section End-->


   <!-- Resume Section
   ================================================== -->
   <section id="resume">
    <h1 class="section-title wow fadeInDown">Resume</h1>
      <!-- Education
      =============================================== -->
      <div class="row education">

         <div class="three columns header-col">
            <h2><span>Education</span></h2>
         </div>

      <div class="nine columns main-col">
         <div class="education-timeline">
            <ul class="timeline">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">January 2008 - December 2012</p>
                  <h3>University of Engineering</h3>
                  <h4>Bachelor of Science</h4>
                  <p><strong>Computer Science &amp; Engineering</strong><br>
                     Completed graduation from University of Engineering with the major of Computer Science &amp; Engineering. Achieved the Dean Award for extra-ordinary result.</p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">January 2006 - December 2008</p>
                  <h3>College of Awesomeness</h3>
                  <h4>A Level</h4>
                  <p><strong>Grade A++</strong><br>
                     Completed A Level from College of Awesomeness with and finished A Level with A++. Achieved the Principal Award for extra-ordinary result.</p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">January 2000 - December 2006</p>
                  <h3>School of Amusement</h3>
                  <h4>O Level</h4>
                  <p><strong>Grade A++</strong><br>
                     Completed O Level from College of Amusement with and finished O Level with A++. Achieved the Principal Award for extra-ordinary result.</p>
                </div>
              </li>
            </ul>  
         </div> <!-- Education Timeline End --> 
      </div> <!-- main-col end -->

      </div> <!-- End Education -->


      <!-- Work
      ========================================= -->
      <div class="row work">

         <div class="three columns header-col">
            <h2><span>Employment</span></h2>
         </div>

         <div class="nine columns main-col">

         <div class="work-timeline">
            <ul class="timeline">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">January 2013 - Present</p>
                  <h3>Fantasy IT Kingdom</h3>
                  <h4>Lead Developer</h4>
                  <p>Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Vestibulum gravida nulla nec justo congue, vitae sodales massa ullamcorper. </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">January 2006 - December 208</p>
                  <h3>Awesome Softwares</h3>
                  <h4>UI/UX Engineer</h4>
                  <p> Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Vestibulum gravida nulla nec justo congue, vitae sodales massa ullamcorper. </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">January 2000 - December 2006</p>
                  <h3>Amazing Developers</h3>
                  <h4>Front-End Developer</h4>
                  <p>Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Vestibulum gravida nulla nec justo congue, vitae sodales massa ullamcorper. </p>
                </div>
              </li>
            </ul>  
         </div> <!-- Work Timeline End --> 
         </div> <!-- main-col end -->

      </div> <!-- End Work -->


      <!-- Skills
      =============================================== -->
      <div class="row skill">

         <div class="three columns header-col">
            <h2><span>Skills</span></h2>
         </div>

         <div class="nine columns main-col">

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>

        <div class="bars">

           <ul class="skills">
            <li><span class="bar-expand photoshop wow fadeInLeft"></span><em>Photoshop</em></li>
            <li><span class="bar-expand illustrator wow fadeInLeft"></span><em>Illustrator</em></li>
            <li><span class="bar-expand wordpress wow fadeInLeft"></span><em>Wordpress</em></li>
            <li><span class="bar-expand css wow fadeInLeft"></span><em>CSS</em></li>
            <li><span class="bar-expand html5 wow fadeInLeft"></span><em>HTML5</em></li>
            <li><span class="bar-expand jquery wow fadeInLeft"></span><em>jQuery</em></li>
          </ul>

        </div><!-- end skill-bars -->

      </div> <!-- main-col end -->

      </div> <!-- End skills -->

      <!-- Awards
      =============================================== -->
      <div class="row awards">

         <div class="three columns header-col">
            <h2><span>Recognition</span></h2>
         </div>

         <div class="nine columns main-col">

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>

				<div class="award-list">

				   <ul>
             <li class="wow fadeIn">
                <span><i class="fa fa-trophy fa-5x pull-left fa-fw"></i></span>
                <h3>App Development Contest</h3>
                <h5>Winner</h5>
                <h4>Dhaka, Bangladesh</h4>
             </li>
             <li class="wow fadeIn">
                <span><i class="fa fa-trophy fa-5x pull-left fa-fw"></i></span>
                <h3>Best Front-End Developers Award</h3>
                <h5>Top Front-End Developer</h5>
                <h4>San Fransisco, USA</h4>
             </li>
             <li class="wow fadeIn">
                <span><i class="fa fa-trophy fa-5x pull-left fa-fw"></i></span>
                <h3>Awesome UI/UX Designers Award</h3>
                <h5>Best UI/UX Designer</h5>
                <h4>New York, USA</h4>
             </li>
					   <li class="wow fadeIn">
                <span><i class="fa fa-microphone fa-5x pull-left fa-fw"></i></span>
                <h3>UX Conference</h3>
                <h5>Speaker</h5>
                <h4>Dhaka, Bangladesh</h4>
             </li>

					</ul>

				</div><!-- end awards list -->

			</div> <!-- main-col end -->

      </div> <!-- End skills -->

   </section> <!-- Resume Section End-->


   <!-- Portfolio Section
   ================================================== -->
   <section id="portfolio">

      <div class="row">

         <div class="twelve columns collapsed">

            <h1 class="section-title wow fadeInDown">Some of My Works</h1>

            <!-- portfolio-wrapper -->
            <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf wow fadeIn">

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-01" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                          <h5>Portfolio Title</h5>
                              <p>Illustrration</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div> <!-- item end -->

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-02" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                          <h5>Portfolio Title</h5>
                              <p>Web Development</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div> <!-- item end -->

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-03" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                          <h5>Portfolio Title</h5>
                              <p>Webdesign</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div> <!-- item end -->

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-04" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                          <h5>Portfolio Title</h5>
                              <p>Photography</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div> <!-- item end -->

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-05" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                          <h5>Portfolio Title</h5>
                              <p>Branding</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div> <!-- item end -->

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-06" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                          <h5>Portfolio Title</h5>
                              <p>Photography</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div> <!-- item end -->

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-07" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                         <h5>Portfolio Title</h5>
                              <p>Illustrration</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div> <!-- item end -->

               <div class="columns portfolio-item">
                  <div class="item-wrap">

                     <a href="#modal-08" title="">
                        <img alt="" src="static/picture/0138cffd4a5f4e0e987f4a0cd06c6840.gif">
                        <div class="overlay">
                           <div class="portfolio-item-meta">
                          <h5>Portfolio Title</h5>
                              <p>Web Development</p>
                       </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-plus fa-2x"></i></div>
                     </a>

                  </div>
              </div>  <!-- item end -->

            </div> <!-- portfolio-wrapper end -->

         </div> <!-- twelve columns end -->


         <!-- Modal Popup
        =============================================== -->

         <div id="modal-01" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Webdesign</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-01 End -->

         <div id="modal-02" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Web Development</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-02 End -->

         <div id="modal-03" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-03 End -->

         <div id="modal-04" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Photography</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-04 End -->

         <div id="modal-05" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Webdesign</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-05 End -->

         <div id="modal-06" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Photography</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-06 End -->

         <div id="modal-07" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Branding, Illustration</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-07 End -->

         <div id="modal-08" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="static/picture/2b18e01c35934b4982af5489dd7b35e7.gif" alt="" />

          <div class="description-box">
            <h4>This is title</h4>
            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span class="categories"><i class="fa fa-tag"></i>Webdesign, Photography</span>
          </div>

            <div class="link-box">
               <a href="#" class="button">Live Demo</a>
             <a class="popup-modal-dismiss button btn-close">Close</a>
            </div>

        </div><!-- modal-01 End -->


      </div> <!-- row End -->

   </section> <!-- Portfolio Section End-->



   <!-- Call-To-Action Section
   ================================================== -->
   <section id="call-to-action">

      <div class="row">

         <div class="two columns header-col">
            <h1 class="wow fadeInLeft">
              <span><i class="fa fa-paper-plane fa-5x pull-left fa-fw"></i></span>
            </h1>
         </div>

         <div class="seven columns">            
            <h2 class="wow zoomIn">Hire me for your awesome project</h2>
            <p>I am available for Freelance projects that depends on your project value. Hire me and get your project done!</p>

         </div>

         <div class="three columns action wow fadeIn">

            <a href="#contact" class="button">Hire me Now</a>

         </div>

      </div>

   </section> <!-- Call-To-Action Section End-->


   <!-- Testimonials Section
   ================================================== -->
   <section id="testimonials">
      <div class="text-container">
         <div class="row">
          <div class="twelve columns flex-container">
            <h1 class="section-title wow fadeInDown">Client Testimonials</h1>

            <div id="testimonial-slides" class="owl-carousel">
              <div> 
                <blockquote><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                 <cite> Jonathan Doe</cite>
              </blockquote> 
              </div> <!-- Single testimonial -->

              <div> 
                <blockquote><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                 <cite> Jane Doe</cite>
              </blockquote> 
              </div> <!-- Single testimonial -->

              <div> 
                <blockquote><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                 <cite> John Doe</cite>
              </blockquote> 
              </div> <!-- Single testimonial -->

            </div> <!-- Owl Carousel End --> 

          </div> <!-- Testimonial-container ends -->

         </div> <!-- row ends -->

       </div>  <!-- text-container ends -->

   </section> <!-- Testimonials Section End-->


   <!-- Contact Section
   ================================================== -->
   <section id="contact">

      <div class="row section-head">
          <div class="twelve columns">
              <h1 class="section-title wow fadeInDown">Get In Touch</h1>
              <p class="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p>
          </div>
      </div> <!-- Section head --> 

      <div class="row">
          <div class="five columns">
             <div class="form-container wow fadeIn">
               <!-- form -->

               <form action="#" method="post" id="contactForm" name="contactForm">
                  <fieldset>

                        <div>
                     <input type="text" placeholder="Name" value="" size="35" id="contactName" name="contactName">
                        </div>

                        <div>
                     <input type="text" placeholder="Email" value="" size="35" id="contactEmail" name="contactEmail">
                        </div>

                        <div>
                     <input type="text" placeholder="Subject" value="" size="35" id="contactSubject" name="contactSubject">
                        </div>

                        <div>
                           <textarea cols="5" rows="5" placeholder="Message" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                         <!-- contact-warning -->
                         <div id="message-warning"> Error boy</div>
                           <button class="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="static/picture/loader.gif">
                           </span>
                        </div>

                 </fieldset>
                </form> <!-- Form End -->
                         <!-- contact-success -->
                         <div id="message-success">
                                <i class="fa fa-check"></i>Your message was sent, thank you!<br>
                         </div>
            </div>  <!-- Form Container End -->
          </div>

      <div class="seven columns">
<!--         <h1><span>Find me on Google Map</span></h1> -->
         <!-- Start Google Map -->
         <div id="map"></div>
         <!-- End -->
      </div> <!-- Row ends-->


      </div> <!-- Row ends-->



   </section> <!-- Contact Section End-->


   <!-- footer
   ================================================== -->
   <footer>

      <div class="row">

         <div class="twelve columns">

            <ul class="social-links">
               <li><a href="#"><i class="fa fa-facebook"></i></a></li>
               <li><a href="#"><i class="fa fa-twitter"></i></a></li>
               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i class="fa fa-instagram"></i></a></li>
               <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
               <li><a href="#"><i class="fa fa-skype"></i></a></li>
            </ul>

            <ul class="copyright">
               <li>John Doe &copy; Copyright 2014, All Rights Reserved</li>
               
            </ul>

         </div>

         <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="fa fa-chevron-up"></i></a></div>

      </div>

   </footer> <!-- Footer End-->
  </div>
</template>
