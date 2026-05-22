export interface Partner {
  icon: 'camera' | 'document' | 'video' | 'handshake'
  name: string
  description: string
  tag: string
}

export const partners: Partner[] = [
  {
    icon: 'camera',
    name: 'Husseni Shamsudeen',
    description:
      "Lead photographer and visual storyteller behind After90's most iconic sports imagery across Africa and beyond.",
    tag: 'Photography',
  },
  {
    icon: 'document',
    name: 'Medium',
    description:
      'Our primary publishing platform for long-form chronicles, essays, and features at medium.com/@afterninetygh.',
    tag: 'Publishing',
  },
  {
    icon: 'video',
    name: 'YouTube',
    description:
      'Video coverage, event films, and original productions on our channel at youtube.com/@after90.',
    tag: 'Video',
  },
  {
    icon: 'handshake',
    name: 'Collaborate',
    description:
      "Brands, events, and organisations who want to tell better sports stories — reach out and let's build together.",
    tag: 'Partnerships',
  },
]
