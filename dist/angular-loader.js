/*! rcm-loading 2015-05-14 */

angular.module("RcmLoading",[]).factory("rcmLoadingService",function(){return rcmLoading.getServiceInstance()}).directive("rcmGlobalLoader",["rcmLoadingService",function(rcmLoadingService){var baseUrl=rcmLoadingService.getConfigValue("baseUrl","."),template=rcmLoadingService.getConfigValue("template","default"),templateFolder=rcmLoadingService.getConfigValue("templateFolder","/template"),url={template:null,css:null},buildUrls=function(template){url.template=baseUrl+templateFolder+"/"+template+"/loading.html",url.css=baseUrl+templateFolder+"/"+template+"/loading.css"};buildUrls(template);var compile=function(tElm,tAttr){return function(scope,element,attrs){scope.safeApply=function(fn){var phase=this.$root.$$phase;"$apply"==phase||"$digest"==phase?this.$eval(fn):this.$apply(fn)},scope.cssUrl=url.css;var loadingMessage=rcmLoadingService.getConfigValue("loadingMessage","Loading.."),loadingCompleteMessage=rcmLoadingService.getConfigValue("loadingCompleteMessage","Complete");scope.isLoading=!1,rcmLoadingService.events.on("rcmLoadingService.loadingStart",function(loadingParams){scope.loadingPercent=loadingParams.tracker.getPercent(),scope.loadingMessage=loadingMessage,scope.isLoading=!0,scope.safeApply()},"rcmGlobalLoader",!0),rcmLoadingService.events.on("rcmLoadingService.loadingChange",function(loadingParams){scope.loadingPercent=loadingParams.tracker.getPercent(),scope.loadingMessage=loadingMessage,scope.isLoading=!0,scope.safeApply()},"rcmGlobalLoader",!0),rcmLoadingService.events.on("rcmLoadingService.loadingComplete",function(loadingParams){scope.loadingPercent=loadingParams.tracker.getPercent(),scope.loadingMessage=loadingCompleteMessage,scope.isLoading=!1,scope.safeApply()},"rcmGlobalLoader",!0)}};return{compile:compile,scope:[],templateUrl:url.template}}]);
//# sourceMappingURL=rcm-loading.map