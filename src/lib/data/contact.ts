export type ContactData = {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  address: string;
};

export const contactData = {
  email: process.env.NEXT_PUBLIC_EMAIL,
  phone: process.env.NEXT_PUBLIC_PHONE,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
  github: process.env.NEXT_PUBLIC_GITHUB_LINK,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
  address: process.env.NEXT_PUBLIC_ADDRESS,
};