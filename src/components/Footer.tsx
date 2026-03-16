/*********************
 * File: Footer.tsx
 * Description: Footer component
 * This is for privacy policy and terms
 * ********************/

"use client";

import posthog from "posthog-js";

const Footer = () => {
  const handlePrivacyPolicyClick = () => {
    posthog.capture("privacy_policy_clicked");
  };

  return (
    <footer className="bg-black py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-4 lg:flex-row lg:items-start lg:gap-60 xl:gap-100">
        <div className="mx-auto flex w-fit flex-1 flex-col gap-6 text-left text-sm lg:gap-3">
          <p className="mx-auto w-fit text-left sm:mx-0">
            Curated by LeadaMarket for the benefit of Red Hat Business Partners
            who are clients of TD SYNNEX.
          </p>
          <p className="mx-auto -mb-3 w-fit max-w-prose lg:mx-0">
            <a
              href="https://leadamarket.com/trading-terms/?__hstc=247219483.897421ff35bdda3f46639e3f3a90a1f4.1763634553011.1773251158080.1773320784345.9&__hssc=247219483.1.1773320784345&__hsfp=adebdb7cb5be95e8b1209c98d6268819"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              onClick={handlePrivacyPolicyClick}
            >
              View the LeadaMarket Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex-1 text-sm">
          <p>
            © TD SYNNEX Corporation, 2026. TD SYNNEX and TD SYNNEX logo are
            registered trademarks of TD SYNNEX Corporation in the United States
            and other countries. All other trademarks are the property of their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
