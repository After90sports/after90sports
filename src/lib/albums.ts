export type AlbumPhoto = {
  filename: string  // e.g. 'PSG-01.jpg' — just the filename, not full path
  caption?: string
}

export type Album = {
  slug: string
  title: string
  tag: string       // eyebrow label (matches Photographs card tag)
  date: string
  location: string
  coverImage: string // full path from /public
  photos: AlbumPhoto[]
}

export const albums: Album[] = [
  {
    slug: 'fifa-intercontinental-cup',
    title: 'FIFA Intercontinental Cup',
    tag: 'FIFA Intercontinental Cup',
    date: 'December 2024',
    location: 'Qatar',
    coverImage: '/PSG-88.jpg',
    photos: [
      // Add your photo filenames here once uploaded to:
      // public/images/albums/fifa-intercontinental-cup/
      // Example:
      // { filename: 'PSG-01.jpg', caption: 'PSG celebrate on the pitch' },
      // { filename: 'PSG-02.jpg' },
      { filename: 'PSG-88.jpg', caption: 'Paris Saint-Germain — Intercontinental Champions' },
    ],
  },
  {
    slug: 'african-athletics-championship',
    title: 'African Athletics Championship',
    tag: 'African Athletics Championship',
    date: '2024',
    location: 'Accra, Ghana',
    coverImage: '/IMG_0949A90B.jpg',
    photos: [
      // Add your photo filenames here once uploaded to:
      // public/images/albums/african-athletics-championship/
      { filename: 'IMG_0949A90B.jpg', caption: 'African Athletics Championship — Accra 2024' },
    ],
  },
  {
    slug: 'fifa-arab-cup',
    title: 'FIFA Arab Cup',
    tag: 'FIFA Arab Cup',
    date: '2024',
    location: 'UAE',
    coverImage: '/UAEMOROC-13.jpg',
    photos: [
      // Add your photo filenames here once uploaded to:
      // public/images/albums/fifa-arab-cup/
      { filename: 'UAEMOROC-13.jpg', caption: 'From Casablanca to Arab Kings' },
    ],
  },
]

/** Returns the full image path for a given album photo */
export function photoPath(album: Album, photo: AlbumPhoto): string {
  // If the filename has no directory prefix it lives in the album subfolder.
  // If it starts with '/' it's already a root-relative path (covers shoot-level assets).
  if (photo.filename.startsWith('/')) return photo.filename
  return `/images/albums/${album.slug}/${photo.filename}`
}

export function getAlbum(slug: string): Album | undefined {
  return albums.find((a) => a.slug === slug)
}
