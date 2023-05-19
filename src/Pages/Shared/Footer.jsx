import React from 'react';
import logo from '../../assets/company_logo/logo.png'
import { FaBeer, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-[#EA624C] font-bold text-white mt-8">
                <div>
                    <img className='w-[200px]' src={logo} alt="" />
                    <p className='font-bold'>TOY CARS Industries Ltd.<br />Providing reliable tech since 2000</p>
                </div>
                <div>
                    <span className="footer-title">Links</span>
                    <a className="link link-hover">All Toys</a>
                    <a className="link link-hover">My Toys</a>
                    <a className="link link-hover">Blog</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Social Link</span>
                    <div className='flex gap-4'>
                        <a className='p-2 border rounded-full bg-[#3b5998]'><FaFacebook size='2em'></FaFacebook></a>
                        <a className='p-2 border  rounded-full bg-[#00acee]'><FaTwitter size='2em'></FaTwitter></a>
                        <a className='p-2 border  rounded-full bg-white'><FaGithub className='text-black' size='2em'></FaGithub></a>
                    </div>
                </div>
            </footer>
            <footer>
                <div className="text-center py-3">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;