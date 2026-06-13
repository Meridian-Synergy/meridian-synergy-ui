import{d as E,c as i,t as r,a as d,b as n,F as m,r as w,e as Y,o as l,n as b,w as B,v as N}from"./iframe-DcuBB96H.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const F={class:"ms-certs"},I={key:0,class:"ms-certs__title"},K={class:"ms-certs__grid"},$={class:"ms-certs__item"},W=["checked","onChange"],R={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},U={class:"ms-certs__label"},z={key:0,class:"ms-certs__dates"},G={class:"ms-certs__date-label"},H=["value","onChange"],P={class:"ms-certs__expiry"},J={key:0,class:"ms-certs__title"},Q={class:"ms-certs__grid"},X={class:"ms-certs__item"},Z=["checked","onChange"],ee={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},te={class:"ms-certs__label"},ae={key:0,class:"ms-certs__dates"},se={class:"ms-certs__date-label"},ne=["value","onChange"],ie={class:"ms-certs__expiry"},le={key:2,class:"ms-certs__hint"},v=E({__name:"MsCertifications",props:{modelValue:{},labels:{},title:{default:void 0},hint:{default:void 0},additionalTitle:{default:void 0},additionalLabels:{default:void 0},withDates:{type:Boolean,default:!1},validityYears:{default:5},dateLabels:{default:void 0}},emits:["update:modelValue"],setup(t,{emit:T}){const M=["a1_a3","a2_cofc","cats","sts_01","sts_02"],k=["certibiocide","certiphyto"],o=t,A=T;function c(a){return typeof a=="boolean"?a:!!a?.held}function h(a){return typeof a=="object"&&a?a.obtained??null:null}function y(a,s,e){const u=o.withDates?{held:s,obtained:e}:s;A("update:modelValue",{...o.modelValue,[a]:u})}function C(a){y(a,!c(o.modelValue[a]),h(o.modelValue[a]))}function D(a,s){y(a,!0,s.target.value||null)}function _(a){const s=h(o.modelValue[a]);if(!s)return null;const e=new Date(s);return e.setFullYear(e.getFullYear()+o.validityYears),e}function O(a){return a.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit",year:"numeric"})}function V(a){const s=_(a);if(!s)return"unset";const e=Math.floor((s.getTime()-Date.now())/864e5);return e<0?"expired":e<=60?"soon":"valid"}function x(a){const s=_(a);return s&&o.dateLabels?o.dateLabels.expiresOn.replace("{date}",O(s)):""}function L(a){const s=V(a);return o.dateLabels&&s!=="unset"?o.dateLabels[s]:""}const q=Y(()=>!!o.additionalLabels&&Object.keys(o.additionalLabels).length>0);return(a,s)=>(l(),i("div",F,[t.title?(l(),i("p",I,r(t.title),1)):d("",!0),n("div",K,[(l(),i(m,null,w(M,e=>n("div",{key:e,class:"ms-certs__row"},[n("label",$,[n("input",{type:"checkbox",checked:c(t.modelValue[e]),class:"ms-certs__native",onChange:u=>C(e)},null,40,W),n("span",{class:b(["ms-certs__check",{"ms-certs__check--on":c(t.modelValue[e])}])},[c(t.modelValue[e])?(l(),i("svg",R,[...s[0]||(s[0]=[n("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),n("span",U,r(t.labels[e]),1)]),t.withDates&&t.dateLabels&&c(t.modelValue[e])?(l(),i("div",z,[n("label",G,r(t.dateLabels.obtained),1),n("input",{type:"date",class:"ms-certs__date-input",value:h(t.modelValue[e])??"",onChange:u=>D(e,u)},null,40,H),_(e)?(l(),i(m,{key:0},[n("span",P,r(x(e)),1),n("span",{class:b(["ms-certs__status",`ms-certs__status--${V(e)}`])},r(L(e)),3)],64)):d("",!0)])):d("",!0)])),64))]),q.value?(l(),i(m,{key:1},[s[2]||(s[2]=n("div",{class:"ms-certs__divider"},null,-1)),t.additionalTitle?(l(),i("p",J,r(t.additionalTitle),1)):d("",!0),n("div",Q,[(l(),i(m,null,w(k,e=>B(n("div",{key:e,class:"ms-certs__row"},[n("label",X,[n("input",{type:"checkbox",checked:c(t.modelValue[e]),class:"ms-certs__native",onChange:u=>C(e)},null,40,Z),n("span",{class:b(["ms-certs__check",{"ms-certs__check--on":c(t.modelValue[e])}])},[c(t.modelValue[e])?(l(),i("svg",ee,[...s[1]||(s[1]=[n("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),n("span",te,r(t.additionalLabels[e]),1)]),t.withDates&&t.dateLabels&&c(t.modelValue[e])?(l(),i("div",ae,[n("label",se,r(t.dateLabels.obtained),1),n("input",{type:"date",class:"ms-certs__date-input",value:h(t.modelValue[e])??"",onChange:u=>D(e,u)},null,40,ne),_(e)?(l(),i(m,{key:0},[n("span",ie,r(x(e)),1),n("span",{class:b(["ms-certs__status",`ms-certs__status--${V(e)}`])},r(L(e)),3)],64)):d("",!0)])):d("",!0)]),[[N,t.additionalLabels[e]!==void 0]])),64))])],64)):d("",!0),t.hint?(l(),i("p",le,r(t.hint),1)):d("",!0)]))}}),oe=j(v,[["__scopeId","data-v-a86fdfcb"]]);v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"MsCertifications",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"MsCertificationsValue"}},{name:"labels",required:!0,type:{name:"Record",elements:[{name:"DgacKey"},{name:"string"}]}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalLabels",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"AdditionalKey"},{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"withDates",description:"Show obtention date + computed expiry/status under each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validityYears",description:"Validity period in years (EU drone competency certs = 5).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"dateLabels",description:"Translated strings for the date UI (required when withDates is true).",required:!1,type:{name:"MsCertificationsDateLabels"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue",type:{names:["MsCertificationsValue"]}}],sourceFiles:["/home/runner/work/meridian-synergy-ui/meridian-synergy-ui/src/components/MsCertifications/MsCertifications.vue"]});const S={a1_a3:"A1/A3 — Open subcategory",a2_cofc:"A2 CofC — Certificate of competency",cats:"CATS — Certified category",sts_01:"STS-01 — Standard scenario VLOS",sts_02:"STS-02 — Standard scenario BVLOS"},re={certibiocide:"Certibiocide",certiphyto:"Certiphyto"},de={obtained:"Obtained on",expiresOn:"Expires on {date}",valid:"Valid",soon:"Expires soon",expired:"Expired"},fe={title:"Components/MsCertifications",component:oe,tags:["autodocs"]},p={args:{title:"Certifications",labels:S,additionalTitle:"Additional certifications",additionalLabels:re,modelValue:{a1_a3:!0,a2_cofc:!1,certiphyto:!0}}},f={args:{title:"Certifications",labels:S,withDates:!0,validityYears:5,dateLabels:de,modelValue:{a1_a3:{held:!0,obtained:"2022-03-15"},a2_cofc:{held:!0,obtained:"2021-01-10"},cats:{held:!0,obtained:null},sts_01:!1}}},g={args:{...f.args},parameters:{backgrounds:{default:"dark"}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Certifications',
    labels,
    withDates: true,
    validityYears: 5,
    dateLabels,
    modelValue: {
      a1_a3: {
        held: true,
        obtained: '2022-03-15'
      },
      a2_cofc: {
        held: true,
        obtained: '2021-01-10'
      },
      // expired
      cats: {
        held: true,
        obtained: null
      },
      // held, no date yet
      sts_01: false
    }
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDates.args
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...g.parameters?.docs?.source}}};const he=["Default","WithDates","Dark"];export{g as Dark,p as Default,f as WithDates,he as __namedExportsOrder,fe as default};
