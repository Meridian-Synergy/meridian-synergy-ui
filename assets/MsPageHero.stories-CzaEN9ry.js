import{d,c as i,a as c,i as l,b as o,n as u,t as m,o as a}from"./iframe-CwqhURRg.js";import{M as g}from"./MsBadge-KBtRfbH1.js";import{M as p}from"./MsBreadcrumb-pvHtuUz0.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const f={class:"ms-page-hero"},y={class:"ms-page-hero__container"},h={key:2,class:"ms-page-hero__desc"},t=d({__name:"MsPageHero",props:{title:{},desc:{},badge:{},badgeVariant:{default:"sky"},crumbs:{},size:{default:"lg"}},setup(e){return(S,_)=>(a(),i("section",f,[c("div",y,[e.crumbs?.length?(a(),l(p,{key:0,crumbs:e.crumbs},null,8,["crumbs"])):o("",!0),e.badge?(a(),l(g,{key:1,label:e.badge,variant:e.badgeVariant},null,8,["label","variant"])):o("",!0),c("h1",{class:u(["ms-page-hero__title",`ms-page-hero__title--${e.size}`])},m(e.title),3),e.desc?(a(),i("p",h,m(e.desc),1)):o("",!0)])]))}}),v=b(t,[["__scopeId","data-v-86047104"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"MsPageHero",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"desc",required:!1,type:{name:"string"}},{name:"badge",required:!1,type:{name:"string"}},{name:"badgeVariant",required:!1,type:{name:"union",elements:[{name:'"sky"'},{name:'"navy"'},{name:'"orange"'}]},defaultValue:{func:!1,value:"'sky'"}},{name:"crumbs",required:!1,type:{name:"Array",elements:[{name:"BreadcrumbItem"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"lg"'},{name:'"md"'}]},defaultValue:{func:!1,value:"'lg'"}}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsPageHero/MsPageHero.vue"]});const N={title:"Components/MsPageHero",component:v,tags:["autodocs"],argTypes:{badgeVariant:{control:"select",options:["sky","navy","orange"]},size:{control:"select",options:["lg","md"]}}},s={args:{title:"Audit thermique par drone",desc:"Détection des ponts thermiques, anomalies sur panneaux solaires et points chauds sur pylônes grâce à la caméra infrarouge embarquée.",badge:"Service",crumbs:[{label:"Accueil",href:"/"},{label:"Services",href:"/services"},{label:"Audit thermique"}]}},r={args:{title:"Nos services drone professionnels",desc:"Six domaines d'expertise pour répondre aux besoins des professionnels en Bourgogne et Nièvre.",badge:"Services",size:"lg",crumbs:[{label:"Accueil",href:"/"},{label:"Services"}]}},n={args:{title:"À propos de Meridian Synergy",badge:"À propos",badgeVariant:"navy"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Audit thermique par drone',
    desc: 'Détection des ponts thermiques, anomalies sur panneaux solaires et points chauds sur pylônes grâce à la caméra infrarouge embarquée.',
    badge: 'Service',
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Audit thermique'
    }]
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Nos services drone professionnels',
    desc: "Six domaines d'expertise pour répondre aux besoins des professionnels en Bourgogne et Nièvre.",
    badge: 'Services',
    size: 'lg',
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Services'
    }]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'À propos de Meridian Synergy',
    badge: 'À propos',
    badgeVariant: 'navy'
  }
}`,...n.parameters?.docs?.source}}};const V=["Default","Large","NoBreadcrumb"];export{s as Default,r as Large,n as NoBreadcrumb,V as __namedExportsOrder,N as default};
