import hero from "@/assets/academy-hero.jpg";
import passion from "@/assets/journey-passion.jpg";
import skill from "@/assets/journey-skill.jpg";
import business from "@/assets/journey-business.jpg";
import digital from "@/assets/journey-digital.jpg";
import opportunity from "@/assets/journey-opportunity.jpg";
import training from "@/assets/benefit-training.jpg";
import practical from "@/assets/benefit-practical.jpg";
import entrepreneurship from "@/assets/benefit-entrepreneurship.jpg";
import digitalSkills from "@/assets/benefit-digital.jpg";
import portfolio from "@/assets/benefit-portfolio.jpg";
import certification from "@/assets/benefit-certification.jpg";
import guidance from "@/assets/benefit-guidance.jpg";
import careerArtist from "@/assets/career-artist.jpg";
import careerTechnician from "@/assets/career-technician.jpg";
import careerExtension from "@/assets/career-extension.jpg";
import careerEducator from "@/assets/career-educator.jpg";
import careerFreelance from "@/assets/career-freelance.jpg";
import careerBridal from "@/assets/career-bridal.jpg";
import careerSalon from "@/assets/career-salon.jpg";
import careerStudio from "@/assets/career-studio.jpg";
import careerHome from "@/assets/career-home.jpg";
import careerCreator from "@/assets/career-creator.jpg";
import professionalTraining from "@/assets/professional-training.jpg";
import certificationSupport from "@/assets/certification-support.jpg";
import placementAssistance from "@/assets/placement-assistance.jpg";
import internshipSalon from "@/assets/internship-salon.jpg";

export const COURSE_IMAGES = {
  hero,
  transformation: [passion, skill, business, digital, opportunity],
  journey: [training, practical, entrepreneurship, digitalSkills, portfolio, certification, guidance],
  careers: [careerArtist, careerTechnician, careerExtension, careerEducator, careerFreelance, careerBridal, careerSalon, careerStudio, careerHome, careerCreator],
  professionalTraining,
  certificationSupport,
  placementAssistance,
  internshipSalon,
} as const;

const allImages = [COURSE_IMAGES.hero, ...COURSE_IMAGES.transformation, ...COURSE_IMAGES.journey, ...COURSE_IMAGES.careers, COURSE_IMAGES.professionalTraining, COURSE_IMAGES.certificationSupport, COURSE_IMAGES.placementAssistance, COURSE_IMAGES.internshipSalon];
if (new Set(allImages).size !== allImages.length) throw new Error("Course image mapping contains a repeated image");