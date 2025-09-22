"use client";

// Import the image
import aboutImage from '../../assets/images/aboutUs/about.png';

export default function AboutSection() {
  return (
    <section style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', width: '100%', gap: '40px' }}>
        
        {/* Left Image */}
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src={aboutImage.src} 
            alt="About Us"
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              borderRadius: '12px', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
            }}
          />
        </div>

        {/* Right Text */}
        <div style={{ flex: '1 1 400px' }}>
          <h2 className="fs_36 fw_700">About Us</h2>
          <p className="fs_16 fw_400" style={{ marginTop: '20px', lineHeight: '1.6' }}>
            At IT Alliance Tech, we believe technology should empower businesses to grow smarter, faster, and stronger. Our mission is simple: deliver reliable, customized IT and digital solutions that help companies stand out in today’s competitive world. From web development and applications to digital marketing and consulting, we combine creativity with technical expertise to build solutions that drive measurable results.
          </p>
          <p className="fs_16 fw_400" style={{ marginTop: '20px', lineHeight: '1.6' }}>
            What makes us different is our people-first approach. We don’t just deliver projects — we build partnerships. By understanding your goals and challenges, we craft strategies tailored to your business needs, ensuring long-term growth and success. With a team that values innovation, trust, and collaboration, IT Alliance Tech is your partner in turning digital opportunities into real business impact.
          </p>
        </div>

      </div>
    </section>
  );
}
 