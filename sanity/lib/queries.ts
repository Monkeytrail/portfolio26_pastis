const testimonialFields = `quote, name, role, company`;

const projectCardFields = `
  _id, title, slug { current }, shortDescription, year, client, role, outcome, tags, disciplines,
  coverImage, coverImageLight, "coverVideoUrl": coverVideo.asset->url
`;

export const projectsQuery = `*[_type == "project" && featured == true] | order(order asc, year desc) {
  ${projectCardFields}
}`;

export const allProjectsQuery = `*[_type == "project"] | order(order asc, year desc) {
  ${projectCardFields}
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id, title, slug { current }, shortDescription, description, client, year, role, team, timeline, outcome, nda,
  disciplines, tools, tags, coverImage, coverImageLight, metrics, detailedContent, links,
  "testimonials": *[_type == "testimonial" && project._ref == ^._id] { ${testimonialFields} }
}`;

export const projectSlugsQuery = `*[_type == "project"]{ "slug": slug.current }`;

export const projectNavQuery = `*[_type == "project" && featured == true] | order(order asc, year desc) {
  title, "slug": slug.current, client
}`;

export const aboutQuery = `*[_type == "about"][0] {
  eyebrow, headline, subheadline, profileImage, intro, getInTouchLabel,
  skills, tools, whatILove, skillCards,
  skillsSectionLabel, skillsSectionHeading, skillsSectionSubheading,
  experienceSectionLabel, experienceSectionHeading, experienceSectionSubheading, experience,
  educationSectionLabel, educationSectionHeading, education,
  contactSectionLabel, contactSectionHeading, quote, email, linkedinUrl
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteTitle, siteDescription, logo, brand,
  heroHeadline, heroEyebrow, heroSubheadline, homeHeroCtaLabel, homeAboutCtaLabel,
  availability, proofStats, proofCompanies, "cvUrl": cv.asset->url + "?dl=",
  pillars,
  workSectionLabel, workSectionHeading, workSectionSubheading,
  systemTeaser, contactHeading,
  aboutPageTitle, aboutPageDescription,
  projectBackLinkLabel,
  contactEmail, footerTagline, footerCopyright, socialLinks
}`;

export const systemPageQuery = `*[_type == "systemPage"][0] {
  metaTitle, metaDescription, eyebrow, headline, intro,
  principlesHeading, principles, foundationsIntro, componentsIntro,
  workflowHeading, workflow, links
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true] {
  ${testimonialFields}
}`;
