"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  bio?: React.ReactNode;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode;
  socialLinksMain?: SocialLink[];
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32",
          className
        )}
        {...props}
      >
        <div className="container mx-auto max-w-7xl grid items-center justify-center gap-12 px-4 text-center md:px-6">
          {/* Background Grid - for visual appeal */}
          <div className="absolute inset-0 z-0 opacity-[0.03]">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-black"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:text-left lg:gap-8">
            <div className="grid gap-4 text-center md:text-left">
              <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-black uppercase font-heading">
                <span className="text-red-600 block text-lg sm:text-xl md:text-2xl font-bold tracking-widest mb-2">
                  L E A D E R S H I P
                </span>
                {title}
              </h2>
              <p className="max-w-[700px] text-black/60 md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed font-medium">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-end">
              {logo && <div className="text-2xl font-bold">{logo}</div>}
              {registerLink && (
                <a
                  href={registerLink}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 px-8 text-sm font-bold uppercase tracking-widest text-white shadow hover:bg-black transition-colors"
                >
                  Work With Us
                </a>
              )}
            </div>
          </div>

          {/* Main Social Links */}
          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-4 md:justify-start">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/40 hover:text-red-600 transition-colors"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          )}

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {members.map((member, index) => (
              <DialogPrimitive.Root key={index}>
                <DialogPrimitive.Trigger asChild>
                  <div
                    className="group cursor-pointer relative flex flex-col items-center justify-end overflow-hidden rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl border border-black/5"
                  >
                    {/* Background wave animation */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[60%] origin-bottom scale-y-0 transform rounded-t-[100%] bg-gradient-to-t from-red-600/10 to-transparent transition-transform duration-700 ease-out group-hover:scale-y-100"
                    />

                    {/* Member Image with mask and border animation */}
                    <div
                      className="relative z-10 h-40 w-40 overflow-hidden rounded-full border-4 border-transparent bg-[#fafafa] transition-all duration-500 ease-out group-hover:border-red-600 group-hover:scale-110 mb-6 shadow-sm"
                    >
                      <img
                        src={member.imageSrc}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    <h3 className="relative z-10 text-2xl font-black font-heading text-black uppercase">
                      {member.name}
                    </h3>
                    <p className="relative z-10 text-sm font-bold tracking-widest uppercase text-red-600 mt-2">
                      {member.designation}
                    </p>

                    {/* Social Links for individual members */}
                    {member.socialLinks && member.socialLinks.length > 0 && (
                      <div className="relative z-10 mt-6 flex gap-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        {member.socialLinks.map((link, linkIndex) => (
                          <div
                            key={linkIndex}
                            className="text-black/40 hover:text-red-600 transition-colors"
                            onClick={(e) => e.stopPropagation()} // Prevent opening dialog when clicking social link
                          >
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                              <link.icon className="h-5 w-5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </DialogPrimitive.Trigger>
                
                {/* BIO MODAL */}
                <DialogPrimitive.Portal>
                  <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                  <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-black/10 bg-white p-6 md:p-10 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-3xl max-h-[90vh] overflow-y-auto">
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/3 flex flex-col items-center">
                        <div className="h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-black/5 bg-[#fafafa] shadow-md mb-4 shrink-0">
                           <img src={member.imageSrc} alt={member.name} className="h-full w-full object-cover grayscale" />
                        </div>
                        {member.socialLinks && member.socialLinks.length > 0 && (
                          <div className="flex gap-4">
                            {member.socialLinks.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black/40 hover:text-red-600 transition-colors bg-black/5 p-3 rounded-full"
                              >
                                <link.icon className="h-5 w-5" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="w-full md:w-2/3">
                        <DialogPrimitive.Title className="text-3xl font-black uppercase font-heading text-black tracking-tighter">
                          {member.name}
                        </DialogPrimitive.Title>
                        <DialogPrimitive.Description className="text-sm font-bold uppercase tracking-widest text-red-600 mt-2 mb-6 border-b border-black/10 pb-6">
                          {member.designation}
                        </DialogPrimitive.Description>
                        
                        <div className="text-black/70 font-medium leading-relaxed space-y-4">
                          {member.bio}
                        </div>
                      </div>
                    </div>

                    <DialogPrimitive.Close className="absolute right-6 top-6 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-black/5 p-2 hover:bg-red-600 hover:text-white">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                  </DialogPrimitive.Content>
                </DialogPrimitive.Portal>
              </DialogPrimitive.Root>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
