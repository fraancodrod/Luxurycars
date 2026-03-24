import React from 'react'

const Footer = () => {
  return (
      <section className='row text-center bg-info p-4'>
            <div className='col-md-4 text-light'>
                <h4 className='text-light'>About us</h4>
                <p>Welcome to our company, where innovation meets dedication to provide unparalleled service in our industry. Founded with a vision to solve complex challenges, we have grown from a passionate startup into a trusted partner, consistently delivering value and quality solutions. Our story is rooted in the belief that combining expert knowledge with a customer-first approach creates lasting positive impact.</p>
            </div>
            <div className='col-md-4'>
                <h4>Contact us</h4>
                <form>
                    <input type="email" placeholder='Enter your Email' className='form-control'/><br />
                    <textarea cols="7" rows="7" placeholder='Leave a comment' className='form-control'></textarea><br />
                    <input type="submit" value="Send Message" className='btn btn-outline-danger' />
                </form>
            </div>
            <div className='col-md-4'>
                   <h4>Stay Connected</h4>
            <a href="https://www.facebook.com">
                <img src="icons/fb.png" alt=""/>
            </a>
            <a href="https://www.instagram.com" alt="">
                <img src="icons/in.png" alt=""/>
            </a>
            <a href="https://ww.x.com">
                <img src="icons/x.png" alt=""/>
            </a>
            <p>Staying connected with friends, family, and colleagues is essential for maintaining a sense of belonging and ensuring emotional well-being. In a fast-paced world where physical distance often separates us from loved ones, making a conscious effort to reach out helps foster stronger, lasting relationships. Regular contact, even through small gestures, provides necessary social support that combats feelings of loneliness and reduces stress.</p>
            </div>
            <div>
                <footer className='text-light bg-danger p-2 text-center'>
                    <h5>Developed by frank$$. &copy; 2026. All rights reserved</h5>
                </footer>
            </div>
      </section>

  )
}

export default Footer
