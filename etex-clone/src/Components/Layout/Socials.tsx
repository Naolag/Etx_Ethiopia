import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const Socials: React.FC = () => {

  const [showSocials, setShowSocials] = useState(true);

 

  const handleScroll = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowSocials(heroBottom < 0); // show only after hero is scrolled out of view
    }
  };

  useEffect(() => {
    
   
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const iconClass =
    'bg-black rounded-[10%] transition-transform duration-500 hover:scale-110';

  if (!showSocials) return null; // don't render when hero is visible

  return (
    <aside className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col p-2 sm:p-3 md:p-4 border-2 border-cyan-400 rounded-l-2xl bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col">
        {[
          'https://www.facebook.com/your_account',
          'https://www.linkedin.com/in/your_account',
          'https://www.tiktok.com/',
          'https://x.com/',
          'https://telegram.org/',
          'https://www.instagram.com/etexethiopia/',
        ].map((url, index) => (
          <SocialIcon
            key={index}
            url={url}
            bgColor="transparent"
            fgColor="#fff"
            style={{ height:40, width:40 }}
            className={iconClass}
          />
        ))}
      </div>
    </aside>
  );
};

export default Socials;
