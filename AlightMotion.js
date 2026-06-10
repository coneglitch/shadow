const now = new Date();
const currentTs = now.getTime();
const expireTs = currentTs + (5 * 365 * 24 * 60 * 60 * 1000); // 5 years from now
const fakeOrderId = "30000" + Math.floor(Math.random() * 9000000000 + 1000000000);

const objc = {
    result: {
        result: "success",
        msTime: currentTs,
        accountCreatedMillis: null,
        licenses: [{
            benefits: ["RemoveWatermark", "MemberEffects", "ProjectPackageSharing", "FutureMemberFeatures", "AdvancedEasing", "CameraObjects", "LayerParenting", "CloudStorageLowTier"],
            type: "subscription",
            store: "apple_app_store",
            autoRenewing: true,
            orderNumber: fakeOrderId,
            productId: "alightcreative.motion.1y_t60_1w",
            period: "1y",
            label: null,
            details: null,
            expires: expireTs,
            valid: true,
            linkStatus: "linked-current"
        }],
        warnings: []
    }
};
$done({ body: JSON.stringify(objc) });
