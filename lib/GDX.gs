var _0x293a=['HMAC_SHA_256','length','indexOf','msgBox','Coinbase\x20Pro','https://api.pro.coinbase.com','Coinbase\x20Pro\x20(GDX)\x20API\x20Fetch\x20Error:','Receiving\x20data\x20from\x20','trim','parse','method','adattrib','command','getTime','name','application/json','MacAlgorithm','debug','floor','Coinbase\x20Pro\x20(GDX)\x20API\x20DataAll.parse\x20Error:','GDX_Priv:\x20Err\x201','GDX','/accounts','push','base64Encode','toLowerCase','currency','thirdattrib','secret','\x20Connector\x20DEBUG\x20Mode:','payload','balance','base64Decode','To\x20Sheet:\x20','uri','fetch','stringify','computeHmacSignature'];(function(_0x5babe8,_0x4de48e){var _0x293a69=function(_0x24df5c){while(--_0x24df5c){_0x5babe8['push'](_0x5babe8['shift']());}};_0x293a69(++_0x4de48e);}(_0x293a,0x88));var _0x24df=function(_0x5babe8,_0x4de48e){_0x5babe8=_0x5babe8-0xb5;var _0x293a69=_0x293a[_0x5babe8];return _0x293a69;};function GDX_GetBalances(){var _0x3c5a32=_0x24df,_0x4afa58={'id':_0x3c5a32(0xda),'name':_0x3c5a32(0xc9),'apikey':EXKEY,'secret':EXSECRET,'thirdattrib':ADATTRIB,'command':_0x3c5a32(0xb5),'apiversion':'','method':'GET','uri':_0x3c5a32(0xca),'payload':''},_0x1ba9a6={'data':null,'status':!![],'message':''},_0x177c51='',_0x53b4a0=[],_0x2ceb1e=![],_0x1ba9a6='';if(ADATTRIB[_0x3c5a32(0xb8)]()[_0x3c5a32(0xc7)](_0x3c5a32(0xd6))>=0x0){_0x2ceb1e=!![];var _0x4a6c5c=_0x4afa58[_0x3c5a32(0xba)]['split']('\x20');_0x4afa58[_0x3c5a32(0xd0)]=_0x4a6c5c[0x0]['trim'](),_0x4afa58[_0x3c5a32(0xba)]=_0x4a6c5c[0x0][_0x3c5a32(0xcd)]();}_0x1ba9a6=GDX_PrivateRequest(_0x4afa58);try{_0x1ba9a6=UrlFetchApp[_0x3c5a32(0xc2)](_0x1ba9a6['uri'],_0x1ba9a6['params']);}catch(_0xc8822e){return DebugLog(_0x3c5a32(0xcb),_0xc8822e),![];}try{_0x177c51=JSON['parse'](_0x1ba9a6['getContentText']());}catch(_0x43a3e7){return DebugLog(_0x3c5a32(0xd8),_0x1ba9a6),![];}DebugLog(_0x3c5a32(0xcc)+_0x4afa58,_0x177c51);_0x2ceb1e==!![]&&(Browser[_0x3c5a32(0xc8)](_0x4afa58[_0x3c5a32(0xd3)]+_0x3c5a32(0xbc)),Browser[_0x3c5a32(0xc8)](JSON[_0x3c5a32(0xc3)](_0x177c51)));if(!_0x177c51[_0x3c5a32(0xc6)])return DebugLog('Coinbase\x20Pro\x20(GDX)\x20API\x20return\x20null',_0x177c51),![];for(i=0x0;i<_0x177c51[_0x3c5a32(0xc6)];i++){if(Number([_0x177c51[i]['balance']]*0x5f5e100)>0x0)_0x53b4a0[_0x3c5a32(0xb6)]({'curcodeEX':_0x177c51[i][_0x3c5a32(0xb9)],'balance':Number(_0x177c51[i][_0x3c5a32(0xbe)])});}if(_0x2ceb1e==!![])Browser[_0x3c5a32(0xc8)]('To\x20Sheet:\x5cn\x5cn'+JSON[_0x3c5a32(0xc3)](_0x53b4a0));return DebugLog(_0x3c5a32(0xc0),JSON[_0x3c5a32(0xc3)](_0x53b4a0)),_0x53b4a0;}function GDX_PublicRequest(_0x43063a){var _0x4dca70=_0x24df,_0x47822e={'method':_0x43063a[_0x4dca70(0xcf)],'muteHttpExceptions':!![],'headers':{'Content-Type':_0x4dca70(0xd4)}};return{'uri':_0x43063a[_0x4dca70(0xc1)]+_0x43063a[_0x4dca70(0xd1)],'params':_0x47822e};}function GDX_PrivateRequest(_0x52fe61){var _0x1ba80c=_0x24df;function _0x150afd(_0x5a2cd9,_0x1cff49){var _0x42db25=_0x24df;return Utilities[_0x42db25(0xb7)](Utilities[_0x42db25(0xc4)](Utilities[_0x42db25(0xd5)][_0x42db25(0xc5)],Utilities['base64Decode'](Utilities[_0x42db25(0xb7)](_0x5a2cd9)),Utilities[_0x42db25(0xbf)](_0x1cff49)));}try{if(_0x52fe61[_0x1ba80c(0xd0)]===undefined)_0x52fe61[_0x1ba80c(0xd0)]=_0x52fe61[_0x1ba80c(0xba)];}catch(_0x24e59f){Logger['log'](_0x1ba80c(0xd9));}if(_0x52fe61['payload']!='')_0x52fe61[_0x1ba80c(0xbd)]=JSON[_0x1ba80c(0xc3)](_0x52fe61[_0x1ba80c(0xbd)]);var _0x359484=Math[_0x1ba80c(0xd7)](new Date()[_0x1ba80c(0xd2)]()/0x3e8)['toString'](),_0x1be607={'method':_0x52fe61['method'],'muteHttpExceptions':!![],'headers':{'CB-ACCESS-KEY':_0x52fe61['apikey'],'CB-ACCESS-SIGN':_0x150afd(_0x359484+_0x52fe61[_0x1ba80c(0xcf)]+_0x52fe61[_0x1ba80c(0xd1)]+_0x52fe61[_0x1ba80c(0xbd)],_0x52fe61[_0x1ba80c(0xbb)]),'CB-ACCESS-TIMESTAMP':_0x359484,'CB-ACCESS-PASSPHRASE':_0x52fe61[_0x1ba80c(0xd0)],'Content-Type':_0x1ba80c(0xd4)}};if(_0x52fe61[_0x1ba80c(0xbd)]!='')_0x52fe61[_0x1ba80c(0xbd)]=CreateURIQueryString(JSON[_0x1ba80c(0xce)](_0x52fe61[_0x1ba80c(0xbd)]),'?');return{'uri':_0x52fe61[_0x1ba80c(0xc1)]+_0x52fe61[_0x1ba80c(0xd1)]+_0x52fe61[_0x1ba80c(0xbd)],'params':_0x1be607};}
