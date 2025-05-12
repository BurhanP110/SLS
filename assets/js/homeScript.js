const homeTranslateBtn = document.querySelector(".home-hero-translate-btn");
let isHeadingGerman = true;

const headingGerman = `<span class="text-white leading-none">Deutsch</span>
              <span class="text-[#FE9F0F] leading-none">Lernen</span>
              <span class="text-white leading-none">Deutschland</span>
              <span class="text-[#FE9F0F] leading-none">Verstehen</span>`;

const headingEnglish = `<span class="text-white leading-none">Learn</span>
              <span class="text-[#FE9F0F] leading-none">German</span>
              <span class="text-white leading-none">Understand</span>
              <span class="text-[#FE9F0F] leading-none">Germany</span>`;

homeTranslateBtn.addEventListener("click", () => {
  const heading = document.querySelector(".home-hero-heading");

  if (isHeadingGerman) {
    heading.innerHTML = headingEnglish;
    isHeadingGerman = false;
  } else {
    heading.innerHTML = headingGerman;
    isHeadingGerman = true;
  }
});

const testimonials = {
  "testimonials": [
    // {
    //   "quote": "Sprachenatelier Language studio has helped me a lot in my journey to learn German. The CEO Frau Ujwal is a great mentor and teacher. The course is structured in a very scientific and systematic manner. During the Testdaf there is a continuous drill of language training done with the students to get the best results. There are a lot of sample papers done with us and corrected very meticulously by Frau Ujwal herself.",
    //   "author": "Tyrone Pereira shares his training experience with SLS: Student",
    //   "image": "/assets/images/Testimonial-04.png"
    // },
    {
      "quote": "I've been studying German with Sprachenatelier Language Studio for over 10 months, and my experience has been phenomenal. SLS has helped with my TestDaF preparation, university application, and learning German culture. Frau Ujwal’s training has prepared me to integrate smoothly into German culture, aiding my future endeavors in Germany.",
      "author": "Krishna Vijaykar on his TestDAF preparation with SLS",
      "image": "/assets/images/Testimonial-04.png"
    },
    // {
    //   "quote": "I commend SLS for their diligence and professionalism. Frau Ujwal, the founder, is an exceptional mentor. It is an intensive course designed creatively to keep the students engaged, simultaneously educating them about German culture and lifestyle. I will definitely recommend SLS to anyone who wishes to pursue higher education in Germany or who simply wishes to learn the German language in depth.",
    //   "author": "Vaibhavi Ranade and her learning curve with SLS"
    // },
    // {
    //   "quote": "I would recommend SLS to anyone who wishes to take the TestDaF examination. This institute’s main focus is TestDaf and prepares you according to it. However, this course may be rigorous and not everyone’s cup of tea for the ones who wish to learn the language for fun. SLS is the best option for aspiring students who want to study in Germany. Highly recommended.",
    //   "author": "Vedant Chimmalgi speaks about his training programme with SLS"
    // },
    {
      "quote": "I lived in Germany and learned German (A1). In India, I advanced my German with Sprachenatelier Language Studio (SLS). Impressed by their structured, systematic program, I progressed to C1. SLS’s interactive sessions and TestDaF preparation opened doors for studies and careers in German institutions. I would definitely recommend it to anyone.",
      "author": "Asmita Gajbhiye talks about her TestDaF experience with SLS",
      "image": "/assets/images/Testimonial-06.png"
    },
    // {
    //   "quote": "I am currently doing the course at SALS with Frau Ujwal to prepare for the TestDaF, and I must say it was a unique and refreshing experience. Frau Ujwal's teaching style is interactive, and her methodology is interesting and engaging. One standout feature of the course is its integrated approach. This sets it apart from doing individual language courses. The integrated curriculum seamlessly connects language levels, creating a more efficient learning experience. This approach accelerates your language proficiency and provides a comprehensive understanding of German. Even in an online setting, the class runs smoothly. I highly recommend SLS.",
    //   "author": "Sahaj Upadhyay on his TestDaF training"
    // },
    {
      "quote" : "I have recently joined Sprachenatelier Language Studio for the TestDaf Training programme, and I couldn’t have found a better Institute to learn at. Frau Ujwal is a phenomenal mentor and has a very approachable and interesting learning methodology. She makes it very easy to understand the language in a seamless manner and is always willing to clear doubts regarding the subject. Her unique method is designed to help students to be integrated with the country, its culture and the language. She provides a straight line path to success and also constantly motivates her students to do their best. I have attended both online and offline sessions and have found that there is no difference between them. I would 100% recommend SLS to any person interested in learning German before wanting to go to Germany for higher studies or job opportunities.",
      "author" : "Rita Emerson on her TestDaf training",
      "image": "/assets/images/Testimonial-05.png"
    },
    {
      "quote" : "My experience at SALS has been amazing, Frau Ujjwal has helped me not only learn the language but also learning the cultural nuances throughout the course. Every single topic is taught in great detail and no doubt is left unattended. The course is well-designed, well presented and well paced. Frau Ujjwal is not only answers all questions but cites relevant examples which not only allows students to understand the language but also when to use particular words and phrases. The complete ensemble is contributes to allow me to work towards my dreams of doing my masters in Germany Frau has always been supportive and her positive approach makes the language as well the course holistically interesting . I would honestly recommend SALS to anyone who wants to learn German or study in a german university.",
      "author" : "Alison D'Souza",
      "image": "/assets/images/Testimonial-08.png"
    },
    {
      "quote" : "In just four months at SALS, the student experienced a warm, welcoming culture and was deeply impressed by Dr. Ujwal’s unique, systematic teaching style. Though unconventional at first, her method effectively shifted the student’s mindset from translation-based learning to thinking in German. The course not only teaches the language but also instils discipline, resilience, and a love for hard work. Unlike traditional institutes, SALS feels like a collaborative language studio that fuels curiosity and enthusiasm. The student strongly recommends SALS and Dr. Ujwal for anyone seeking true mastery of the German language.",
      "author" : "Varun Patil ",
      "image": "/assets/images/Testimonial-07.png"
    },
    {
      "quote" : "My experience of learning German at Sprachenatelier is an important part of my academic life. Frau Ujwal provided the best study material and training during the course to be able to face a very challenging exam. I am thankful to Sprachatelier for helping me in turning my dream of studying in Germany into reality and preparing me for the same.",
      "author" : "Hrishikesh Bedekar",
      "image": "/assets/images/Testimonial-09.png"

    }

  ]
}

