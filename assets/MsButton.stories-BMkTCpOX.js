import{d,c as u,t as p,n as b,o as y}from"./iframe-WTlPPmjn.js";import"./preload-helper-PPVm8Dsz.js";const g=["disabled"],i=d({__name:"MsButton",props:{label:{},variant:{default:"primary"},size:{default:"md"},disabled:{type:Boolean}},emits:["click"],setup(e,{emit:l}){const a=l;return(m,r)=>(y(),u("button",{class:b(["ms-btn",`ms-btn--${e.variant}`,`ms-btn--${e.size}`]),disabled:e.disabled,onClick:r[0]||(r[0]=c=>a("click",c))},p(e.label),11,g))}}),v=(e,l)=>{const a=e.__vccOpts||e;for(const[m,r]of l)a[m]=r;return a},f=v(i,[["__scopeId","data-v-ed15b338"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"MsButton",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"cta"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsButton/MsButton.vue"]});const k={title:"Components/MsButton",component:f,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","cta"]},size:{control:"select",options:["sm","md","lg"]}}},s={args:{label:"Démarrer",variant:"primary"}},n={args:{label:"En savoir plus",variant:"secondary"}},t={args:{label:"Créer un compte",variant:"cta"}},o={args:{label:"Indisponible",disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'En savoir plus',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indisponible',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const C=["Primary","Secondary","CTA","Disabled"];export{t as CTA,o as Disabled,s as Primary,n as Secondary,C as __namedExportsOrder,k as default};
