(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5311],{45311:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>B});var o,n=a(88647),i=a(19573),r=a(87939),s=a(69438),l=a(44588),d=a(49713),c=a(17179),u=a(10189),p=a(79028),g=a(66065),b=a(98669),m=a(77031),h=a(96927);!function(e){e.activateNextTab="application:activate-next-tab",e.activatePreviousTab="application:activate-previous-tab",e.activateNextTabBar="application:activate-next-tab-bar",e.activatePreviousTabBar="application:activate-previous-tab-bar",e.close="application:close",e.closeOtherTabs="application:close-other-tabs",e.closeRightTabs="application:close-right-tabs",e.closeAll="application:close-all",e.setMode="application:set-mode",e.toggleMode="application:toggle-mode",e.toggleLeftArea="application:toggle-left-area",e.toggleRightArea="application:toggle-right-area",e.togglePresentationMode="application:toggle-presentation-mode",e.tree="router:tree",e.switchSidebar="sidebar:switch"}(o||(o={}));const v={id:"@jupyterlab/application-extension:commands",autoStart:!0,requires:[c.ITranslator],optional:[n.ILabShell,i.ICommandPalette],activate:(e,t,a,i)=>{const{commands:s,contextMenu:l,shell:d}=e,c=t.load("jupyterlab"),u=c.__("Main Area");s.addCommand(n.JupyterFrontEndContextMenu.contextMenu,{label:c.__("Shift+Right Click for Browser Menu"),isEnabled:()=>!1,execute:()=>{}}),l.addItem({command:n.JupyterFrontEndContextMenu.contextMenu,selector:"body",rank:1/0});const g=()=>{const t=e.contextMenuHitTest((e=>!!e.dataset.id));if(!t)return d.currentWidget;const a=(0,p.toArray)(d.widgets("main")).filter((e=>e.id===t.dataset.id));return a.length<1?d.currentWidget:a[0]},b=e=>{e.forEach((e=>e.close()))},m=(e,t)=>{switch(e.type){case"split-area":{const a=(0,p.iter)(e.children);let o,n=null;do{o=a.next(),o&&(n=m(o,t))}while(!n&&o);return n}case"tab-area":{const{id:a}=t;return e.widgets.some((e=>e.id===a))?e:null}default:return null}},h=e=>{const{id:t}=e,o=(e=>{var t;const o=null==a?void 0:a.saveLayout(),n=null==o?void 0:o.mainArea;if(!n||"multiple-document"!==r.PageConfig.getOption("mode"))return null;const i=null===(t=n.dock)||void 0===t?void 0:t.main;return i?m(i,e):null})(e),n=o&&o.widgets||[],i=n.findIndex((e=>e.id===t));return i<0?[]:n.slice(i+1)},v="#jp-main-dock-panel .lm-DockPanel-tabBar.jp-Activity .lm-TabBar-tab";s.addCommand(o.close,{label:()=>c.__("Close Tab"),isEnabled:()=>{const e=g();return!!e&&e.title.closable},execute:()=>{const e=g();e&&e.close()}}),l.addItem({command:o.close,selector:v,rank:4}),s.addCommand(o.closeOtherTabs,{label:()=>c.__("Close All Other Tabs"),isEnabled:()=>{const e=d.widgets("main");return!!e.next()&&!!e.next()},execute:()=>{const e=g();if(!e)return;const{id:t}=e,a=(0,p.toArray)(d.widgets("main")).filter((e=>e.id!==t));b(a)}}),l.addItem({command:o.closeOtherTabs,selector:v,rank:4}),s.addCommand(o.closeRightTabs,{label:()=>c.__("Close Tabs to Right"),isEnabled:()=>!!g()&&h(g()).length>0,execute:()=>{const e=g();e&&b(h(e))}}),l.addItem({command:o.closeRightTabs,selector:v,rank:5}),a&&(s.addCommand(o.activateNextTab,{label:c.__("Activate Next Tab"),execute:()=>{a.activateNextTab()}}),s.addCommand(o.activatePreviousTab,{label:c.__("Activate Previous Tab"),execute:()=>{a.activatePreviousTab()}}),s.addCommand(o.activateNextTabBar,{label:c.__("Activate Next Tab Bar"),execute:()=>{a.activateNextTabBar()}}),s.addCommand(o.activatePreviousTabBar,{label:c.__("Activate Previous Tab Bar"),execute:()=>{a.activatePreviousTabBar()}}),s.addCommand(o.closeAll,{label:c.__("Close All Tabs"),execute:()=>{a.closeAll()}}),s.addCommand(o.toggleLeftArea,{label:()=>c.__("Show Left Sidebar"),execute:()=>{a.leftCollapsed?a.expandLeft():(a.collapseLeft(),a.currentWidget&&a.activateById(a.currentWidget.id))},isToggled:()=>!a.leftCollapsed,isVisible:()=>!a.isEmpty("left")}),s.addCommand(o.toggleRightArea,{label:()=>c.__("Show Right Sidebar"),execute:()=>{a.rightCollapsed?a.expandRight():(a.collapseRight(),a.currentWidget&&a.activateById(a.currentWidget.id))},isToggled:()=>!a.rightCollapsed,isVisible:()=>!a.isEmpty("right")}),s.addCommand(o.togglePresentationMode,{label:()=>c.__("Presentation Mode"),execute:()=>{a.presentationMode=!a.presentationMode},isToggled:()=>a.presentationMode,isVisible:()=>!0}),s.addCommand(o.setMode,{isVisible:e=>{const t=e.mode;return"single-document"===t||"multiple-document"===t},execute:e=>{const t=e.mode;if("single-document"!==t&&"multiple-document"!==t)throw new Error(`Unsupported application shell mode: ${t}`);a.mode=t}}),s.addCommand(o.toggleMode,{label:c.__("Simple Interface"),isToggled:()=>"single-document"===a.mode,execute:()=>{const e="multiple-document"===a.mode?{mode:"single-document"}:{mode:"multiple-document"};return s.execute(o.setMode,e)}})),i&&[o.activateNextTab,o.activatePreviousTab,o.activateNextTabBar,o.activatePreviousTabBar,o.close,o.closeAll,o.closeOtherTabs,o.closeRightTabs,o.toggleLeftArea,o.toggleRightArea,o.togglePresentationMode,o.toggleMode].forEach((e=>i.addItem({command:e,category:u})))}},y={id:"@jupyterlab/application-extension:main",requires:[n.IRouter,i.IWindowResolver,c.ITranslator],optional:[n.IConnectionLost],provides:n.ITreePathUpdater,activate:(e,t,a,o,s)=>{const l=o.load("jupyterlab");if(!(e instanceof n.JupyterLab))throw new Error(`${y.id} must be activated in JupyterLab.`);let d="",c="";const u=a.name;if(console.debug(`Starting application in workspace: "${u}"`),0!==e.registerPluginErrors.length){const t=h.createElement("pre",null,e.registerPluginErrors.map((e=>e.message)).join("\n"));(0,i.showErrorMessage)(l.__("Error Registering Plugins"),{message:t})}e.shell.layoutModified.connect((()=>{e.commands.notifyCommandChanged()})),e.shell.modeChanged.connect(((e,a)=>{const o=r.PageConfig.getUrl({mode:a});t.navigate(o,{skipRouting:!0}),r.PageConfig.setOption("mode",a)})),e.shell.currentPathChanged.connect(((e,a)=>{const o=a.newValue,n=o||c,i=r.PageConfig.getUrl({treePath:n});t.navigate(i,{skipRouting:!0}),r.PageConfig.setOption("treePath",n),d=o})),s=s||n.ConnectionLost,e.serviceManager.connectionFailure.connect(((e,t)=>s(e,t,o)));const p=e.serviceManager.builder,g=()=>p.build().then((()=>(0,i.showDialog)({title:l.__("Build Complete"),body:h.createElement("div",null,l.__("Build successfully completed, reload page?"),h.createElement("br",null),l.__("You will lose any unsaved changes.")),buttons:[i.Dialog.cancelButton({label:l.__("Reload Without Saving"),actions:["reload"]}),i.Dialog.okButton({label:l.__("Save and Reload")})],hasClose:!0}))).then((({button:{accept:a,actions:o}})=>{a?e.commands.execute("docmanager:save").then((()=>{t.reload()})).catch((e=>{(0,i.showErrorMessage)(l.__("Save Failed"),{message:h.createElement("pre",null,e.message)})})):o.includes("reload")&&t.reload()})).catch((e=>{(0,i.showErrorMessage)(l.__("Build Failed"),{message:h.createElement("pre",null,e.message)})}));p.isAvailable&&p.shouldCheck&&p.getStatus().then((e=>{if("building"===e.status)return g();if("needed"!==e.status)return;const t=h.createElement("div",null,l.__("JupyterLab build is suggested:"),h.createElement("br",null),h.createElement("pre",null,e.message));(0,i.showDialog)({title:l.__("Build Recommended"),body:t,buttons:[i.Dialog.cancelButton(),i.Dialog.okButton({label:l.__("Build")})]}).then((e=>e.button.accept?g():void 0))}));const b=l.__("Are you sure you want to exit JupyterLab?\n\nAny unsaved changes will be lost.");return window.addEventListener("beforeunload",(t=>{if(e.status.isDirty)return t.returnValue=b})),function(e){if(c=e,!d){const a=r.PageConfig.getUrl({treePath:e});t.navigate(a,{skipRouting:!0}),r.PageConfig.setOption("treePath",e)}}},autoStart:!0},f={id:"@jupyterlab/application-extension:layout",requires:[d.IStateDB,n.ILabShell],activate:(e,t,a,o)=>{const i=e.started,s=e.commands,l=new n.LayoutRestorer({connector:t,first:i,registry:s});return l.fetch().then((e=>{a.restoreLayout(r.PageConfig.getOption("mode"),e),a.layoutModified.connect((()=>{l.save(a.saveLayout())}))})),l},autoStart:!0,provides:n.ILayoutRestorer},_={id:"@jupyterlab/application-extension:router",requires:[n.JupyterFrontEnd.IPaths],activate:(e,t)=>{const{commands:a}=e,o=t.urls.base,i=new n.Router({base:o,commands:a});return e.started.then((()=>{i.route(),window.addEventListener("popstate",(()=>{i.route()}))})),i},autoStart:!0,provides:n.IRouter},x={id:"@jupyterlab/application-extension:tree-resolver",autoStart:!0,requires:[n.IRouter],provides:n.JupyterFrontEnd.ITreeResolver,activate:(e,t)=>{const{commands:a}=e,n=new b.DisposableSet,i=new g.PromiseDelegate,s=new RegExp("/(lab|doc)(/workspaces/[a-zA-Z0-9-_]+)?(/tree/.*)?");n.add(a.addCommand(o.tree,{execute:async e=>{var t;if(n.isDisposed)return;const a=r.URLExt.queryStringToObject(null!==(t=e.search)&&void 0!==t?t:""),o=a["file-browser-path"]||"";delete a["file-browser-path"],n.dispose(),i.resolve({browser:o,file:r.PageConfig.getOption("treePath")})}})),n.add(t.register({command:o.tree,pattern:s}));const l=()=>{n.isDisposed||(n.dispose(),i.resolve(null))};return t.routed.connect(l),n.add(new b.DisposableDelegate((()=>{t.routed.disconnect(l)}))),{paths:i.promise}}},w={id:"@jupyterlab/application-extension:notfound",requires:[n.JupyterFrontEnd.IPaths,n.IRouter,c.ITranslator],activate:(e,t,a,o)=>{const n=o.load("jupyterlab"),r=t.urls.notFound;if(!r)return;const s=a.base,l=n.__("The path: %1 was not found. JupyterLab redirected to: %2",r,s);a.navigate(""),(0,i.showErrorMessage)(n.__("Path Not Found"),{message:l})},autoStart:!0},T={id:"@jupyterlab/application-extension:faviconbusy",requires:[n.ILabStatus],activate:async(e,t)=>{t.busySignal.connect(((e,t)=>{const a=document.querySelector('link[rel="icon"]'+(t?".idle.favicon":".busy.favicon"));if(!a)return;const o=document.querySelector("link"+(t?".busy.favicon":".idle.favicon"));o&&a!==o&&(a.rel="",o.rel="icon",o.parentNode.replaceChild(o,o))}))},autoStart:!0},C="@jupyterlab/application-extension:sidebar",P={id:C,autoStart:!0,requires:[l.ISettingRegistry,n.ILabShell,c.ITranslator],activate:(e,t,a,n,i)=>{const r=n.load("jupyterlab");let s={};const l=()=>{(0,p.each)(a.widgets("left"),(e=>{s[e.id]&&"right"===s[e.id]&&a.add(e,"right")})),(0,p.each)(a.widgets("right"),(e=>{s[e.id]&&"left"===s[e.id]&&a.add(e,"left")}))};a.layoutModified.connect(l),Promise.all([t.load(C),e.restored]).then((([e])=>{s=e.get("overrides").composite||{},e.changed.connect((e=>{s=e.get("overrides").composite||{},l()}))})),e.commands.addCommand(o.switchSidebar,{label:r.__("Switch Sidebar Side"),execute:()=>{const a=e.contextMenuHitTest((e=>!!e.dataset.id));let o,n;if(!a)return;{o=a.dataset.id;const e=document.getElementById("jp-left-stack"),t=document.getElementById(o);n=e&&t&&e.contains(t)?"right":"left"}const i=Object.assign({},s);return i[o]=n,t.set(C,"overrides",i)}}),e.contextMenu.addItem({command:o.switchSidebar,selector:".jp-SideBar .lm-TabBar-tab",rank:500})}},S={id:"@jupyterlab/application-extension:shell",activate:e=>{if(!(e.shell instanceof n.LabShell))throw new Error(`${S.id} did not find a LabShell instance.`);return e.shell},autoStart:!0,provides:n.ILabShell},I={id:"@jupyterlab/application-extension:status",activate:e=>{if(!(e instanceof n.JupyterLab))throw new Error(`${I.id} must be activated in JupyterLab.`);return e.status},autoStart:!0,provides:n.ILabStatus},E={id:"@jupyterlab/application-extension:info",activate:e=>{if(!(e instanceof n.JupyterLab))throw new Error(`${E.id} must be activated in JupyterLab.`);return e.info},autoStart:!0,provides:n.JupyterLab.IInfo},L={id:"@jupyterlab/apputils-extension:paths",activate:e=>{if(!(e instanceof n.JupyterLab))throw new Error(`${L.id} must be activated in JupyterLab.`);return e.paths},autoStart:!0,provides:n.JupyterFrontEnd.IPaths},R={id:"@jupyterlab/application-extension:property-inspector",autoStart:!0,requires:[n.ILabShell,c.ITranslator],optional:[n.ILayoutRestorer],provides:s.IPropertyInspectorProvider,activate:(e,t,a,o)=>{const n=a.load("jupyterlab"),i=new s.SideBarPropertyInspectorProvider(t,void 0,a);return i.title.icon=u.buildIcon,i.title.caption=n.__("Property Inspector"),i.id="jp-property-inspector",t.add(i,"right",{rank:100}),o&&o.add(i,"jp-property-inspector"),i}},M={id:"@jupyterlab/application-extension:logo",autoStart:!0,requires:[n.ILabShell],activate:(e,t)=>{const a=new m.Widget;u.jupyterIcon.element({container:a.node,elementPosition:"center",margin:"2px 2px 2px 8px",height:"auto",width:"16px"}),a.id="jp-MainLogo",t.add(a,"top",{rank:0})}},B=[y,v,f,_,x,w,T,P,S,I,E,L,R,M]}}]);
//# sourceMappingURL=5311.61a3f86e3426d8b1c2e5.js.map