const Mission = () => {
  return ( 
    <div className="flex flex-col gap-12 lg:flex-row items-center justify-between px-4 lg:px-0 lg:-mx-[170px]">
      {/* Mission Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left text-[16px] text-[#21384299] sm:pl-[170px]">
        <h3 className="text-4xl font-bold text-[#12305B]">Our Mission</h3>
        <p className="mt-6 text-justify">
          We started Sleepstiq with one simple goal: to be your best friend at bedtime. Like you, we deal with stress, unease, and trouble sleeping due to various factors such as school, work, screens, and daily pressures. That’s why we created products aimed to:
        </p>
        <ul className="mt-6 space-y-2 list-disc list-inside">
          <li>✓ Promote Calm</li>
          <li>✓ Support Sleep</li>
          <li>✓ Reduce Stress</li>
          <li>✓ Aid Relaxation</li>
        </ul>
      </div>

      {/* Mission Image */}
      <div className='w-full lg:w-1/2'>
        <img 
          src="/mission.jpg" 
          alt="A person relaxing peacefully" 
          className="w-full shadow-lg" 
        />
      </div>
    </div>
  );
};

export default Mission;
