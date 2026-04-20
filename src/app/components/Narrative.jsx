import React from 'react';

const Narrative = () => {
  return (
    <section className="mt-40 mb-20">
      <div className='col-span-7 place-self-center text-center'>
        <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-6xl font-bold">
          Narrative Portfolio
        </h1>
      </div>
      <div className="flex justify-center items-center mt-4 px-4">
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