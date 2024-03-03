import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join Matt's prehistoric newsletter to receive the latest updates to my site!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn-secondary'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <NavLink to='/sign-up'>How it works</NavLink>
                        <NavLink to='/'>Testimonials</NavLink>
                        <NavLink to='/'>Investors</NavLink>
                        <NavLink to='/'>Terms of Service</NavLink>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <NavLink to='/'>Contact</NavLink>
                        <NavLink to='/'>Support</NavLink>
                        <NavLink to='/'>Destinations</NavLink>
                        <NavLink to='/'>Sponsorships</NavLink>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <NavLink to='/'>Submit Video</NavLink>
                        <NavLink to='/'>Ambassadors</NavLink>
                        <NavLink to='/'>Agency</NavLink>
                        <NavLink to='/'>Influencer</NavLink>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <NavLink to='/'>Instagram</NavLink>
                        <NavLink to='/'>Facebook</NavLink>
                        <NavLink to='/'>Youtube</NavLink>
                        <NavLink to='/'>Twitter</NavLink>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <NavLink to='/' className='social-logo'>
                            Showcase
                            <ion-icon name="diamond-outline" />
                        </NavLink>
                    </div>
                    <small className='website-rights'>Matt's "Showcase" © 2024</small>
                    <div className='social-icons'>
                        <NavLink
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <ion-icon name="logo-facebook" />
                        </NavLink>
                        <NavLink
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <ion-icon name="logo-instagram" />
                        </NavLink>
                        <NavLink
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <ion-icon name="logo-youtube" />
                        </NavLink>
                        <NavLink
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <ion-icon name="logo-twitter" />
                        </NavLink>
                        <NavLink
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <ion-icon name="logo-linkedin" />
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;