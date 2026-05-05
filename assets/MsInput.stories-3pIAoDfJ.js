import{d as g,o as a,c as r,t as d,a as c,e as b,n as h}from"./iframe-BU7qCgb1.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const A={class:"ms-field"},I={key:0,class:"ms-field__label"},E=["type","placeholder","value","disabled"],V={key:1,class:"ms-field__error"},N={key:2,class:"ms-field__hint"},i=g({__name:"MsInput",props:{modelValue:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},type:{default:"text"}},emits:["update:modelValue"],setup(e,{emit:u}){const p=u;return(v,m)=>(a(),r("div",A,[e.label?(a(),r("label",I,d(e.label),1)):c("",!0),b("input",{class:h(["ms-input",{"ms-input--error":e.error}]),type:e.type,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:m[0]||(m[0]=f=>p("update:modelValue",f.target.value))},null,42,E),e.error?(a(),r("span",V,d(e.error),1)):e.hint?(a(),r("span",N,d(e.hint),1)):c("",!0)]))}}),x=y(i,[["__scopeId","data-v-9db840df"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"MsInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsInput/MsInput.vue"]});const X={title:"Components/MsInput",component:x,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number"]}}},s={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"}},t={args:{label:"Zone de vol",placeholder:"48.8566° N, 2.3522° E",hint:"Format: latitude° N/S, longitude° E/W"}},l={args:{label:"Référence client",modelValue:"REF-INVALID",error:"Format invalide — utilisez REF-AAAA-XXXXX."}},n={args:{label:"Altitude maximale",modelValue:"120 m (limité par SORA)",disabled:!0}},o={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"},parameters:{backgrounds:{default:"dark"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Zone de vol',
    placeholder: '48.8566° N, 2.3522° E',
    hint: 'Format: latitude° N/S, longitude° E/W'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Référence client',
    modelValue: 'REF-INVALID',
    error: 'Format invalide — utilisez REF-AAAA-XXXXX.'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Altitude maximale',
    modelValue: '120 m (limité par SORA)',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}};const D=["Default","WithHint","WithError","Disabled","Dark"];export{o as Dark,s as Default,n as Disabled,l as WithError,t as WithHint,D as __namedExportsOrder,X as default};
