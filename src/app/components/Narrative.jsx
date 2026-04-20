import React from 'react';

const Narrative = () => {
  return (
    <section className="mt-35 mb-20">
      <div className='col-span-7 place-self-center text-center'>
        <h1 className="text-white mb-10 text-4xl sm:text-6xl lg:text-6xl font-bold">
          Narrative Portfolio
        </h1>
      </div>
      <div className="flex justify-center items-center mt-8 px-4">
        <iframe 
          src="/images/MoeNarrativePortfolio.pdf"
          width="70%" 
          height="800px"
          className="border-0 rounded-lg"
          title="Narrative Portfolio PDF"
        />
      </div>
    </section>
  );
};

export default Narrative;