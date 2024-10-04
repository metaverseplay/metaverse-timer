const express = require("express");
const {
  chnagePassWord,
  getGameHistory,
  getMyHistory,
  placeBetTrx,
  loginPage,
  myHistoryWingo,
  placeBetWingo,
  gameHistoryWingo,
  getBalance,
  getLevels,
  getDepositlHistory,
  addUSDTAddress,
  uddtAddressHistory,
  getWithdrawlHistory,
  getLevelIncome,
  getStatus,
  getSubOrdinateData,
  getAllCommission,
  transfer_Amount_to_mainWallet_from_WorkingWallet,
  get_transfer_history_working_to_main_wallet,
  getDailySalaryIncome,
  getWeeklySalaryIncome,
  getTopWinners,
  getSelfDepositBonus,
  getSponsorIncome,
  needToBet,
  getCashBack,
  getTotalBetAndIncomeYesterday,
  getMyHistoryTemp,
  ticketRaised,
  getTicketRaisedHistory,
  signupUser,
  getUserNameByUserId,
  getAttendanceBonus,
  clameAttendanceBonus,
  clameBonus,
  getInvitationBonus,
  getWinningStreakBonus,
  getVipBonus,
  getDailySalary,
  getDepositBonus,
  forGetPassword,
  veryFyOTP,
  updatePassword,
  payInRequest,
  payOutRequest,
  getDepositHistoryUSDT,
  getWithdrawalHistoryUSDT,
  getAdminQrAddress,
  getProfileData,
  getDepositHistoryINR,
  getWihdrawalHistoryINR,
  addBankAddress,
  userBankDetails,
  hideStatusOfDepositPopup,
  userGetLevelData,
  getGiftCardList,
  clameGiftCard,
  getGiftBonusList,
  sendRegistrationOTP,
  verifyRegistrationOTP,
  getWelcomeBonus,
  getDirectFirstRechargeBonus,
} = require("../controller");
const {
  getPaymentGateway,
  getCallBack,
  withdrawlRequest,
  withdrawlCallBack,
  update_member_withdrawal_gatway,
} = require("../controller/payment_gateway");
const {
  betPlacedAviator,
  cashOutFunction,
  getGameHistoryAviator,
  getLederData,
  getWalletByUserId,
  getMyHistoryByID,
  getTopRecordsAviator,
} = require("../controller/Aviator_Start");
const router = express.Router();

////////// trx ///////////////////
router.get("/trx-auto-genrated-result", getGameHistory);
router.get("/trx-getColourBets", getMyHistory);
router.get("/trx-getColourBets-temp", getMyHistoryTemp);
router.post("/trx-bet", placeBetTrx);

////////   wingo api ///////////////////
router.get("/getbet-game-results", myHistoryWingo); /// my history
router.get("/colour_result", gameHistoryWingo); /// game history
router.post("/bet", placeBetWingo); /// game history
router.get(
  "/get-total-betA-ad-income-yesterday",
  getTotalBetAndIncomeYesterday
); /// game history

///////////////////// general api's ////////////////
router.get("/userwallet", getBalance);
router.get("/get-top-winners", getTopWinners);
router.post("/user_login", loginPage);
router.post("/signup", signupUser);
router.get("/get-sponsor-name", getUserNameByUserId);
router.post("/change-password", chnagePassWord);
router.get("/get-level", getLevels);
router.post("/payment", getPaymentGateway);
router.post("/call-back", getCallBack);
router.get("/coin-payment-deposit-history", getDepositlHistory);
router.get("/coin-payment-withdrawl-history", getWithdrawlHistory);
router.post("/withdrawl-request", withdrawlRequest);
router.post("/add-usdt-address", addUSDTAddress);
router.get("/usdt-address-record", uddtAddressHistory);
router.post("/withdrawlCallBack", withdrawlCallBack);
router.get("/approve-by-admin", update_member_withdrawal_gatway);
router.get("/level-income", getLevelIncome);
router.get("/self-deposit-bonus", getSelfDepositBonus);
router.get("/sponsor-income", getSponsorIncome);
router.get("/need-to-bet", needToBet);
router.get("/daily-salary-icome", getDailySalaryIncome);
router.get("/weekly-salary-icome", getWeeklySalaryIncome);
router.get("/get-status", getStatus);
router.post("/get-subordinate-data-funx", getSubOrdinateData);
router.post("/get-commisssion-data-funx", getAllCommission);
router.post(
  "/transfer-amount-from-working-wallet-to-main-wallet",
  transfer_Amount_to_mainWallet_from_WorkingWallet
);
router.get(
  "/transfer-history-from-working-wallet-to-main-wallet",
  get_transfer_history_working_to_main_wallet
);
router.get("/getCashBack-report", getCashBack);
router.post("/ticket-raised", ticketRaised);
router.get("/ticket-raised-history", getTicketRaisedHistory);
router.get("/attendance-bonus", getAttendanceBonus);
router.get("/clame-bonus", clameBonus);
router.get("/inivitation-bonus", getInvitationBonus);
router.get("/winning-streak-bonus", getWinningStreakBonus);
router.get("/vip-bonus", getVipBonus);
router.get("/daily-salary-income", getDailySalary);
router.get("/get-deposit-bonus-income", getDepositBonus);
router.post("/forget-password-send-otp", forGetPassword);
router.post("/forget-password-veryfy-otp", veryFyOTP);
router.post("/forget-password-change-pass", updatePassword);
router.post("/payin-request", payInRequest);
router.post("/payout-request", payOutRequest);
router.get("/deposit-history-usdt", getDepositHistoryUSDT);
router.get("/withdrawal-history-usdt", getWithdrawalHistoryUSDT);
router.get("/admin-qr-address", getAdminQrAddress);
router.get("/profileapi", getProfileData);
router.get("/deposit-history-inr", getDepositHistoryINR);
router.get("/withdrawal-history-inr", getWihdrawalHistoryINR);
router.post("/bank-add", addBankAddress);
router.get("/user-bank-details", userBankDetails);
router.get("/get_level_general_data", userGetLevelData);
router.post("/hideStatusOfDepositPopup", hideStatusOfDepositPopup);
router.get("/get-gift-card-list", getGiftCardList);
router.get("/welcome-bonus", getWelcomeBonus);
router.get("/get-direct-first-recharge-bonus", getDirectFirstRechargeBonus);
router.post("/claim-gift-card", clameGiftCard);
router.get("/gift-bonus-list", getGiftBonusList);
router.post("/registration-send-otp", sendRegistrationOTP);
router.post("/registration-veryfy-otp", verifyRegistrationOTP);

///////////////// aviator api's /////////////////
router.post("/apply-bet-aviator-first", betPlacedAviator);
router.post("/cash-out-aviator-last", cashOutFunction);
router.get("/get-game-history", getGameHistoryAviator);
router.get("/get-ledger-data", getLederData);
router.post("/get-wallet-amount-by-id", getWalletByUserId);
router.post("/my-history-by-user-id", getMyHistoryByID);
router.get("/get-top-users", getTopRecordsAviator);
module.exports = router;
