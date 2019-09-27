export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d8db5e52290d7b5f401cf17',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pi2aizds',
                  apiId: 'acb30366-facf-4c77-b4a7-d83dc21f6b64'
                },
                {
                  buildHookId: '5d8db5e6ce833fcfbc71574a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qpyrmz6q',
                  apiId: 'e4bfc6de-6068-43a5-96d3-028f5866df1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danrye/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qpyrmz6q.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
