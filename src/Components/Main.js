import React, { useState } from 'react'
import bgimage from '../Images/bgimage.jpg'
import s1 from '../Images/card2.png'
import s2 from '../Images/card1.png'
import s3 from '../Images/card3.png'
import sample1 from '../Images/sample1.mp4'


export default function Main() {
 
  const[showvideo,setshowvideo] = useState(true)

  const image = bgimage
  const src1 = s1
  const src2 = s2
  const src3 = s3
  const stats = [
    { id: 1, src: `${src1}`, name: 'Personalize your invites with custom-crafted effects', value: 'Custom Invitations' },
    { id: 2, src: `${src2}`, name: 'Our team guarantees that each video is creative', value: 'Creative Design' },
    { id: 3, src: `${src3}`, name: 'Effortlessly deliver your invitations through Mail.', value: 'Digital Delivery' },
  ]
  const sample = [
    { id: 1, src: `${sample1}` },
    { id: 2, src: `${sample1}` },
    { id: 2, src: `${sample1}` },
    { id: 2, src: `${sample1}` },
    { id: 2, src: `${sample1}` },
  ]

  const statisticsData = [
    { percentage: 98, label: '✅ faster than a traditional editor' },
    { percentage: 85, label: '💰 more affordable than a traditional editor' },
    { percentage: 120, label: '😎 increased efficiency and features' },
  ];

  function showvideoes(){
    setshowvideo(true)
  }

  function showpdf(){
    setshowvideo(false)
  }

  return (
    <>
       
      <div className='relative text-center '>
  <img className='h-2/4 w-full' src={image} alt="wedding" />
  
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-pink-300'>
    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-8 whitespace-nowrap mx-auto moving-text'>
      InvitationJunction : Plan The Perfect Wedding!
    </h2>
  </div>
</div>



      <div className='items-center bg-slate-100'>

        <h1 className='text-5xl text-center font-bold  text-gray-600  py-7'>OUR SERVICES</h1>

        <div className=" sm:py-10">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16  text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">

                  <dt className="text-2xl leading-7 text-black-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-pink-500 sm:text-4xl items-center">
                    <img src={stat.src} className='w-24 h-24 mx-auto  ' alt={stat.value} />
                    {stat.value}
                  </dd>

                </div>
              ))}
            </dl>
          </div>
        </div>

      </div>

  <div className='bg-white lg:py-3  sm:py-20'>
  <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center text-pink-500 mb-1 sm:mb-8'>
    Choose Your Way To Invite with InvitationJunction
  </h2>
  <p className='text-lg lg:text-xl text-center mb-1 sm:mb-8'>
    Digital Wedding Invitation – Design your wedding invitations with us and kickstart your preparations with the invitation you aspire to create. We have a variety of templates for save the date, PDF wedding invitations, and video invitations. Take inspiration from them or create your unique Digital Wedding Invitation.
  </p>
</div>

<div className='bg-white sm:py-20 lg:py-3 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-x-4'>
  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-6 px-7 sm:w-auto underline" onClick={showvideoes}>
    Video Invitation
  </button>
  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-6 px-7 sm:w-auto relative top-[-8px] underline" onClick={showpdf}>
    PDF Invitation
  </button>
</div>

{showvideo?
  <div className='bg-white sm:py-10 flex flex-wrap justify-center space-x-4' id = 'video'>
  {sample.map((samp) => (
    <div key={samp.id} className="max-w-xs  rounded overflow-hidden shadow-lg mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <video className=" w-full rounded-lg" controls>
        <source src={samp.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="text-xl font-bold whitespace-nowrap text-center text-pink-500">
          The Face With Invitation
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-4 mt-4">
          BOOK NOW
        </button>
      </div>
    </div>
  ))}
</div>:
<div className='bg-white sm:py-10 flex flex-wrap justify-center space-x-4' id = 'video'>
  {sample.map((samp) => (
    <div key={samp.id} className="max-w-xs  rounded overflow-hidden shadow-lg mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
     
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="text-xl font-bold whitespace-nowrap text-center text-pink-500">
          The Face With Invitation
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-4 mt-4">
          BOOK NOW
        </button>
      </div>
    </div>
  ))}
</div>
}



<section id="comparison" aria-label="QuickEdit vs traditional editor" className="bg-slate-50 py-10 sm:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="font-bold text-4xl tracking-tight text-slate-900 sm:text-4xl">ABOUT INVITATION_JUNCTION</h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          We specialize in crafting stunning Digital Wedding Invitation cards and videos that make your special moments unforgettable. With innovation as our foundation and technology at our fingertips, we bring your unique story to life through mesmerizing personalized invitations. These can easily be shared via WhatsApp, Facebook, and Instagram.
        </p>
      </div>
      <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        {statisticsData.map((statistic,index) => (
           <li id= {statistic}>
           <figure className="relative rounded-2xl bg-white p-6 text-center shadow-xl shadow-slate-900/10">
             <blockquote className="relative p-3">
               <p className="text-6xl font-bold tracking-tight text-slate-900">{statistic.percentage}%</p>
             </blockquote>
             <figcaption className="text-center">
               <div className="font-display text-slate-900">{statistic.label}</div>
             </figcaption>
           </figure>
         </li>
        ))}
      </ul>
    </div>
  </section>

    </>
  )
}
