import{g as n,j as s,t as a,G as t,l as p,f as e}from"./common-bec3f312.js";const o='{"title":"前端笔记 | Vue3","frontmatter":{"date":"2022-01-28","title":"前端笔记 | Vue3","tags":["前端笔记","Vue3"],"describe":"Vue3 学习笔记"},"headers":[{"level":2,"title":"Vue3 快速上手","slug":"vue3-快速上手"},{"level":3,"title":"1.Vue3 简介","slug":"_1-vue3-简介"},{"level":3,"title":"2.Vue3 带来了什么","slug":"_2-vue3-带来了什么"},{"level":2,"title":"一、创建 Vue3.0 工程","slug":"一、创建-vue3-0-工程"},{"level":3,"title":"1.使用 vue-cli 创建","slug":"_1-使用-vue-cli-创建"},{"level":3,"title":"2.使用 vite 创建","slug":"_2-使用-vite-创建"},{"level":2,"title":"二、常用 Composition API","slug":"二、常用-composition-api"},{"level":3,"title":"1.拉开序幕的 setup","slug":"_1-拉开序幕的-setup"},{"level":3,"title":"2.ref 函数","slug":"_2-ref-函数"},{"level":3,"title":"3.reactive 函数","slug":"_3-reactive-函数"},{"level":3,"title":"4.Vue3.0 中的响应式原理","slug":"_4-vue3-0-中的响应式原理"},{"level":3,"title":"5.reactive 对比 ref","slug":"_5-reactive-对比-ref"},{"level":3,"title":"6.setup 的两个注意点","slug":"_6-setup-的两个注意点"},{"level":3,"title":"7.计算属性与监视","slug":"_7-计算属性与监视"},{"level":3,"title":"8.生命周期","slug":"_8-生命周期"},{"level":3,"title":"9.自定义 hook 函数","slug":"_9-自定义-hook-函数"},{"level":3,"title":"10.toRef","slug":"_10-toref"},{"level":2,"title":"三、其它 Composition API","slug":"三、其它-composition-api"},{"level":3,"title":"1.shallowReactive 与 shallowRef","slug":"_1-shallowreactive-与-shallowref"},{"level":3,"title":"2.readonly 与 shallowReadonly","slug":"_2-readonly-与-shallowreadonly"},{"level":3,"title":"3.toRaw 与 markRaw","slug":"_3-toraw-与-markraw"},{"level":3,"title":"4.customRef","slug":"_4-customref"},{"level":3,"title":"5.provide 与 inject","slug":"_5-provide-与-inject"},{"level":3,"title":"6.响应式数据的判断","slug":"_6-响应式数据的判断"},{"level":2,"title":"四、Composition API 的优势","slug":"四、composition-api-的优势"},{"level":3,"title":"1.Options API 存在的问题","slug":"_1-options-api-存在的问题"},{"level":3,"title":"2.Composition API 的优势","slug":"_2-composition-api-的优势"},{"level":2,"title":"五、新的组件","slug":"五、新的组件"},{"level":3,"title":"1.Fragment","slug":"_1-fragment"},{"level":3,"title":"2.Teleport","slug":"_2-teleport"},{"level":3,"title":"3.Suspense","slug":"_3-suspense"},{"level":2,"title":"六、其他","slug":"六、其他"},{"level":3,"title":"1.全局 API 的转移","slug":"_1-全局-api-的转移"},{"level":3,"title":"2.其他改变","slug":"_2-其他改变"}],"relativePath":"docs/vue3.md","lastUpdated":1645348477860.4568}';var c={};const l=t('',29),u=s("li",null,"作用: 定义一个响应式的数据",-1),i=p("语法: "),r=s("code",null,"const xxx = ref(initValue)",-1),k=s("li",null,[p("创建一个包含响应式数据的"),s("strong",{style:{color:"#DD5145"}},"引用对象（reference 对象，简称 ref 对象）"),p("。")],-1),d=s("li",null,[p("JS 中操作数据： "),s("code",null,"xxx.value")],-1),g=p("模板中读取数据: 不需要.value，直接："),h=t('',1),m=t('',72);c.render=function(t,p,o,c,v,f){return e(),n("div",null,[l,s("ul",null,[u,s("li",null,[i,r,s("ul",null,[k,d,s("li",null,[g,s("code",null,"<div>"+a(t.xxx)+"</div>",1)])])]),h]),m])};export default c;export{o as __pageData};