const testimonialsContainer = document.getElementById("testimonial-container")

testimonials.testimonials.forEach(testimonial => {
  const listItem = document.createElement('li');
  listItem.classList.add('glide__slide');
  
  const content = `
    <div class="bg-white px-6 sm:px-14 py-10 sm:py-16">
      <p class="generalsans italic text-center mb-6 sm:mb-10 text-xs sm:text-base text-[var(--gray-700)]">
        “${testimonial.quote}”
      </p>
      
      <div class="flex justify-center mb-4">
        <img src="${testimonial.image}" alt="${testimonial.author}" class="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover shadow-md" />
      </div>
      
      <p class="generalsans text-sm sm:text-lg font-medium text-center">
        - ${testimonial.author}
      </p>
    </div>
  `;
  
  listItem.innerHTML = content;
  testimonialsContainer.appendChild(listItem);
});


function adjustGlideHeight() {
  const activeSlide = document.querySelector('.glide__slide--active');
  const track = document.querySelector('.glide__track');
  if (activeSlide && track) {
    track.style.height = activeSlide.offsetHeight + 'px';
  }
}

// @glidejs/glide module - added throught cdn
new Glide(".glide", {
  autoplay: 4000,
  hoverpause: true,
  type: "carousel",
}).mount();

const glide = new Glide(".glide", {
  autoplay: 4000,
  hoverpause: true,
  type: "carousel",
  animationDuration: 800,
  perView: 1,
  focusAt: 'center',
});

// // Add event listener to update height after mount and slide change
// glide.on(['mount.after', 'run.after'], () => {
//   adjustGlideHeight();
// });
//
// // Mount Glide
// glide.mount();
//
// // Optional: adjust on window resize too
// window.addEventListener('resize', adjustGlideHeight);