'use client';

import { Footer } from 'flowbite-react';

export default function FooterWithLogo() {
  return (
    <Footer container className=' md:px-[100px] rounded-none bg-gray-800'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.LinkGroup>
        <Footer.Link href="/#Home">
             <p className='text-gray-200 text-lg font-medium'>Nutri Spectrum</p> 
            </Footer.Link></Footer.LinkGroup>
          <Footer.LinkGroup>
          <Footer.Link href="/#Home">
             <p className='text-gray-200'>Home</p> 
            </Footer.Link>
          <Footer.Link href="/#About">
          <p className='text-gray-200'>About</p>
            </Footer.Link>
            <Footer.Link href="/#Service">
            <p className='text-gray-200'>Services</p> 
            </Footer.Link>
            <Footer.Link href="/#Policies">
            <p className='text-gray-200'>Policies</p>
            </Footer.Link>
            <Footer.Link href="/#News">
            <p className='text-gray-200'>News</p>
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright className='text-gray-200'
          by="NutriSpectrum™"
          href="#"
          year={2023}
        />
      </div>
    </Footer>
  )
}


