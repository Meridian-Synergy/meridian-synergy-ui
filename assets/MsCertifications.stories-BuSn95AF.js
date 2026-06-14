import{d as N,c as l,t as u,a as d,b as s,F as m,r as y,e as D,o as i,n as v,w as j,v as K}from"./iframe-CItAQ9Uo.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const U={class:"ms-certs"},W={key:0,class:"ms-certs__title"},H={class:"ms-certs__grid"},z={class:"ms-certs__item"},G=["checked","onChange"],P={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},J={class:"ms-certs__label"},Q={key:0,class:"ms-certs__meta"},X={class:"ms-certs__meta-label"},Z=["value","onChange"],ee=["value"],te={class:"ms-certs__meta-label"},ae=["value","onChange"],ne={class:"ms-certs__expiry"},se={key:0,class:"ms-certs__title"},le={class:"ms-certs__grid"},ie={class:"ms-certs__item"},oe=["checked","onChange"],re={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},ue={class:"ms-certs__label"},de={key:0,class:"ms-certs__meta"},ce={class:"ms-certs__meta-label"},me=["value","onChange"],fe=["value"],he={class:"ms-certs__meta-label"},be=["value","onChange"],_e={class:"ms-certs__expiry"},ye={key:2,class:"ms-certs__hint"},C=N({__name:"MsCertifications",props:{modelValue:{},labels:{},title:{default:void 0},hint:{default:void 0},additionalTitle:{default:void 0},additionalLabels:{default:void 0},withDates:{type:Boolean,default:!1},validityYears:{default:5},dateLabels:{default:void 0},withCountry:{type:Boolean,default:!1},countryOptions:{default:()=>[]},countryLabel:{default:void 0},defaultCountry:{default:null}},emits:["update:modelValue"],setup(a,{emit:M}){const T=["a1_a3","a2_cofc","cats","sts_01","sts_02"],A=["certibiocide","certiphyto"],o=a,B=M,V=D(()=>o.withDates||o.withCountry);function c(t){return typeof t=="boolean"?t:!!t?.held}function f(t){return typeof t=="object"&&t?t.obtained??null:null}function h(t){return typeof t=="object"&&t?t.country??null:null}function L(t,n,e,r){const I=V.value?{held:n,obtained:e,country:r}:n;B("update:modelValue",{...o.modelValue,[t]:I})}function x(t){const n=!c(o.modelValue[t]),e=n?h(o.modelValue[t])??o.defaultCountry??null:h(o.modelValue[t]);L(t,n,f(o.modelValue[t]),e)}function S(t,n){L(t,c(o.modelValue[t]),n.target.value||null,h(o.modelValue[t]))}function O(t,n){L(t,c(o.modelValue[t]),f(o.modelValue[t]),n.target.value||null)}function _(t){const n=f(o.modelValue[t]);if(!n)return null;const e=new Date(n);return e.setFullYear(e.getFullYear()+o.validityYears),e}function R(t){return t.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit",year:"numeric"})}function w(t){const n=_(t);if(!n)return"unset";const e=Math.floor((n.getTime()-Date.now())/864e5);return e<0?"expired":e<=60?"soon":"valid"}function E(t){const n=_(t);return n&&o.dateLabels?o.dateLabels.expiresOn.replace("{date}",R(n)):""}function q(t){const n=w(t);return o.dateLabels&&n!=="unset"?o.dateLabels[n]:""}const Y=D(()=>!!o.additionalLabels&&Object.keys(o.additionalLabels).length>0),k=D(()=>[...T]);return(t,n)=>(i(),l("div",U,[a.title?(i(),l("p",W,u(a.title),1)):d("",!0),s("div",H,[(i(!0),l(m,null,y(k.value,e=>(i(),l("div",{key:e,class:"ms-certs__row"},[s("label",z,[s("input",{type:"checkbox",checked:c(a.modelValue[e]),class:"ms-certs__native",onChange:r=>x(e)},null,40,G),s("span",{class:v(["ms-certs__check",{"ms-certs__check--on":c(a.modelValue[e])}])},[c(a.modelValue[e])?(i(),l("svg",P,[...n[0]||(n[0]=[s("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),s("span",J,u(a.labels[e]),1)]),V.value&&c(a.modelValue[e])?(i(),l("div",Q,[a.withCountry?(i(),l(m,{key:0},[s("label",X,u(a.countryLabel),1),s("select",{class:"ms-certs__select",value:h(a.modelValue[e])??a.defaultCountry??"",onChange:r=>O(e,r)},[n[1]||(n[1]=s("option",{value:""},"—",-1)),(i(!0),l(m,null,y(a.countryOptions,r=>(i(),l("option",{key:r.value,value:r.value},u(r.label),9,ee))),128))],40,Z)],64)):d("",!0),a.withDates&&a.dateLabels?(i(),l(m,{key:1},[s("label",te,u(a.dateLabels.obtained),1),s("input",{type:"date",class:"ms-certs__date-input",value:f(a.modelValue[e])??"",onChange:r=>S(e,r)},null,40,ae),_(e)?(i(),l(m,{key:0},[s("span",ne,u(E(e)),1),s("span",{class:v(["ms-certs__status",`ms-certs__status--${w(e)}`])},u(q(e)),3)],64)):d("",!0)],64)):d("",!0)])):d("",!0)]))),128))]),Y.value?(i(),l(m,{key:1},[n[4]||(n[4]=s("div",{class:"ms-certs__divider"},null,-1)),a.additionalTitle?(i(),l("p",se,u(a.additionalTitle),1)):d("",!0),s("div",le,[(i(),l(m,null,y(A,e=>j(s("div",{key:e,class:"ms-certs__row"},[s("label",ie,[s("input",{type:"checkbox",checked:c(a.modelValue[e]),class:"ms-certs__native",onChange:r=>x(e)},null,40,oe),s("span",{class:v(["ms-certs__check",{"ms-certs__check--on":c(a.modelValue[e])}])},[c(a.modelValue[e])?(i(),l("svg",re,[...n[2]||(n[2]=[s("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),s("span",ue,u(a.additionalLabels[e]),1)]),V.value&&c(a.modelValue[e])?(i(),l("div",de,[a.withCountry?(i(),l(m,{key:0},[s("label",ce,u(a.countryLabel),1),s("select",{class:"ms-certs__select",value:h(a.modelValue[e])??a.defaultCountry??"",onChange:r=>O(e,r)},[n[3]||(n[3]=s("option",{value:""},"—",-1)),(i(!0),l(m,null,y(a.countryOptions,r=>(i(),l("option",{key:r.value,value:r.value},u(r.label),9,fe))),128))],40,me)],64)):d("",!0),a.withDates&&a.dateLabels?(i(),l(m,{key:1},[s("label",he,u(a.dateLabels.obtained),1),s("input",{type:"date",class:"ms-certs__date-input",value:f(a.modelValue[e])??"",onChange:r=>S(e,r)},null,40,be),_(e)?(i(),l(m,{key:0},[s("span",_e,u(E(e)),1),s("span",{class:v(["ms-certs__status",`ms-certs__status--${w(e)}`])},u(q(e)),3)],64)):d("",!0)],64)):d("",!0)])):d("",!0)]),[[K,a.additionalLabels[e]!==void 0]])),64))])],64)):d("",!0),a.hint?(i(),l("p",ye,u(a.hint),1)):d("",!0)]))}}),ve=$(C,[["__scopeId","data-v-cbe34250"]]);C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:"default",displayName:"MsCertifications",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"MsCertificationsValue"}},{name:"labels",required:!0,type:{name:"Record",elements:[{name:"DgacKey"},{name:"string"}]}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalLabels",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"AdditionalKey"},{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"withDates",description:"Show obtention date + computed expiry/status under each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validityYears",description:"Validity period in years (EU drone competency certs = 5).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"dateLabels",description:"Translated strings for the date UI (required when withDates is true).",required:!1,type:{name:"MsCertificationsDateLabels"},defaultValue:{func:!1,value:"undefined"}},{name:"withCountry",description:"Show an issuing-country selector for each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"countryOptions",description:"Country choices for the selector.",required:!1,type:{name:"Array",elements:[{name:"MsCertCountryOption"}]},defaultValue:{func:!1,value:"() => []"}},{name:"countryLabel",description:"Field label for the country selector.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"defaultCountry",description:"Country pre-selected when a cert is first marked as held.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["MsCertificationsValue"]}}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsCertifications/MsCertifications.vue"]});const F={a1_a3:"A1/A3 — Open subcategory",a2_cofc:"A2 CofC — Certificate of competency",cats:"CATS — Certified category",sts_01:"STS-01 — Standard scenario VLOS",sts_02:"STS-02 — Standard scenario BVLOS"},ge={certibiocide:"Certibiocide",certiphyto:"Certiphyto"},pe={obtained:"Obtained on",expiresOn:"Expires on {date}",valid:"Valid",soon:"Expires soon",expired:"Expired"},De={title:"Components/MsCertifications",component:ve,tags:["autodocs"]},g={args:{title:"Certifications",labels:F,additionalTitle:"Additional certifications",additionalLabels:ge,modelValue:{a1_a3:!0,a2_cofc:!1,certiphyto:!0}}},Ce=[{value:"FR",label:"France"},{value:"BE",label:"Belgique"},{value:"LU",label:"Luxembourg"},{value:"DE",label:"Allemagne"}],b={args:{title:"Certifications",labels:F,withDates:!0,validityYears:5,dateLabels:pe,withCountry:!0,countryOptions:Ce,countryLabel:"Issued in",defaultCountry:"FR",modelValue:{a1_a3:{held:!0,obtained:"2022-03-15",country:"FR"},a2_cofc:{held:!0,obtained:"2021-01-10",country:"BE"},cats:{held:!0,obtained:null,country:"FR"},sts_01:!1}}},p={args:{...b.args},parameters:{backgrounds:{default:"dark"}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Certifications',
    labels,
    additionalTitle: 'Additional certifications',
    additionalLabels,
    modelValue: {
      a1_a3: true,
      a2_cofc: false,
      certiphyto: true
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Certifications',
    labels,
    withDates: true,
    validityYears: 5,
    dateLabels,
    withCountry: true,
    countryOptions,
    countryLabel: 'Issued in',
    defaultCountry: 'FR',
    modelValue: {
      a1_a3: {
        held: true,
        obtained: '2022-03-15',
        country: 'FR'
      },
      a2_cofc: {
        held: true,
        obtained: '2021-01-10',
        country: 'BE'
      },
      // expired
      cats: {
        held: true,
        obtained: null,
        country: 'FR'
      },
      // held, no date yet
      sts_01: false
    }
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDates.args
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...p.parameters?.docs?.source}}};const xe=["Default","WithDates","Dark"];export{p as Dark,g as Default,b as WithDates,xe as __namedExportsOrder,De as default};
