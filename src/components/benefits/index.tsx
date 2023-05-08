import Benefit from "./Benefit";
import { SelectedPage, BenefitType } from "@/shared/types";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/benefits.png";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Our state-of-the-art bootcamp typically features spacious classrooms and computer labs, on-site resources, collaborative spacious workspaces, fitness and wellness amenities, and possibly on-site housing.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Many Diverse Classes",
    description:
      "We prioritize classroom space to allow students to engage in hands-on learning and group projects. They may have comfortable seating, whiteboards, projectors, and other equipment needed for presentations.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Technical Mentors",
    description:
      "Our technical mentors are knowledgeable in their field, possess excellent communication skills, are patient and supportive, have a passion for teaching, are able to adapt to different learning styles and are committed to their mentees' success",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A BOOTCAMP</HText>
          <p className="my-5 text-sm">
            We provide world class software training, technical mentors and
            classes to get you to your ultimate job with ease. We provide true
            care into each and every student.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MANY STUDENTS ARE BECOMING{" "}
                    <span className="text-primary-500">PROFESSIONALS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Our programs offer immersive and accelerated learning
                experiences that focus on practical, in-demand skills and
                provide students with hands-on training and real-world project
                experience, which prepares them for success in their chosen
                field. Additionally, We often have strong connections with
                industry partners and employers, which can lead to job placement
                opportunities and career networking.
              </p>
              <p className="mb-5">
                Furthermore, We also have smaller class sizes and more
                individualized attention from instructors and mentors, which can
                help students identify their strengths and weaknesses and
                receive personalized feedback and guidance on their learning
                journey.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
