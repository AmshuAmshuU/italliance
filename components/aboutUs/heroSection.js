import React from 'react'

const HeroSection = () => {
  return (
       <section
      className="primary_bg secondary_color"
      style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="wrapper" style={{ textAlign: 'left' }}>
        <h1 className="fs_40 fw_700">About Us</h1>
        <p className="fs_16 fw_400" style={{ marginTop: '10px' }}>
          Learn more about our company and what we do.
        </p>
      </div>
    </section>
  )
}

export default HeroSection