import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const Socials: React.FC = () => {
  const [iconSize, setIconSize] = useState(60);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) setIconSize(90);     
    else if (width >= 768) setIconSize(80); 
    else if (width >= 640) setIconSize(70); 
    else setIconSize(60);                   
  };

  useEffect(() => {
    handleResize(); // set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iconClass =
    'bg-black rounded-[10%] transition-transform duration-500 hover:scale-110';

  return (
    <aside className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col p-2 sm:p-3 md:p-4 border-2 border-cyan-400 rounded-l-2xl bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col ">
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
            style={{ height: iconSize, width: iconSize }}
            className={iconClass}
          />
        ))}
      </div>
    </aside>
  );
};

export default Socials;
