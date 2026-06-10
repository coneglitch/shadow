const setHeaderValue = (e, a, d) => {
    const r = a.toLowerCase();
    r in e ? e[r] = d : e[a] = d;
};
const modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
$done({ headers: modifiedHeaders });
