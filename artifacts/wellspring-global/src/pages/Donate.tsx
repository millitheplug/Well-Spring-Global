import { ArrowRight, Heart, ShieldCheck, Globe2 } from "lucide-react";

const donationLink = import.meta.env.VITE_STRIPE_DONATION_LINK as string | undefined;

export default function Donate() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="rounded-[2.5rem] bg-[#0D2B1A] text-white p-8 md:p-16 overflow-hidden relative">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#AEEA00]/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6">
              <Heart size={16} className="fill-current" /> Support Well Spring Global
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
              Help us build healthier communities.
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Your contribution helps support evidence-based public health work, community programmes, research and capacity building across underserved communities.
            </p>

            {donationLink ? (
              <a
                href={donationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#AEEA00] text-[#0D2B1A] px-7 py-4 rounded-full font-semibold text-lg hover:scale-[1.02] transition-transform"
              >
                Donate securely with Stripe <ArrowRight size={20} />
              </a>
            ) : (
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 max-w-xl">
                <p className="font-semibold mb-2">Stripe is almost ready.</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Add your Stripe Payment Link as the VITE_STRIPE_DONATION_LINK GitHub Actions variable to activate donations. The payment link itself is hosted securely by Stripe, so card details never touch this website.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <ShieldCheck className="text-primary mb-4" size={28} />
            <h2 className="font-serif text-2xl mb-2">Secure checkout</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Payments are completed on Stripe's secure hosted checkout.</p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <Globe2 className="text-primary mb-4" size={28} />
            <h2 className="font-serif text-2xl mb-2">Support from anywhere</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Stripe can support international donors as well as Nigerian customers, subject to your account's enabled payment methods.</p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <Heart className="text-primary mb-4" size={28} />
            <h2 className="font-serif text-2xl mb-2">Every contribution matters</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">Choose an amount on the Stripe donation page and complete your contribution securely.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
