import React from 'react'

export default function Top() {
    function openInstaGram() {
        console.log("Inside")
        window.open("https://www.instagram.com/e_invitation_junction/", "_blank");
    }

  return (
    <div>Top

<button className='bg-pink-500 py-5 px-5 cursor-pointer' onClick={openInstaGram}>Test</button>

    </div>
  )
}
