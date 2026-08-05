import{M as i}from"./MsButton-DR056rhz.js";import"./iframe-Cj12fcwB.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/MsButton",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","cta","critical"]},size:{control:"select",options:["sm","md","lg"]},as:{control:"select",options:["button","a"]}}},r={args:{label:"Démarrer",variant:"primary"}},a={args:{label:"En savoir plus",variant:"secondary"}},e={args:{label:"Créer un compte",variant:"cta"}},s={args:{label:"Supprimer",variant:"critical"}},t={args:{label:"Indisponible",disabled:!0}},n={args:{label:"Nous contacter",variant:"primary",as:"a"},render:p=>({components:{MsButton:i},setup:()=>({args:p}),template:'<MsButton v-bind="args" href="#" />'})},o={args:{label:"Démarrer",variant:"primary"},parameters:{backgrounds:{default:"dark"}}},c={args:{label:"Créer un compte",variant:"cta"},parameters:{backgrounds:{default:"dark"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'En savoir plus',
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Supprimer',
    variant: 'critical'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indisponible',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nous contacter',
    variant: 'primary',
    as: 'a'
  },
  render: args => ({
    components: {
      MsButton
    },
    setup: () => ({
      args
    }),
    template: '<MsButton v-bind="args" href="#" />'
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}};const b=["Primary","Secondary","CTA","Critical","Disabled","AsLink","Dark","CTADark"];export{n as AsLink,e as CTA,c as CTADark,s as Critical,o as Dark,t as Disabled,r as Primary,a as Secondary,b as __namedExportsOrder,g as default};
