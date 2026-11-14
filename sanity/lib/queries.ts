const projectCardFields = `
  _id, title, slug { current }, shortDescription, year, client, tags, disciplines, gridSize,
  coverImage, coverImageLight, "coverVideoUrl": coverVideo.asset->url
`;

export const projectsQuery = `*[_type == "project" && featured == true] | order(order asc, year desc) {
  ${projectCardFields}
}`;

export const allProjectsQuery = `*[_type == "project"] | order(order asc, year desc) {
  ${projectCardFields}
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id, title, slug { current }, shortDescription, description, client, year, role, disciplines, tools, tags,
  coverImage, coverImageLight, metrics, detailedContent, links
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
