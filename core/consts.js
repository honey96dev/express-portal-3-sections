export const consts = {
  annualUpcomingYear: 'annual-upcoming-year',
  annualUpcomingSummaryEn: 'annual-upcoming-summary-en',
  annualUpcomingSummaryAr: 'annual-upcoming-summary-ar',
  upcoming: 'upcoming',
  previous: 'previous',
  annual: 'annual',
  event: 'event',
  course: 'course',
};

export const tokenLifetime = 24;
export const tokenStatus = {
  VALID: 1,
  EXPIRED: 2,
  NOT_FOUND: 3,
  ALREADY_USED: 4,
  EMAIL_NOT_FOUND: 5,
};

export const resetPasswordUri = "auth/reset-password";

export default {
  consts,
  tokenLifetime,
  tokenStatus,
  resetPasswordUri,
}
