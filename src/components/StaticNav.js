import React from 'react'

export default function(){
  return (
    <div className="l-container StaticNav">
      <div className="l-secure">
        <div className="StaticNav__Info">
          <div className="button">
          <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.25 0C15.357 0 11.3906 3.96633 11.3906 8.85938C11.3906 12.8152 17.1809 20.025 19.3992 22.642C19.8485 23.1722 20.6522 23.1722 21.1008 22.642C23.3191 20.025 29.1094 12.8152 29.1094 8.85938C29.1094 3.96633 25.143 0 20.25 0ZM20.25 11.8125C18.6187 11.8125 17.2969 10.4906 17.2969 8.85938C17.2969 7.22812 18.6187 5.90625 20.25 5.90625C21.8813 5.90625 23.2031 7.22812 23.2031 8.85938C23.2031 10.4906 21.8813 11.8125 20.25 11.8125ZM1.41469 15.184C0.997156 15.351 0.639232 15.6392 0.387077 16.0116C0.134922 16.3839 9.9999e-05 16.8233 0 17.273L0 34.8736C0 35.6695 0.803672 36.2138 1.54266 35.9184L11.25 31.5V15.1116C10.6284 13.988 10.1201 12.8939 9.75586 11.8477L1.41469 15.184ZM20.25 25.2893C19.2607 25.2893 18.3248 24.8548 17.6829 24.0968C16.3005 22.4655 14.8303 20.6079 13.5 18.7024V31.4993L27 35.9993V18.7031C25.6697 20.6079 24.2002 22.4662 22.8171 24.0975C22.1752 24.8548 21.2393 25.2893 20.25 25.2893ZM38.9573 11.3316L29.25 15.75V36L39.0853 32.066C39.5029 31.8991 39.8609 31.6109 40.113 31.2385C40.3652 30.8661 40.5 30.4267 40.5 29.977V12.3764C40.5 11.5805 39.6963 11.0363 38.9573 11.3316Z" fill="white"/>
          </svg>
            <p>NUESTRA<br />TIENDAS</p>
          </div>
          <div className="item">
            <img src="/assets/email.svg"/>
            <p>COMPUTER@STORE.COM</p>
          </div>
          <div className="item">
            <img src="/assets/cel.svg"/>
            <p>+51 999 999 999</p>
          </div>
          <div className="item">
            <img src="/assets/phone.svg"/>
            <p>01 444 4444</p>
          </div>
        </div>
        <div className="StaticNav__Social">
          <img src="assets/whatsapp.svg"/>
          <img src="assets/facebook.svg"/>
          <img src="assets/twitter.svg"/>
          <img src="assets/instagram.svg"/>
        </div>
      </div>
    </div>
  )
}