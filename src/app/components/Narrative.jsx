import React from 'react';


const Narrative = () => {
  const narrativeProjects = [
    {
      title: "Speak Your Heart",
      description: "A transformational game that explores freedom of speech and academic freedom within a campus environment. Topics such as the definition of hate speech, the importance of context in expression, the influence of social norms on speech, and the necessity of controversial discussions for academic growth are introduced and examined.",
      youtubeId: "xSP87ErN9BU",
      moreInfoLink: "https://www.moerex.com/Project24"
    },
    {
      title: "The Billy Jo Jive Experience",
      description: "A Location-Based Entertainment (LBE) project. Working with the existing Billy Jo Jive IP, the experience invites players to step into a mystery-solving adventure where they assist the iconic duo in cracking cases.",
      youtubeId: "u9NpuTKiz5Q",
      moreInfoLink: "https://www.moerex.com/Project27"
    },
    {
      title: "Purrject Rebuild",
      description: "A LEGO Fortnite game designed to teach kids about autism through play rather than instruction. Players help a team of autistic archaeologists rebuild a world by completing sensory-friendly quests, accommodating each character's unique needs, and uncovering a story centered on empathy and acceptance.",
      youtubeId: "o2_-ZgedhoA",
      moreInfoLink: "https://www.moerex.com/Project26"
    }
  ];

  return (
    <section className="mt-40 mb-20">
      <div className='col-span-7 place-self-center text-center'>
        <h1 className="text-white mb-10 text-4xl sm:text-6xl lg:text-6xl font-bold">
          Narrative Portfolio
        </h1>
      </div>

      {/* PDF Section */}
      <div className="flex justify-center items-center mt-4 px-4">
        <iframe 
          src="/images/MoeNarrativePortfolio.pdf"
          width="70%" 
          height="800px"
          className="border-0 rounded-lg"
          title="Writing Samples"
        />
      </div>

      {/* Video Showcase Section */}
      <div className="mt-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-white mb-12 text-3xl sm:text-4xl font-bold text-center">
          Gameplay Videos
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {narrativeProjects.map((project, index) => (
            <div key={index} className="flex flex-col">
              {/* YouTube Embed */}
              <div className="w-full mb-4 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              </div>
              
              {/* Title */}
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              {/* More Info Link */}
              <a
                href={project.moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 font-semibold text-sm transition duration-200"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Narrative;