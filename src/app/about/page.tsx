import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center h-screen">
        <Image
          className="w-1/2 mx-5 rounded-md"
          src="/profile/profile_pic.jpg"
          width={500}
          height={500}
          alt="Profile image failed to load!"
        />
      </div>
      <p>
        Nice to meet you, I'm Andrew! I'm from Walnut Creek, California. I
        volunteered as tribute to smell cows everyday to attend UC Davis and
        graduated with a B.A in Psychology. In my free time, you can find me at
        music festivals/concerts, surfing 3-5 feet waves, bouldering v2-v4 or
        having an existential crisis watching science videos.
      </p>
      <br />
      <p>
        Prior to software, I worked in the healthcare industry as a behavior
        therapist and parent consultant providing clinical instruction based on
        the principles of Applied Behavior Analysis to children with Autism
        Spectrum Disorder and related developmental disabilities. I was able to
        show my creativity and problem solving skills by implementing treatment
        programs for patients' particular behaviors. I love programming for the
        same reasons. I hope to continue to build better and smarter products in
        the software space that will help people!
      </p>
    </div>
  );
};

export default page;
