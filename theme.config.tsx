import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './core/components/Logo';

const config: DocsThemeConfig = {
  logo: <Logo/>,
  project: {
    link: 'https://github.com/cris-guedes',
  }/*,
  chat: {
    link: 'https://discord.com',
  }*/,
  feedback:{content:'Questoes? Feedbacks →',useLink(...args) {
    return 'https://www.linkedin.com/in/antonio-cristian-a86b0b201/'  
  },},
  editLink:{
    text:''
  },
    search: {
        placeholder: ({ locale }) => {
            // eslint-disable-next-line radar/no-small-switch
            switch (locale) {
                default: {
                    return "Pesquisar";
                }
            }
        },
    },
   
  darkMode:true,
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component:<></>,
  
  },
}

export default config
