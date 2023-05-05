import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';

import { useMatchMedia } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { MobileSlider } from 'shared/ui/Slider';

export const ActiveCategories: FC = () => {
  // брать из redux
  const activeCategories = [
    'Samsung',
    'Apple',
    'Poco',
    'Metallic',
    '4 star',
    '3 star',
  ];
  const { isMobile } = useMatchMedia();

  return (
    <div className={'flex flex-wrap items-center gap-2 mb-5'}>
      <MobileSlider>
        {activeCategories.map(category => (
          <Button
            className={
              'flex items-center pl-2.5 pr-[6px] py-[6.5px] gap-2 border border-blue bg-white text-gray-dark'
            }
            key={category}>
            {category}
            <IoMdClose size={18} className={'text-gray-hot'} />
          </Button>
        ))}
      </MobileSlider>
      {!isMobile && (
        <Button className={'text-blue rounded-none'}>Clear all filter</Button>
      )}
    </div>
  );
};