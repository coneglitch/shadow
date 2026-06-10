const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
};
const ua = $request.headers["User-Agent"] ?? $request.headers["user-agent"];
let obj;
try {
    obj = JSON.parse($response.body);
} catch (e) {
    $done({});
}

if (!obj || !obj.subscriber) {
    $done({});
}

obj.Attention = "ChA c m ng b n! Vui lA ng khA'ng bA n ho c chia s  cho ng  i khA c!";

const now = new Date();
const nextYear = new Date(now.setFullYear(now.getFullYear() + 1)).toISOString();
const currentStr = new Date().toISOString();

const duyvinh09 = {
    auto_resume_date: null,
    display_name: "locket_1600_1y",
    is_sandbox: true,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    management_url: "https://apps.apple.com/account/subscriptions",
    period_type: "normal",
    price: { amount: 399000.0, currency: "VND" },
    expires_date: nextYear,
    grace_period_expires_date: null,
    refunded_at: null,
    unsubscribe_detected_at: null,
    original_purchase_date: currentStr,
    purchase_date: currentStr,
    store: "app_store",
    store_transaction_id: "20000" + Math.floor(Math.random() * 90000000000 + 10000000000)
};

const locketGold = {
    grace_period_expires_date: null,
    purchase_date: currentStr,
    product_identifier: "locket_1600_1y",
    expires_date: nextYear
};

const match = Object.keys(mapping).find(e => ua?.includes(e));

if (match) {
    const [e, s] = mapping[match];
    if (s) {
        locketGold.product_identifier = s;
        obj.subscriber.subscriptions[s] = duyvinh09;
    } else {
        obj.subscriber.subscriptions["locket_1600_1y"] = duyvinh09;
        obj.subscriber.entitlements[e] = locketGold;
    }
} else {
    obj.subscriber.subscriptions["locket_1600_1y"] = duyvinh09;
    obj.subscriber.entitlements.pro = locketGold;
}

$done({ body: JSON.stringify(obj) });
