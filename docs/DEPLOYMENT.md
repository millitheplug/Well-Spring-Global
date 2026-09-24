# Well Spring Global — GitHub + Stripe deployment

The website is now independent of Replit and deploys as a static Vite site through GitHub Pages.

## 1. Create the Stripe donation link

Create a Stripe account for the organisation and complete Stripe's verification requirements for the business/entity and payout account.

In Stripe, create a Payment Link for donations. For a flexible donation experience, configure the link so the customer can choose the amount where that feature is available to the account.

Copy the resulting Payment Link URL.

## 2. Add the link to GitHub

In the repository, open **Settings → Secrets and variables → Actions** and create this repository secret:

`VITE_STRIPE_DONATION_LINK`

Set its value to the Stripe Payment Link URL.

The URL is intentionally injected into the public website at build time. It is not a Stripe API secret. Never put a Stripe secret key in `VITE_*` variables or in source code.

## 3. Enable GitHub Pages

Open **Settings → Pages** and set the publishing source to **GitHub Actions**.

After that, every push to `main` runs `.github/workflows/deploy-pages.yml`, builds `artifacts/wellspring-global`, and publishes the resulting static site.

## 4. Expected site URL

For this repository, the default project Pages URL is:

`https://millitheplug.github.io/Well-Spring-Global/`

A custom domain can be configured later in GitHub Pages settings.

## Important Stripe note

The website does not store or process card details. The Donate button sends donors to Stripe's hosted checkout. Stripe availability, payment methods, account verification and payout eligibility are controlled by Stripe and can vary by account and country.
