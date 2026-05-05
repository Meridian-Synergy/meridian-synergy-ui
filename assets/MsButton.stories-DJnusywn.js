import{d as b,c as g,r as f,n as y,o as v,b as k,t as C}from"./iframe-BU7qCgb1.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const D=["disabled"],c=b({__name:"MsButton",props:{label:{},variant:{default:"primary"},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["click"],setup(a,{emit:m}){const d=m;return(u,i)=>(v(),g("button",{class:y(["ms-btn",`ms-btn--${a.variant}`,`ms-btn--${a.size}`]),disabled:a.disabled,onClick:i[0]||(i[0]=p=>d("click",p))},[f(u.$slots,"default",{},()=>[k(C(a.label),1)],!0)],10,D))}}),_=S(c,[["__scopeId","data-v-66eebaf0"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"MsButton",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"cta"'},{name:'"critical"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsButton/MsButton.vue"]});const x={title:"Components/MsButton",component:_,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","cta","critical"]},size:{control:"select",options:["sm","md","lg"]}}},e={args:{label:"Démarrer",variant:"primary"}},r={args:{label:"En savoir plus",variant:"secondary"}},s={args:{label:"Créer un compte",variant:"cta"}},n={args:{label:"Supprimer",variant:"critical"}},t={args:{label:"Indisponible",disabled:!0}},o={args:{label:"Démarrer",variant:"primary"},parameters:{backgrounds:{default:"dark"}}},l={args:{label:"Créer un compte",variant:"cta"},parameters:{backgrounds:{default:"dark"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'En savoir plus',
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Supprimer',
    variant: 'critical'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indisponible',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}};const z=["Primary","Secondary","CTA","Critical","Disabled","Dark","CTADark"];export{s as CTA,l as CTADark,n as Critical,o as Dark,t as Disabled,e as Primary,r as Secondary,z as __namedExportsOrder,x as default};
