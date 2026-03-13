/*********************
 * File: Footer.tsx
 * Description: Footer component
 * This is for privacy policy and terms
 * ********************/

const Footer = () => {
  return (
    <footer className="text-white bg-black py-6">
      <div className="container mx-auto px-4 flex justify-between gap-20 lg:gap-60 xl:gap-100">
        <div className="text-sm flex flex-col gap-3 flex-1">
          <p>
            Curated by LeadaMarket for the benefit of Red Hat Business Partners who are clients of
            TD SYNNEX.
          </p>
          <p>
            <a
              href="https://leadamarket.com/trading-terms/?__hstc=247219483.897421ff35bdda3f46639e3f3a90a1f4.1763634553011.1773251158080.1773320784345.9&__hssc=247219483.1.1773320784345&__hsfp=adebdb7cb5be95e8b1209c98d6268819"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View the LeadaMarket Privacy Policy
            </a>
          </p>
        </div>
        <div className="text-sm flex-1">
          <p>
            © TD SYNNEX Corporation, 2026. TD SYNNEX and TD SYNNEX logo are registered trademarks of
            TD SYNNEX Corporation in the United States and other countries. All other trademarks are
            the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
