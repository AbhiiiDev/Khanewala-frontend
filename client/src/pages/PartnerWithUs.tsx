import { Button } from '@/components/ui/button';
import React from 'react';
import HeroImage from '@/assets/HeroImage.jpg'
import { useNavigate } from 'react-router-dom';
const PartnerWithUs: React.FC = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className=''>
        <div className='absolute inset-0 z-0 opacity-50'>
    <img src={HeroImage} className='w-full h-screen bg-cover bg-center max-h-[415px] object-cover '/>
        </div>
    <section className="relative text-center py-12 px-4 mt-10 md:mt-32 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <span className="text-xl font-bold">Khane<span className='text-orange-500'>Wala</span></span>
          <span className="text-sm ml-2 text-black font-semibold">— restaurant partner —</span>
        </div>
        <h1 className="text-xl md:text-4xl font-bold mb-4">Partner with us and grow your business</h1>
        <p className="text-sm md:text-lg text-black mb-6 font-semibold">0% commission for first month! Valid for new restaurant partners in select cities</p>
        <Button size="default" className="bg-black text-lg rounded-md hover:bg-orange-600 hover:text-black" onClick={()=>navigate('/manageRestaurant')}>
          Register your restaurant
        </Button>
      </div>
     
     
    </section>
    </div>
    </>
  );
};

export default PartnerWithUs;