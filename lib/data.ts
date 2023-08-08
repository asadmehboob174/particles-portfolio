import React from "react";
import { FaHome, FaPeopleArrows, FaUser } from 'react-icons/fa'
import { BiUser, BiSolidMessageRounded, BiLogoFacebook } from 'react-icons/bi'
import { MdOutlineWork } from 'react-icons/md'
import { FaEnvelope } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { TfiTwitter } from 'react-icons/tfi';
import { GrGithub } from 'react-icons/gr';
import { PiInstagramLogo } from 'react-icons/pi';

export const links = [
  {
    title: 'Home',
    path: '/',
    icon: React.createElement(FaHome)
  },
  {
    title: 'About',
    path: '/about',
    icon: React.createElement(FaUser)
  },
  {
    title: 'Work',
    path: '/work',
    icon: React.createElement(MdOutlineWork)
  },
  {
    title: 'Comments',
    path: '/comments',
    icon: React.createElement(FaPeopleArrows)
  },
  {
    title: 'Message',
    path: '/message',
    icon: React.createElement(BiSolidMessageRounded)
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: React.createElement(FaEnvelope)
  }
] as const;

export const socialLinks = [
  {
    title: 'twitter',
    path: 'https://twitter.com/',
    icon: React.createElement(TfiTwitter)
  },
  {
    title: 'facebook',
    path: 'https://www.facebook.com/',
    icon: React.createElement(BiLogoFacebook)
  },
  {
    title: 'linkedin',
    path: 'https://www.linkedin.com/',
    icon: React.createElement(CiLinkedin)
  },
  {
    title: 'github',
    path: 'https://github.com/',
    icon: React.createElement(GrGithub)
  },
  {
    title: 'instagram',
    path: 'https://www.instagram.com/',
    icon: React.createElement(PiInstagramLogo)
  },
] as const