import{d as u,c as m,a as g,r as v,n as f,o as p,b,t as y}from"./iframe-BU7qCgb1.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const A={key:0,class:"ms-badge__dot"},i=u({__name:"MsBadge",props:{label:{},variant:{default:"active"},dot:{type:Boolean,default:!0}},setup(l){return(d,_)=>(p(),m("span",{class:f(["ms-badge",`ms-badge--${l.variant}`])},[l.dot&&d.isStatusVariant?(p(),m("span",A)):g("",!0),v(d.$slots,"default",{},()=>[b(y(l.label),1)],!0)],2))}}),S=k(i,[["__scopeId","data-v-479551ae"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"MsBadge",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"active"'},{name:'"inactive"'},{name:'"pending"'},{name:'"alert"'},{name:'"warning"'},{name:'"navy"'},{name:'"sky"'},{name:'"orange"'}]},defaultValue:{func:!1,value:"'active'"}},{name:"dot",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsBadge/MsBadge.vue"]});const M={title:"Components/MsBadge",component:S,tags:["autodocs"],argTypes:{variant:{control:"select",options:["active","inactive","pending","alert","warning","navy","sky","orange"]}}},a={args:{label:"Actif",variant:"active"}},e={args:{label:"Inactif",variant:"inactive"}},r={args:{label:"En cours",variant:"pending"}},n={args:{label:"Alerte",variant:"alert"}},s={args:{label:"Attention",variant:"warning"}},t={args:{label:"SORA",variant:"navy",dot:!1}},o={args:{label:"PDRA G-1",variant:"sky",dot:!1}},c={args:{label:"Actif",variant:"active"},parameters:{backgrounds:{default:"dark"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actif',
    variant: 'active'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Inactif',
    variant: 'inactive'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'En cours',
    variant: 'pending'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Alerte',
    variant: 'alert'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Attention',
    variant: 'warning'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'SORA',
    variant: 'navy',
    dot: false
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'PDRA G-1',
    variant: 'sky',
    dot: false
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actif',
    variant: 'active'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}};const w=["Active","Inactive","Pending","Alert","Warning","Navy","Sky","Dark"];export{a as Active,n as Alert,c as Dark,e as Inactive,t as Navy,r as Pending,o as Sky,s as Warning,w as __namedExportsOrder,M as default};
