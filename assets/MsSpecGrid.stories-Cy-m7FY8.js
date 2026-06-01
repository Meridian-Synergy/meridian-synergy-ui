import{d as m,c as e,a as r,t as l,b as u,F as p,r as _,o as n}from"./iframe-BfDfbBuI.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const v={class:"ms-spec-grid"},b={class:"ms-spec-grid__container"},k={key:0,class:"ms-spec-grid__label"},h={class:"ms-spec-grid__grid"},f=["innerHTML"],I={class:"ms-spec-grid__key"},M={class:"ms-spec-grid__val"},t=m({__name:"MsSpecGrid",props:{items:{},label:{default:""}},setup(c){return(S,G)=>(n(),e("section",v,[r("div",b,[c.label?(n(),e("p",k,l(c.label),1)):u("",!0),r("div",h,[(n(!0),e(p,null,_(c.items,s=>(n(),e("div",{key:s.label,class:"ms-spec-grid__card"},[(n(),e("svg",{class:"ms-spec-grid__icon",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",innerHTML:s.icon},null,8,f)),r("span",I,l(s.label),1),r("span",M,l(s.value),1)]))),128))])])]))}}),y=g(t,[["__scopeId","data-v-c2ab104d"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"MsSpecGrid",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"MsSpecItem"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsSpecGrid/MsSpecGrid.vue"]});const C='<path d="M12 3a7 7 0 1 0 0 14A7 7 0 0 0 12 3zM8 12h8M12 8v8" stroke="currentColor" stroke-linecap="round"/>',i='<circle cx="12" cy="12" r="9" stroke="currentColor"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>',x='<rect x="2" y="7" width="15" height="11" rx="2" stroke="currentColor"/><path d="M17 11l5-3v8l-5-3v-2z" stroke="currentColor" stroke-linejoin="round"/>',d='<path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5.5 5.5 0 0 1 7 0" stroke="currentColor" stroke-linecap="round"/><circle cx="12" cy="19" r="1" fill="currentColor"/>',B={title:"Components/MsSpecGrid",component:y,tags:["autodocs"]},a={args:{label:"Caractéristiques techniques",items:[{label:"Poids",value:"47,5 kg",icon:C},{label:"Temps de vol",value:"17 min",icon:i},{label:"Caméra",value:"4K RGB + IR",icon:x},{label:"Portée",value:"2 km",icon:d}]}},o={args:{items:[{label:"Temps de vol",value:"45 min",icon:i},{label:"Portée",value:"10 km",icon:d}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Caractéristiques techniques',
    items: [{
      label: 'Poids',
      value: '47,5 kg',
      icon: weightIcon
    }, {
      label: 'Temps de vol',
      value: '17 min',
      icon: timeIcon
    }, {
      label: 'Caméra',
      value: '4K RGB + IR',
      icon: cameraIcon
    }, {
      label: 'Portée',
      value: '2 km',
      icon: rangeIcon
    }]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Temps de vol',
      value: '45 min',
      icon: timeIcon
    }, {
      label: 'Portée',
      value: '10 km',
      icon: rangeIcon
    }]
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","TwoItems"];export{a as Default,o as TwoItems,P as __namedExportsOrder,B as default};
