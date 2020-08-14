module.exports = {
    title: 'Agonos Platform Documentation',
    description: 'Just playing around',
    themeConfig: {
        displayAllHeaders: true,
        sidebar: [
          ['/', 'Home'],
          {
            title: "Administration",
            path: '/administration/',
            children: [
                '/administration/user-management',
                '/administration/group-management',
                '/administration/role-management'
            ] 
          },
          {
              title: "Development",
              path: "/development/",
              children: [
                  '/development/hooks'
              ]
        }
      ]
    },
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-51324709-19'
        }
      ]
    ]
  }