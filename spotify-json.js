let url = $request.url;
url = url.includes('com:443') ? url.replace(/com:443/, 'com') : url;
url = url.includes('platform=iphone') ? url.replace(/platform=iphone/, 'platform=ipad') : url;
$done({ url });
