export interface TextProps {
  class: string;
  text: string;
}

export interface MessageBodyObject {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

export interface ButtonLinkProps {
  buttonText: string;
  URL: string;
  id: string;
  iconHTML: any;
}

export interface CodeIconProps {
  iconHTML: any;
}

export interface ContactIconProps {
  iconHTML: any;
  URL: string;
  id: string;
}

export interface ContactInfoProps {
  type: string;
  value: string;
}

export interface NavLinkProps {
  name: string;
  pathName: string;
}
