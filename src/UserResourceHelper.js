import FKPlatform from "fk-platform-sdk"
var rs = require('jsrsasign');
let clientId = "playground";
let secret = "4FKzLsQDixo2tcP3nyzp8yq6jQq57cgy8ECQkiMHE7SlMiHy";

let getSecureToken = function () {
    // Header
    var oHeader = { alg: 'RS256', typ: 'JWT' };
    // Payload
    var oPayload = {};
    var tNow = rs.KJUR.jws.IntDate.get('now');
    var tEnd = rs.KJUR.jws.IntDate.get('now') + 1000;
    oPayload.iss = "playground";
    oPayload.iat = tNow;
    oPayload.exp = tEnd;
    var sHeader = JSON.stringify(oHeader);
    var sPayload = JSON.stringify(oPayload);
    var sPKCS8PEM = "-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----";
    var prvKey = rs.KEYUTIL.getKey(sPKCS8PEM, "");
    var sJWT = rs.KJUR.jws.JWS.sign("RS256", sHeader, sPayload, prvKey);
    return sJWT;
};

export default class UserResouceHelper {

    constructor(fkPlatform) {
        this.getToken = this.getToken.bind(this);
        this.getTokenForCreds = this.getTokenForCreds.bind(this);
        this.getTokenForMerchant = this.getTokenForMerchant.bind(this);
        this.fkPlatform = fkPlatform;
    }

    getTokenForMerchant(merchant, scope, stateChange) {
        var merchantCredential;
        if (merchant == "mmt") {
            merchantCredential = {
                "name": "mmt_flipkart",
                "password": "<removed for security>"
            };

        } else if (merchant = "playground") {
            merchantCredential = {
                "name": "test_mmt_flipkart",
                "password": "a4df1221a8ba0ffcda1a2a43046a2b0bae2518f5881210bb1e2ea003fc0038fa"
            };
        }
        this.getTokenForCreds(merchantCredential, scope, stateChange);
    }

    getTokenForCreds(merchantCredential, scope, stateChange) {
        var scopeReq = JSON.parse(scope);
        this.fkPlatform.getModuleHelper().getPermissionsModule().getToken(scopeReq).then(function (e) {
            let innerText = "Grant token : " + e.grantToken + "\n";
            innerText += "result : " + JSON.stringify(e.result) + "\n";
            stateChange(innerText);

            fetch("https://platform.flipkart.net/1/authorization/auth?grantToken=" + e.grantToken + "&clientId=" + clientId + "&clientSecret=" + secret, {
                headers: {
                    'secureToken': getSecureToken()
                }
            }).then(
                function (response) { return response.json() }).catch(

                    function (e) {
                        innerText += "ID token error : " + e.message;
                        stateChange(innerText);
                    }.bind(this)).then(function (response) {

                        var idToken = response.RESPONSE.identityToken;
                        innerText += "ID token : " + idToken + "\n";
                        // localStorage.setItem("identityToken", idToken);
                        var accessToken = response.RESPONSE.accessToken;
                        innerText += "Access token : " + accessToken + "\n";
                        stateChange(innerText);


                        var postResourceBody = ["user.mobile", "user.email", "user.accountId"];
                        fetch("https://platform.flipkart.net/1/resource/bulk?accessToken=" + accessToken, {
                            method: 'POST', body: JSON.stringify(postResourceBody), headers: {
                                'Content-Type': 'application/json',
                                'secureToken': getSecureToken()
                            }
                        }).then(
                            function (response) { return response.json() }).then(function (response) {
                                innerText += "Resources: " + JSON.stringify(response.RESPONSE) + "\n";
                                stateChange(innerText);
                            }.bind(this)).catch(function (err) {
                                innerText += "Resource fetch error : " + err + "\n";
                                stateChange(innerText);
                            }.bind(this));
                        var amountPaise = 500;
                        var adjustmentWrapper = {
                            "eligibleAdjustments": []
                        };
                        var payAdjustmentsArray = [];
                        for (var i = 0; i < payAdjustmentsArray.length; i++) {
                            var adj = payAdjustmentsArray[i];
                            adjustmentWrapper.eligibleAdjustments.push({
                                "adjustment_id": adj,
                                "offerUnitPrice": amountPaise
                            });
                        }
                        var postBody = {
                            "merchantTransactionId": "PLAYGROUND_" + Math.random().toString(36).slice(2).toUpperCase(),
                            "merchantReferenceId": "PLAYGROUND_" + Math.random().toString(36).slice(2).toUpperCase(),
                            "merchantCredential": merchantCredential,
                            "amountPaise": amountPaise,
                            "paymentExpiryMilliSeconds": 1200000,
                            "userInfo": {
                                "phone": "8554917721",
                                "email": "payments-qa@makemytrip.com",
                                "identityToken": idToken
                            },
                            "adjustmentWrapper": adjustmentWrapper,
                            "successfulCallBackUrl": 'https://ultra-playground.herokuapp.com/payment-redirect.jsp?hack=mpay.makemytrip.com',
                            "failureCallBackUrl": 'https://ultra-playground.herokuapp.com/payment-redirect.jsp?hack=mpay.makemytrip.com',
                            "priceSummary": {
                                "basePricePaise": amountPaise,
                                "breakup": [
                                    {
                                        "displayText": "Convenience Fee",
                                        "valueInPaise": 0,
                                        "breakupType": "Default"
                                    }
                                ]
                            }
                        };

                        fetch("https://platform.flipkart.net/1/payment/token", {
                            method: 'POST', body: JSON.stringify(postBody), headers: new Headers({
                                'Content-Type': 'application/json',
                                'secureToken': getSecureToken()
                            })
                        }).then(function (response) { return response.json() }).catch(function (e) { textDiv.innerText = "Payment token error : " + e.message; }.bind(this)).then(function (response) {

                            var paymentToken = response.RESPONSE.token;
                            innerText += "Payment token : " + paymentToken + "\n";
                            stateChange(innerText);
                            this.openPayments(paymentToken);

                        }.bind(this))


                    }.bind(this))

        }.bind(this)).catch(function (e) {
            let innerText = "Grant token error : " + e.message + " (code : " + e.code + ")\n";
            stateChange(innerText);
        }.bind(this));


    };
    openPayments(paymentToken) {
        this.fkPlatform.getModuleHelper().getNavigationModule().startPayment(paymentToken);
    };

    getToken(scope, stateChange) {
        // var merchantSelect = document.getElementById("merchant");
        // var merchant = merchantSelect.options[merchantSelect.selectedIndex].value;
        this.getTokenForMerchant("playground", scope, stateChange);
    }
};

