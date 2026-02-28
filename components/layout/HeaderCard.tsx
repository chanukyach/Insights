"use client";

import Image from 'next/image';
import Link from 'next/link';
import { SocialIcons } from './SocialIcons';
import { FollowButton } from '@/components/follow/FollowButton';
import { NavigationTabs } from './NavigationTabs';

export function HeaderCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Cover / Banner */}
      <div className="h-24 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600" />

      {/* Profile section */}
      <div className="px-6 pb-5">
        {/* Avatar + Follow row */}
        <div className="flex items-end justify-between -mt-10 mb-3">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-md overflow-hidden bg-blue-100">
              <Image
                src="/profile.jpg"
                alt="Chanukya Chintada"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                priority
                onError={(e) => {
                  // Fallback to initials if image not found
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback initials */}
              <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold text-xl bg-blue-100">
                CC
              </div>
            </div>
          </div>
          <FollowButton />
        </div>

        {/* Name & tagline */}
        <div className="mb-3">
          <h1 className="text-xl font-bold text-gray-900">Chanukya Chintada</h1>
          <p className="text-sm text-gray-600 mt-0.5">
            Cybersecurity Enthusiast · SOC Analyst · Developer
          </p>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            India
          </div>
        </div>

        {/* Links row */}
        <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-3 text-sm">
          <Link
            href="https://chanukyachintada.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
            Website
          </Link>
          <Link
            href="https://linkedin.com/in/chanukyachintada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Portfolio
          </Link>
        </div>

        {/* Social icons */}
        <div className="mb-4">
          <SocialIcons />
        </div>

        {/* Navigation divider */}
        <div className="border-t border-gray-100 pt-3">
          <NavigationTabs />
        </div>
      </div>
    </div>
  );
}
