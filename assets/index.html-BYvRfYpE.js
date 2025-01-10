import{_ as t,c as p,d as s,b as e,w as a,r,o as c,e as n}from"./app-BqaviiS9.js";const d={};function u(h,l){const i=r("VPCard");return c(),p("div",null,[l[2]||(l[2]=s("h2",{id:"简介",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#简介"},[s("span",null,"简介")])],-1)),e(i,null,{default:a(()=>l[0]||(l[0]=[s("blockquote",null,[s("p",null,[n("使用主题自带的"),s("code",null,"布局插槽"),n("给博客添加"),s("code",null,"打赏"),n("功能 "),s("a",{href:"https://theme-plume.vuejs.press/guide/layout-slots/",target:"_blank",rel:"noopener noreferrer"},"参考文档")])],-1)])),_:1}),l[3]||(l[3]=s("h2",{id:"ai这么好用肯定要利用一下",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ai这么好用肯定要利用一下"},[s("span",null,"AI这么好用肯定要利用一下")])],-1)),e(i,null,{default:a(()=>l[1]||(l[1]=[s("blockquote",null,[s("p",null,[n("直接询问"),s("strong",null,"deepseek")])],-1),s("blockquote",null,[s("p",null,"使用vue3组合式语法帮我写一个打赏按钮，效果是鼠标放置在按钮上时上方显示两个二维码图片，script标签在最上方，style使用scss语法，按钮居中展示")],-1),s("blockquote",null,[s("p",null,[s("strong",null,"deepseek"),n("的回答")])],-1),s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"// 控制二维码显示状态")]),n(`
`),s("span",{class:"line"},[s("span",null,"const showQRCode = ref(false);")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <div class="donation-container">')]),n(`
`),s("span",{class:"line"},[s("span",null,"    <!-- 打赏按钮 -->")]),n(`
`),s("span",{class:"line"},[s("span",null,"    <button")]),n(`
`),s("span",{class:"line"},[s("span",null,'      class="donation-button"')]),n(`
`),s("span",{class:"line"},[s("span",null,'      @mouseenter="showQRCode = true"')]),n(`
`),s("span",{class:"line"},[s("span",null,'      @mouseleave="showQRCode = false"')]),n(`
`),s("span",{class:"line"},[s("span",null,"    >")]),n(`
`),s("span",{class:"line"},[s("span",null,"      打赏")]),n(`
`),s("span",{class:"line"},[s("span",null,"    </button>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    <!-- 二维码区域 -->")]),n(`
`),s("span",{class:"line"},[s("span",null,'    <div v-if="showQRCode" class="qrcode-container">')]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,'      <img src="your qr code image path" alt="QR Code 1" class="qrcode" />')]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,'      <img src="your qr code image path" alt="QR Code 2" class="qrcode" />')]),n(`
`),s("span",{class:"line"},[s("span",null,"    </div>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  </div>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'<style lang="scss" scoped>')]),n(`
`),s("span",{class:"line"},[s("span",null,".donation-container {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  position: relative;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  display: flex;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  justify-content: center;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  align-items: center;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,".donation-button {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  padding: 10px 20px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  font-size: 16px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  color: #fff;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  background-color: #007bff;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  border: none;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  border-radius: 5px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  cursor: pointer;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  transition: background-color 0.3s ease;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  &:hover {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    background-color: #0056b3;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,".qrcode-container {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  position: absolute;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  bottom: 100%; // 将二维码放置在按钮上方")]),n(`
`),s("span",{class:"line"},[s("span",null,"  z-index: 1000; // 确保二维码在最上层")]),n(`
`),s("span",{class:"line"},[s("span",null,"  display: flex;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  gap: 10px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  padding: 10px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  background-color: #fff;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  border: 1px solid #ddd;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  border-radius: 5px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,".qrcode {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  width: 280px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  height: 290px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  border-radius: 5px;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"</style>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"提示"),s("ul",null,[s("li",null,"记得修改21和22行的二维码图片路径，当然你也可以添加多个")])],-1),s("blockquote",null,[s("p",null,[n("在"),s("code",null,"docs/.vuepress/theme/components"),n("目录下新增"),s("code",null,"Donation.vue"),n("文件，把上面的代码复制进去")])],-1),s("blockquote",null,[s("p",null,[n("修改"),s("code",null,"docs/.vuepress/client.ts"),n("文件")])],-1),s("div",{class:"language-ts line-numbers-mode","data-ext":"ts","data-title":"ts"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," h"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vue"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," Layout"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress-theme-plume/client"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," defineClientConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress/client"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," Donation"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./theme/components/Donation.vue"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineClientConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"  layouts"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"    Layout"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"h"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Layout"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"null"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"      '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"doc-footer-before"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": () => "),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"h"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Donation"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),l[4]||(l[4]=s("h2",{id:"感谢观看",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#感谢观看"},[s("span",null,"感谢观看")])],-1))])}const k=t(d,[["render",u],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/article/2884ho8a/","title":"新增打赏功能","lang":"zh-CN","frontmatter":{"title":"新增打赏功能","tags":["其他"],"createTime":"2025/01/10 13:09:34","permalink":"/article/2884ho8a/","description":"简介 AI这么好用肯定要利用一下 感谢观看","head":[["meta",{"property":"og:url","content":"https://blog.shaocz.me/article/2884ho8a/"}],["meta",{"property":"og:site_name","content":"未眠的蓝鸟"}],["meta",{"property":"og:title","content":"新增打赏功能"}],["meta",{"property":"og:description","content":"简介 AI这么好用肯定要利用一下 感谢观看"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-10T05:41:02.000Z"}],["meta",{"property":"article:tag","content":"其他"}],["meta",{"property":"article:modified_time","content":"2025-01-10T05:41:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"新增打赏功能\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-10T05:41:02.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.4,"words":419},"git":{"updatedTime":1736487662000,"contributors":[{"name":"huaihuashu","username":"huaihuashu","email":"october4th@88.com","commits":1,"avatar":"https://avatars.githubusercontent.com/huaihuashu?v=4","url":"https://github.com/huaihuashu"}]},"autoDesc":true,"filePathRelative":"其他/新增打赏功能.md","categoryList":[{"id":"0d98c7","sort":10000,"name":"其他"}],"bulletin":false}');export{k as comp,m as data};
