export const projectsQuery = `*[_type == "project" && featured == true] | order(order asc) {
  _id, title, slug { current }, shortDescription, description, year, client, coverImage, coverImageLight, tags
}`;

export const allProjectsQuery = `*[_type == "project"] | order(order asc) {
  _id, title, slug { current }, shortDescription, description, year, client, coverImage, tags
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id, title, slug { current }, shortDescription, description, client, year, coverImage, detailedContent, links
}`;

export const projectSlugsQuery = `*[_type == "project"]{ "slug": slug.current }`;

export const aboutQuery = `*[_type == "about"][0] {
  headline, subheadline, profileImage, intro, whatILove, skills, skillCards, experience, education, quote, email, linkedinUrl
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteTitle, siteDescription, logo, brand, heroHeadline, heroEyebrow, heroSubheadline, contactEmail, footerTagline, footerCopyright, socialLinks
}`;
