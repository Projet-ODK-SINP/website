// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Formulaires XLSForm pour la biodiversité',
  tagline: 'Donnez à vos protocoles de suivis un outil de collecte de données',
  url: 'https://biodiversityforms.org',
  baseUrl: '/',
  // Dirty build, ignore broken links for the moment
  // Check here : https://docusaurus.io/fr/docs/api/docusaurus-config
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Projet-ODK-SINP', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Assets folder
          exclude: ['**/ODK-CEN/fichiers/**'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'biodiversityforms.org',
        logo: {
          alt: 'XLSForm for biodiversity',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'accueil',
            position: 'left',
            label: 'Accueil'
          },
          {
            label: 'Les formulaires',
            to: 'docs/category/les-formulaires'
          },
          {
			label: 'Le dépot GitHub',
			href: 'https://github.com/Projet-ODK-SINP/website', 
			position: 'right'
		  },
          {
			label: 'Tags',
			to: 'docs/tags', 
			position: 'left'
		  }/*,
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },*/
          {
            title: 'Le standard XLSForm',
            items: [
              {
                label: 'qu\'est-ce-que c\'est ?',
                href: 'https://xlsform.org/en/',
              }
            ],
          },
          {
            title: 'La communauté ODK',
            items: [
              {
                label: 'Website d\'ODK',
                href: 'https://www.getodk.org/',
              },
              {
                label: 'Forum d\'ODK',
                href: 'https://forum.getodk.org/',
              },
              {
                label: 'Page GitHub d\'ODK',
                href: 'https://github.com/getodk',
              }
            ],
          },
          {
            title: 'Les sructures participantes',
            items: [
              {
                label: 'CEN Occitanie',
                href: 'https://si.cen-occitanie.org',
              },
              {
                label: 'CEN Nouvelle-Aquitaine',
                href: 'https://cen-nouvelle-aquitaine.org',
              },
              {
                label: 'la Fédération des CEN',
                href: 'https://reseau-cen.org',
              },
            ],
          },
        ],
        copyright: `Réseau des Conservatoires d'espaces naturels - ${new Date().getFullYear()}`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
