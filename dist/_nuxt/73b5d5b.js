(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{369:function(t,e,o){"use strict";o.r(e);var n={props:["post"],mounted:function(){console.log(this.post,"post")}},l=o(56),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post"},[o("div",{staticClass:"header"},[o("img",{staticClass:"image-profil",attrs:{src:t.post.fields.imageProfile.fields.file.url,alt:"Image du post Linkedin"}}),t._v(" "),o("h4",{staticClass:"nom-profil"},[t._v(t._s(t.post.fields.nomProfil))])]),t._v(" "),o("p",{staticClass:"description-profil"},[t._v(t._s(t.post.fields.descriptionProfil))]),t._v(" "),o("h5",{staticClass:"titre-post"},[t._v(t._s(t.post.fields.titrePost))]),t._v(" "),o("img",{staticClass:"image-post",attrs:{src:t.post.fields.imagePost.fields.file.url,alt:"Image du post Linkedin"}})])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,o){"use strict";o.r(e);var n=o(60),l={mounted:function(){this.$store.dispatch("loadPostsLinkedin")},computed:Object(n.b)(["postsLinkedin"])},r=o(56),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"post-container"},t._l(t.postsLinkedin,(function(t){return o("LinkedinPost",{key:t.sys.id,attrs:{post:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LinkedinPost:o(369).default})}}]);