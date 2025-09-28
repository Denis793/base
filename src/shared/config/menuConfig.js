export const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Features', href: '#features' },
  {
    label: 'Pages',
    children: [
      { label: 'Blog Grid', to: '/blog-grid' },
      { label: 'Blog Single', to: '/blog-single' },
      { label: 'Sign In', to: '/signin' },
      { label: 'Sign Up', to: '/signup' },
      { label: '404', to: '/404' },
    ],
  },
  { label: 'Support', href: '#support' },
];
