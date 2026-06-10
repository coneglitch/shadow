const fakeOrderId = "20000" + Math.floor(Math.random() * 90000000000 + 10000000000);
const now = new Date();
const currentTs = now.getTime();
const expireTs = currentTs + (5 * 365 * 24 * 60 * 60 * 1000); // 5 years from now

const objc = {
    status: "success",
    response: [{
        status: "SUBSCRIPTION_RENEWED",
        is_trial: false,
        order_id: fakeOrderId,
        expire_date: expireTs,
        purchase_date: currentTs,
        subscription_id: "com.picsart.studio.subscription_pro_3_yearly",
        original_order_id: "2000000756285050",
        plan_meta: {
            permissions: ["premium_tools_standard", "premium_tools_ai"],
            auto_renew_product_id: "com.picsart.studio.subscription_mac_tier1_pro_yearly",
            level: 2000,
            storage_limit_in_mb: 102400,
            id: "com.picsart.studio.subscription_pro_3_yearly",
            frequency: "yearly",
            type: "renewable",
            scope_id: "full",
            product_id: "com.picsart.studio.subscription_pro_3_yearly",
            tier_id: "pro"
        },
        limitation: { max_count: 10, limits_exceeded: false },
        is_eligible_for_introductory: false,
        reason: "ok"
    }]
};
$done({ response: { body: JSON.stringify(objc), status: 200 } });
