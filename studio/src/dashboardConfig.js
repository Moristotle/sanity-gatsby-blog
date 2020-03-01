export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5c1a8867d7da5928427876',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-md1fg5n4',
                  apiId: '50297144-044f-420c-a1a8-f0f22bea0ab6'
                },
                {
                  buildHookId: '5e5c1a8896114b7e3d60844f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vgaiywg7',
                  apiId: '7c8fe37a-28f8-477b-bfc9-46bc767716c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Moristotle/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vgaiywg7.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
